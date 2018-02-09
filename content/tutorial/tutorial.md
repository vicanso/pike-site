---
id: tutorial
title: "为什么需要Pike"
layout: tutorial
sectionid: tutorial
permalink: tutorial/tutorial.html
redirect_from:
  - "docs/tutorial.html"
  - "docs/why-react.html"
  - "docs/tutorial-ja-JP.html"
  - "docs/tutorial-ko-KR.html"
  - "docs/tutorial-zh-CN.html"
---

HTTP缓存服务，提供高效简单的HTTP缓存服务。

一直以来都使用`varnish`来做HTTP缓存，喜欢它的性能高效与vcl配置的强大。在规范化缓存的配置之后，强大的vcl对于我也没有太多的作用了，此时我更希望易上手，更简洁的配置，`Pike`则由此诞生。

`Pike`主要基于`fasthttp`与`badger`两个开源库开发

## 特性

- 基于yaml的配置，简洁易懂
- WEB管理后台，提供系统性能、黑名单IP、缓存清理功能
- 标准化的基于HTTP头Cache-Control缓存控制
- 压缩保存的响应数据，避免每次响应时重新压缩（如果客户端不支持压缩则解压）
- 自定义日志格式，支持二十多种placeholder，如：cookie，请求头字段，响应头字段，响应时间等。
- 访问日志支持以文件（按天分隔）或者UDP的形式输出

## 前言

在刚开始从前端转向后端开发之后，对于接口性能的优化手段比较单一，都是接口缓存化，经历了两个阶段：

- 将复杂的处理过期结果缓存至`mongodb`，后续取数据从缓存中读取
- 使用`redis`替换`mongodb`，细化接口缓存公共逻辑

从`mongodb` --> `redis` 的缓存架构中，性能上是有所提升，但是还是无法避免缓存之间的数据交叉使用（如缓存A的数据从缓存B与缓存C的数据组合），在数据有误时需要清除缓存时痛点，交叉使用的数据已经无法理清该清理哪些缓存。

在系统稳定下来之后，对于杂乱的缓存设计也是时候理一理了。由于是资讯类的站点，我们的数据有着准实时性的特性，而缓存上我们希望是支持HTTP（这样将缓存前置，性能更高效），需要缓存设置与过期等都简单易用。在考察了各类的缓存软件，最终我们选择了`varnish`，使用`varnish`做HTTP缓存，缓存处理前置，避免更复杂的各缓存数据的交叉影响，在完成系统切换之后，感觉一下子世界变得美好多了，一切都是那么有条不紊。

在这几年使用`varnish`的过程中，也遇到过不少的坑，它的`vcl`很强大，可以通过自己配置各种不同的缓存处理方式，而用得越多，越来越觉得不需要太复杂的配置方式。

我们的现状是每个系统都自己配置一套自己的`vcl`，大家已迷失在配置的海洋里。后续开始慢慢收敛自定义的配置，只支持使用HTTP的`Cache-Control`来处理缓存，标准化此类中间件的使用。

`varnish`很好很强大，一直以来都想自己来实现一个类似的`varnish`，但是以前只是对`node.js`比较熟悉，`C/C++`还处于很水货的层面（主要学不懂），后来接触了`golang`，其性能上的优越性让我心动不已，因此码出一个http cache:`Pike`


## 对缓存使用的误区

### 缓存主要是为了提升系统的处理并发量，而不是让本来慢的请求变得响应快

在这几年遇到过不少这样的情况，开发人员将本来慢的接口加下`varnish`处理之后，在第一次调用时接口很慢，但是后续缓存生效之后，接口响应就快了很多，这样立即解决了测试（产品）对于接口慢的抱怨，自己也不用做太多的调整。

结果还是接口太慢超时，导致等待中的其它请求直接pass至后端（由于超时设置太长，等待堆积的请求更多），系统变得更卡，最终雪崩效应，整个系统都拖垮了。

后续我们规范了所有请求都需要在3秒内响应，对于超时的请求，每天排查相关统计数据，保证系统的高效性。而对于一些处理时间比较长的功能，我们调整为异步的处理，客户端请求时，生成后台任务，记录任务状态至数据库，并返回至客户端。后续再请求时，直接查询状态，如果还是处理中，直接返回保证了接口的性能。

### HTTP缓存的有效期过长

在日常使用场景中，有部分的HTTP接口依赖多个服务或者数据源，将多个数据合并处理生成响应数据。在以往使用`varnish`的时候，对于缓存时长的设置，都是根据自己的经验判断，觉得某些数据都不会改变，会设置1，2个小时的缓存时长。而事实上，有些数据总会因为产品配置等人为因素导致错误，此时又要去清除缓存，虽然不复杂但是也挺让人烦恼（因为有些配置的数据可能会影响多个接口，通常无法短时间内整理出来）。

至此我开始认真的考虑长缓存是否有意义？是否能使用更短的缓存有效期呢？如果我使用1分钟的缓存有效期来替换1个小时的，对于系统的性能是否有大的影响呢？答案是：『不会』。因为`varnish`对于请求的处理方式保证了，在缓存过期之后，有更多的请求同时发生，也只会有一个请求转发至后端。而每1分钟一次的接口处理，不太可能增加大的负载（此时又强调一次，正常负载下，接口的响应应该是快速的）。使用短缓存之后，就算是数据配置错误，而缓存会在短时间之内更新，也就不再需要手工处理（找运维人员，提供需要清理的接口，再到清理完成，等操作完成，估计都不止1分钟）

### 缓存有效期设置方式的形式多样

由于`vcl`的灵活性，我们可以通过各种不同的形式来设置缓存时长。有些项目直接在`vcl`指定`url`的缓存时长，有些就使用自定义HTTP头`X-TTL`来设置，最终就出现了上千行的`vcl`配置。对于一个接口的缓存场景，每次都需要查一下配置文件，真是坑了运维坑了自己。

其实`varnish`本来就支持以`Cache-Control`来设置缓存有效期的方式，因此我们对整个公司的项目强行推行标准化，对于无设置`Cache-Control`的，全部认为不可缓存（宁愿性能变差也不可数据出错）。一个个项目的做切换调整，最终出来的效果挺不错，运维对于`varnish`的配置全部标准化，不再需要运维去关心缓存的处理，全部交由接口开发人员自己定义（原则上也只有开发人员才清楚接口是否可以缓存，可以缓存多久）

注：varnish支持从`Cache-Control`中优先选择`s-maxage`，再选择`max-age`，因此对于希望客户端缓存时间较长，但服务端使用短缓存，则配置不同的maxAge，如`Cache-Control: public, max-age=3600, s-maxage=60`。如果想了解`varnish`的各种特性，可以阅读我之前写的`善用HTTP缓存利器-Varnish`


## HTTP缓存服务的设计

谁最清楚接口是否可以缓存？接口开发者！谁最清楚接口应该缓存多久？接口开发者！谁来控制缓存的有效期？Cache-Control!

由开发者控制，最简单的缓存形式

对于HTTP缓存服务，主要实现以下几点：

- 简化缓存的配置，使用HTTP的标准头`Cache-Control`来控制缓存
- 对于响应时无设置`Cache-Control`的，默认为不缓存（varnish可以通过设置default ttl来实现为可缓存），宁愿牺牲性能也不可以缓存了不可缓存的数据
- 根据`Cache-Control`判断该请求不可缓存的，记录缓存状态`hit-for-pass`，提升缓存判断的效率
- 支持指定规则的url则直接为`pass`，提升系统性能（如GET /user/xx 这种接口都是不可缓存的）
- 对于过期缓存数据能自动清除，不需要手工干预
- 支持健康检查，支持不同的策略选择后端服务
- 简化配置，配置文件使用`yaml`格式，简单易懂

下面看看pike的配置（最简化的）：

```yaml
# 程序监听的端口，默认为 :3015
listen: :3015
# 数据缓存的db目录，默认为 /tmp/pike 
db: /tmp/pike
# 设置upstream的连接超时，默认为0，0表示无限制(time.Duration)，
# 不建议使用默认值
connectTimeout: 3s 
directors:
  -
    # 名称
    name: tiny
    # backend的健康检测，如果不配置，则不做检测，默认backend都为正常
    ping: /ping
    # backend列表
    backends:
      - 127.0.0.1:5018
      - 192.168.31.3:3001
      - 192.168.31.3:3002
```

注意：在调整配置的时候，尽量不要设置较长的响应超时，由于对于不能确认是否能缓存的请求（GET/HEAD请求在首次请求时），在首次响应时，多个请求会以队列的形式等待响应结果，如果响应超时太长，会导致等待队列过长


## 性能

对于缓存服务，大家最关心的肯定还是性能问题，下面是`pike`的对缓存与不可缓存请求的性能测试：

首先单独来测试一下`pike`本身HTTP的响应处理（Pike本身有一个/ping的响应，用于其它服务检测pike是否正常运行）：

```
wrk -H 'Accept-Encoding: gzip, deflate' -t10 -c200 \
-d1m 'http://127.0.0.1:3015/ping' --latency

Running 1m test @ http://127.0.0.1:3015/ping
  10 threads and 200 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.12ms    1.53ms  46.46ms   92.87%
    Req/Sec    23.71k     2.29k   36.60k    74.70%
  Latency Distribution
     50%  770.00us
     75%    1.13ms
     90%    1.94ms
     99%    8.27ms
  14168320 requests in 1.00m, 2.23GB read
Requests/sec: 235773.39
```

接着是对可缓存请求的测试：

```
wrk -H 'Accept-Encoding: gzip, deflate' -t10 -c200 \
-d1m 'http://127.0.0.1:3015/api/sys/status' --latency

Running 1m test @ http://127.0.0.1:3015/api/sys/status
  10 threads and 200 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.17ms    2.39ms  64.81ms   90.41%
    Req/Sec    11.27k     2.25k   22.45k    73.91%
  Latency Distribution
     50%    1.63ms
     75%    2.57ms
     90%    4.44ms
     99%   12.08ms
  6732203 requests in 1.00m, 32.80GB read
Requests/sec: 112036.59
Transfer/sec:    558.91MB
```

对不可缓存的请求测试（首次接收至请求则知道该请求不可缓存，如POST或者符合配置的pass条件）

```
wrk -H 'Accept-Encoding: gzip, deflate' -t10 -c200 \
-d1m 'http://127.0.0.1:3015/api/users/me' --latency

Running 1m test @ http://127.0.0.1:3015/api/users/me
  10 threads and 200 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    13.86ms    2.30ms  92.20ms   88.69%
    Req/Sec     1.45k   151.81     1.62k    79.18%
  Latency Distribution
     50%   13.20ms
     75%   14.13ms
     90%   16.46ms
     99%   19.77ms
  867906 requests in 1.00m, 191.20MB read
Requests/sec:  14459.01
Transfer/sec:      3.19MB

# 直接压测

wrk -H 'Accept-Encoding: gzip, deflate' -t10 -c200 \
-d1m 'http://127.0.0.1:5018/api/users/me' --latency

Running 1m test @ http://127.0.0.1:5018/api/users/me
  10 threads and 200 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    12.42ms  834.04us  30.14ms   86.07%
    Req/Sec     1.62k    81.15     1.82k    78.58%
  Latency Distribution
     50%   12.17ms
     75%   12.72ms
     90%   13.34ms
     99%   15.38ms
  966524 requests in 1.00m, 140.11MB read
Requests/sec:  16101.42
Transfer/sec:      2.33MB
```

对于上面的测试结果，主要关注以下两点：

一、对于可缓存的请求，接口性能如何

二、对于不可缓存（转发至后端服务）的请求，性能损耗如何（因为有转发）


## 结语

自己去实现一个简化的`varnish`，这个几年前已经有的想法。在终于开始决心学习`golang`之后，才开始了`pike`这个项目的实现，在此只是为了实现自己几年以来的想法，并学习多一门新的语言。

如果愿意试用`pike`，做小白鼠的，请在项目中联系我(https://github.com/vicanso/pike)，提供一步步式的搭建帮助。在此，感恩不言谢！
