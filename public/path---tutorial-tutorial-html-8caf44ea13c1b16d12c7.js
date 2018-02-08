webpackJsonp([5084689126909],{410:function(n,e){n.exports={data:{markdownRemark:{html:'<h2 id="前言"><a href="#%E5%89%8D%E8%A8%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>前言</h2>\n<p>在刚开始从前端转向后端开发之后，对于接口性能的优化手段比较单一，都是接口缓存化，经历了两个阶段：</p>\n<ul>\n<li>将复杂的处理过期结果缓存至<code>mongodb</code>，后续取数据从缓存中读取</li>\n<li>使用<code>redis</code>替换<code>mongodb</code>，细化接口缓存公共逻辑</li>\n</ul>\n<p>从<code>mongodb</code> —> <code>redis</code> 的缓存架构中，性能上是有所提升，但是还是无法避免缓存之间的数据交叉使用（如缓存A的数据从缓存B与缓存C的数据组合），在数据有误时需要清除缓存时痛点，交叉使用的数据已经无法理清该清理哪些缓存。</p>\n<p>在系统稳定下来之后，对于杂乱的缓存设计也是时候理一理了。由于是资讯类的站点，我们的数据有着准实时性的特性，而缓存上我们希望是支持HTTP（这样将缓存前置，性能更高效），需要缓存设置与过期等都简单易用。在考察了各类的缓存软件，最终我们选择了<code>varnish</code>，使用<code>varnish</code>做HTTP缓存，缓存处理前置，避免更复杂的各缓存数据的交叉影响，在完成系统切换之后，感觉一下子世界变得美好多了，一切都是那么有条不紊。</p>\n<p>在这几年使用<code>varnish</code>的过程中，也遇到过不少的坑，它的<code>vcl</code>很强大，可以通过自己配置各种不同的缓存处理方式，而用得越多，越来越觉得不需要太复杂的配置方式。</p>\n<p>我们的现状是每个系统都自己配置一套自己的<code>vcl</code>，大家已迷失在配置的海洋里。后续开始慢慢收敛自定义的配置，只支持使用HTTP的<code>Cache-Control</code>来处理缓存，标准化此类中间件的使用。</p>\n<p><code>varnish</code>很好很强大，一直以来都想自己来实现一个类似的<code>varnish</code>，但是以前只是对<code>node.js</code>比较熟悉，<code>C/C++</code>还处于很水货的层面（主要学不懂），后来接触了<code>golang</code>，其性能上的优越性让我心动不已，因此码出一个http cache:<code>Pike</code></p>\n<h2 id="对缓存使用的误区"><a href="#%E5%AF%B9%E7%BC%93%E5%AD%98%E4%BD%BF%E7%94%A8%E7%9A%84%E8%AF%AF%E5%8C%BA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>对缓存使用的误区</h2>\n<h3 id="缓存主要是为了提升系统的处理并发量，而不是让本来慢的请求变得响应快"><a href="#%E7%BC%93%E5%AD%98%E4%B8%BB%E8%A6%81%E6%98%AF%E4%B8%BA%E4%BA%86%E6%8F%90%E5%8D%87%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%A4%84%E7%90%86%E5%B9%B6%E5%8F%91%E9%87%8F%EF%BC%8C%E8%80%8C%E4%B8%8D%E6%98%AF%E8%AE%A9%E6%9C%AC%E6%9D%A5%E6%85%A2%E7%9A%84%E8%AF%B7%E6%B1%82%E5%8F%98%E5%BE%97%E5%93%8D%E5%BA%94%E5%BF%AB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>缓存主要是为了提升系统的处理并发量，而不是让本来慢的请求变得响应快</h3>\n<p>在这几年遇到过不少这样的情况，开发人员将本来慢的接口加下<code>varnish</code>处理之后，在第一次调用时接口很慢，但是后续缓存生效之后，接口响应就快了很多，这样立即解决了测试（产品）对于接口慢的抱怨，自己也不用做太多的调整。</p>\n<p>结果还是接口太慢超时，导致等待中的其它请求直接pass至后端（由于超时设置太长，等待堆积的请求更多），系统变得更卡，最终雪崩效应，整个系统都拖垮了。</p>\n<p>后续我们规范了所有请求都需要在3秒内响应，对于超时的请求，每天排查相关统计数据，保证系统的高效性。而对于一些处理时间比较长的功能，我们调整为异步的处理，客户端请求时，生成后台任务，记录任务状态至数据库，并返回至客户端。后续再请求时，直接查询状态，如果还是处理中，直接返回保证了接口的性能。</p>\n<h3 id="http缓存的有效期过长"><a href="#http%E7%BC%93%E5%AD%98%E7%9A%84%E6%9C%89%E6%95%88%E6%9C%9F%E8%BF%87%E9%95%BF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>HTTP缓存的有效期过长</h3>\n<p>在日常使用场景中，有部分的HTTP接口依赖多个服务或者数据源，将多个数据合并处理生成响应数据。在以往使用<code>varnish</code>的时候，对于缓存时长的设置，都是根据自己的经验判断，觉得某些数据都不会改变，会设置1，2个小时的缓存时长。而事实上，有些数据总会因为产品配置等人为因素导致错误，此时又要去清除缓存，虽然不复杂但是也挺让人烦恼（因为有些配置的数据可能会影响多个接口，通常无法短时间内整理出来）。</p>\n<p>至此我开始认真的考虑长缓存是否有意义？是否能使用更短的缓存有效期呢？如果我使用1分钟的缓存有效期来替换1个小时的，对于系统的性能是否有大的影响呢？答案是：『不会』。因为<code>varnish</code>对于请求的处理方式保证了，在缓存过期之后，有更多的请求同时发生，也只会有一个请求转发至后端。而每1分钟一次的接口处理，不太可能增加大的负载（此时又强调一次，正常负载下，接口的响应应该是快速的）。使用短缓存之后，就算是数据配置错误，而缓存会在短时间之内更新，也就不再需要手工处理（找运维人员，提供需要清理的接口，再到清理完成，等操作完成，估计都不止1分钟）</p>\n<h3 id="缓存有效期设置方式的形式多样"><a href="#%E7%BC%93%E5%AD%98%E6%9C%89%E6%95%88%E6%9C%9F%E8%AE%BE%E7%BD%AE%E6%96%B9%E5%BC%8F%E7%9A%84%E5%BD%A2%E5%BC%8F%E5%A4%9A%E6%A0%B7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>缓存有效期设置方式的形式多样</h3>\n<p>由于<code>vcl</code>的灵活性，我们可以通过各种不同的形式来设置缓存时长。有些项目直接在<code>vcl</code>指定<code>url</code>的缓存时长，有些就使用自定义HTTP头<code>X-TTL</code>来设置，最终就出现了上千行的<code>vcl</code>配置。对于一个接口的缓存场景，每次都需要查一下配置文件，真是坑了运维坑了自己。</p>\n<p>其实<code>varnish</code>本来就支持以<code>Cache-Control</code>来设置缓存有效期的方式，因此我们对整个公司的项目强行推行标准化，对于无设置<code>Cache-Control</code>的，全部认为不可缓存（宁愿性能变差也不可数据出错）。一个个项目的做切换调整，最终出来的效果挺不错，运维对于<code>varnish</code>的配置全部标准化，不再需要运维去关心缓存的处理，全部交由接口开发人员自己定义（原则上也只有开发人员才清楚接口是否可以缓存，可以缓存多久）</p>\n<p>注：varnish支持从<code>Cache-Control</code>中优先选择<code>s-maxage</code>，再选择<code>max-age</code>，因此对于希望客户端缓存时间较长，但服务端使用短缓存，则配置不同的maxAge，如<code>Cache-Control: public, max-age=3600, s-maxage=60</code>。如果想了解<code>varnish</code>的各种特性，可以阅读我之前写的<code>善用HTTP缓存利器-Varnish</code></p>\n<h2 id="http缓存服务的设计"><a href="#http%E7%BC%93%E5%AD%98%E6%9C%8D%E5%8A%A1%E7%9A%84%E8%AE%BE%E8%AE%A1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>HTTP缓存服务的设计</h2>\n<p>谁最清楚接口是否可以缓存？接口开发者！谁最清楚接口应该缓存多久？接口开发者！谁来控制缓存的有效期？Cache-Control!</p>\n<p>由开发者控制，最简单的缓存形式</p>\n<p>对于HTTP缓存服务，主要实现以下几点：</p>\n<ul>\n<li>简化缓存的配置，使用HTTP的标准头<code>Cache-Control</code>来控制缓存</li>\n<li>对于响应时无设置<code>Cache-Control</code>的，默认为不缓存（varnish可以通过设置default ttl来实现为可缓存），宁愿牺牲性能也不可以缓存了不可缓存的数据</li>\n<li>根据<code>Cache-Control</code>判断该请求不可缓存的，记录缓存状态<code>hit-for-pass</code>，提升缓存判断的效率</li>\n<li>支持指定规则的url则直接为<code>pass</code>，提升系统性能（如GET /user/xx 这种接口都是不可缓存的）</li>\n<li>对于过期缓存数据能自动清除，不需要手工干预</li>\n<li>支持健康检查，支持不同的策略选择后端服务</li>\n<li>简化配置，配置文件使用<code>yaml</code>格式，简单易懂</li>\n</ul>\n<p>下面看看pike的配置（最简化的）：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-yaml"><code><span class="token comment"># 程序监听的端口，默认为 :3015</span>\n<span class="token key atrule">listen</span><span class="token punctuation">:</span> <span class="token punctuation">:</span><span class="token number">3015</span>\n<span class="token comment"># 数据缓存的db目录，默认为 /tmp/pike </span>\n<span class="token key atrule">db</span><span class="token punctuation">:</span> /tmp/pike\n<span class="token comment"># 设置upstream的连接超时，默认为0，0表示无限制(time.Duration)，</span>\n<span class="token comment"># 不建议使用默认值</span>\n<span class="token key atrule">connectTimeout</span><span class="token punctuation">:</span> 3s \n<span class="token key atrule">directors</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span>\n    <span class="token comment"># 名称</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> tiny\n    <span class="token comment"># backend的健康检测，如果不配置，则不做检测，默认backend都为正常</span>\n    <span class="token key atrule">ping</span><span class="token punctuation">:</span> /ping\n    <span class="token comment"># backend列表</span>\n    <span class="token key atrule">backends</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">5018</span>\n      <span class="token punctuation">-</span> 192.168.31.3<span class="token punctuation">:</span><span class="token number">3001</span>\n      <span class="token punctuation">-</span> 192.168.31.3<span class="token punctuation">:</span><span class="token number">3002</span>\n</code></pre>\n      </div>\n<p>注意：在调整配置的时候，尽量不要设置较长的响应超时，由于对于不能确认是否能缓存的请求（GET/HEAD请求在首次请求时），在首次响应时，多个请求会以队列的形式等待响应结果，如果响应超时太长，会导致等待队列过长</p>\n<h2 id="性能"><a href="#%E6%80%A7%E8%83%BD" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>性能</h2>\n<p>对于缓存服务，大家最关心的肯定还是性能问题，下面是<code>pike</code>的对缓存与不可缓存请求的性能测试：</p>\n<p>首先单独来测试一下<code>pike</code>本身HTTP的响应处理（Pike本身有一个/ping的响应，用于其它服务检测pike是否正常运行）：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>wrk -H \'Accept-Encoding: gzip, deflate\' -t10 -c200 \\\n-d1m \'http://127.0.0.1:3015/ping\' --latency\n\nRunning 1m test @ http://127.0.0.1:3015/ping\n  10 threads and 200 connections\n  Thread Stats   Avg      Stdev     Max   +/- Stdev\n    Latency     1.12ms    1.53ms  46.46ms   92.87%\n    Req/Sec    23.71k     2.29k   36.60k    74.70%\n  Latency Distribution\n     50%  770.00us\n     75%    1.13ms\n     90%    1.94ms\n     99%    8.27ms\n  14168320 requests in 1.00m, 2.23GB read\nRequests/sec: 235773.39</code></pre>\n      </div>\n<p>接着是对可缓存请求的测试：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>wrk -H \'Accept-Encoding: gzip, deflate\' -t10 -c200 \\\n-d1m \'http://127.0.0.1:3015/api/sys/status\' --latency\n\nRunning 1m test @ http://127.0.0.1:3015/api/sys/status\n  10 threads and 200 connections\n  Thread Stats   Avg      Stdev     Max   +/- Stdev\n    Latency     2.17ms    2.39ms  64.81ms   90.41%\n    Req/Sec    11.27k     2.25k   22.45k    73.91%\n  Latency Distribution\n     50%    1.63ms\n     75%    2.57ms\n     90%    4.44ms\n     99%   12.08ms\n  6732203 requests in 1.00m, 32.80GB read\nRequests/sec: 112036.59\nTransfer/sec:    558.91MB</code></pre>\n      </div>\n<p>对不可缓存的请求测试（首次接收至请求则知道该请求不可缓存，如POST或者符合配置的pass条件）</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>wrk -H \'Accept-Encoding: gzip, deflate\' -t10 -c200 \\\n-d1m \'http://127.0.0.1:3015/api/users/me\' --latency\n\nRunning 1m test @ http://127.0.0.1:3015/api/users/me\n  10 threads and 200 connections\n  Thread Stats   Avg      Stdev     Max   +/- Stdev\n    Latency    13.86ms    2.30ms  92.20ms   88.69%\n    Req/Sec     1.45k   151.81     1.62k    79.18%\n  Latency Distribution\n     50%   13.20ms\n     75%   14.13ms\n     90%   16.46ms\n     99%   19.77ms\n  867906 requests in 1.00m, 191.20MB read\nRequests/sec:  14459.01\nTransfer/sec:      3.19MB\n\n# 直接压测\n\nwrk -H \'Accept-Encoding: gzip, deflate\' -t10 -c200 \\\n-d1m \'http://127.0.0.1:5018/api/users/me\' --latency\n\nRunning 1m test @ http://127.0.0.1:5018/api/users/me\n  10 threads and 200 connections\n  Thread Stats   Avg      Stdev     Max   +/- Stdev\n    Latency    12.42ms  834.04us  30.14ms   86.07%\n    Req/Sec     1.62k    81.15     1.82k    78.58%\n  Latency Distribution\n     50%   12.17ms\n     75%   12.72ms\n     90%   13.34ms\n     99%   15.38ms\n  966524 requests in 1.00m, 140.11MB read\nRequests/sec:  16101.42\nTransfer/sec:      2.33MB</code></pre>\n      </div>\n<p>对于上面的测试结果，主要关注以下两点：</p>\n<p>一、对于可缓存的请求，接口性能如何</p>\n<p>二、对于不可缓存（转发至后端服务）的请求，性能损耗如何（因为有转发）</p>\n<h2 id="结语"><a href="#%E7%BB%93%E8%AF%AD" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>结语</h2>\n<p>自己去实现一个简化的<code>varnish</code>，这个几年前已经有的想法。在终于开始决心学习<code>golang</code>之后，才开始了<code>pike</code>这个项目的实现，在此只是为了实现自己几年以来的想法，并学习多一门新的语言。</p>\n<p>如果愿意试用<code>pike</code>，做小白鼠的，请在项目中联系我(<a href="https://github.com/vicanso/pike">https://github.com/vicanso/pike</a>)，提供一步步式的搭建帮助。在此，感恩不言谢！</p>',frontmatter:{title:"为什么需要Pike",next:null,prev:null},fields:{path:"tutorial/tutorial.md",slug:"tutorial/tutorial.html"}}},pathContext:{slug:"tutorial/tutorial.html"}}}});
//# sourceMappingURL=path---tutorial-tutorial-html-8caf44ea13c1b16d12c7.js.map