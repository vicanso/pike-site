---
id: config
title: 配置详解
permalink: docs/config.html
prev: installation.html
---

Pike的参数绝大部分都有默认值，在了解各参数的意义之后，可以根据自己需要更多的定制化

```yaml
# HTTP response header 中的 Server，如果未配置，则为Pike
name: Pike
# 程序监听的端口，默认为 :3015
listen: :3015
# 数据缓存的db目录，默认为 /tmp/pike
db: /tmp/pike
# 后台管理员页面路径，如果不配置，无法使用管理员功能
adminPath: /pike
# 管理员验证token
adminToken: ry3WwvhVG
# hit for pass 的缓存有效期，默认为 300
hitForPass: 600
# 是否使用自动生成ETag（对于没有ETag的添加）
etag: true
# 设置对于数据压缩的最小文件（大于此值才压缩），如果设置为0，则使用默认值1024
compressMinLength: 1024
# 程序并发限制，设置为0表示使用fasthttp默认值 (256 * 1024)
concurrency: 0
# 是否禁用 disableKeepalive，默认为 false
disableKeepalive: false 
# readBufferSize 的限制，0表示使用fasthttp默认值 (4096)
readBufferSize: 0 
# writeBufferSize 的限制，0表示使用fasthttp默认值 (4096)
writeBufferSize: 0 
# 设置upstream的连接超时，默认为0，0表示无限制(time.Duration)，不建议使用默认值
connectTimeout: 3s 
# 设置请求的读取超时，0表示无限制(time.Duration)
readTimeout: 0 
# 设置响应的写超时，0表示无限制(time.Duration)
writeTimeout: 0 
# 限制每个IP的最大请求，0表示无限制
maxConnsPerIP: 0
# 设置keep-alive的保持时间，0表示无限制(time.Duration)
maxKeepaliveDuration: 0 
# 设置最大的请求数据大小，0表示使用fasthttp默认值 (4 * 1024 * 1024)
maxRequestBodySize: 0
# 过期缓存的清除时间间隔，如果设置为小于等于0 ，则使用默认值 300s
expiredClearInterval: 300s
# 访问日志的格式化，如果对于性能有更高的要求，而且也不需要访问日志，则不需要此配置
logFormat: "pike\t{when-iso-ms} - {client-ip} - \"{method} {uri}\" {status} {size} {latency-ms}ms"
# 访问日志保存路径
accessLog: /tmp/pike/access.log
# accessLog: /tmp/pike
# 日志类型，如果为"date"表示按天分割日志，accessLog则应该配置为一个目录
# logType: date
# UDP日志，如果有配置，优先使用UDP形式
# udpLog: 127.0.0.1:7349
# 是否启用Server-Timing
enableServerTiming: true
# 文本类型（Content-Type包含此类型字符串会被压缩）
textTypes:
  - text
  - javascript
  - json
# HTTPS证书相关
certFile: /cert/mine.pem
keyFile: /cert/mine.key
directors:
  -
    # 名称
    name: tiny 
    # backend的选择策略，支持 random roundRobin leastConn ipHash uriHash first
    type: first 
    # 配置url pass的条件，如果url符合(包含此字符串）则直接为pass（更好的性能）
    pass:
      - cache-control=no-cache
    # backend的健康检测，如果不配置，则不做检测，默认backend都为正常
    ping: /ping
    # prefix与host是AND的关系
    # 判断请求url的是否包含该前缀，如果是，则是此director
    prefix:
      - /api
    # 判断请求的host是否符合，如果符合，则是此director
    host:
      - mac:3015
    # backend列表
    backends:
      - 127.0.0.1:5018
      - 192.168.31.3:3001
      - 192.168.31.3:3002
  -
    name: npmtrend
    type: roundRobin
    ping: /ping
    host:
      - npmtrend.com
    backends:
      - 192.168.31.3:3200
      - 192.168.31.3:3300
# favicon的base64字符串
favicon: base64-string
# 需要添加的自定义的响应头
responseHeader:
  - "X-Server:My-Pike"
  - "X-Location:GZ"
```

### name

设置HTTP的Response header中的Server字段，如果没有配置，则为Pike。

### listen

程序监听的端口，默认为`:3015`。

### db

缓存数据存放目录，默认为`/tmp/pike`路径，建议将该目录设置为SSD磁盘，可以获得更好的性能体验。

### adminPath

后台管理页面，如果不配置，无法使用管理员功能，安全性考虑，建议使用自定义的路径。

### adminToken

管理员验证Token，在后台管理页面的的功能，直接使用Token验证，建议使用随机生成的字符串（浏览器验证通过之后会保存到localStorage）。

### hitForPass

对于从接口响应`Cache-Control`中判断该请求不可缓存，设置该请求为hit for pass的时长。默认值为300(秒)为较为适中的间隔，如果明确了解此字段用途，可以根据需要做调整。

### etag

是否自动生成ETag(此字段的用途可以上网搜索)，对于响应数据，如果后端没有生成ETag，自动生成此字段。建议配置此字段为true，除非能确认接口数据中，绝大部分数据都是变化很频繁，不可能出现304的。

### compressMinLength

设置数据压缩的最小长度（字节），如果小于此值，则不做dfpx。设置为0则使用默认值：1024。如果不希望任何数据做压缩（无法接受压缩、解压的损耗，内网传输速度极高），可以将此值设置为极大的值。

### concurrency

并发请求限制，设置为0使用默认值(256 * 1024)，建议根据自己系统性能调节此参数，避免太高的请求量把程序压垮，如果不确定，可以不配置此参数。

### disableKeepalive

是否禁用keep alive，默认为false 不禁用。不建议调整此参数，如果明确不希望使用，可设置为true 禁用。

### readBufferSize

读缓冲区的大小限制，设置为0则使用默认值（4096）。

### writeBufferSize

写缓冲区的大小限制

### connectTimeout

连接upstream的超时时间，默认为0（无限制）。建议根据自己的系统配置此参数，设置一个较大的值也比设置为0较可取，不配置有可能导致系统无响应时请求堆积。

### readTimeout

设置请求的读取超时，默认为0（无限制）。建议根据自己的系统配置此参数，设置一个较大的值也比设置为0较可取。

### writeTimeout

设置请求的写超时，默认为0（无限制）。建议根据自己的系统配置此参数，设置一个较大的值也比设置为0较可取。

### maxKeepaliveDuration

设置keep alive的保持时间，默认为0（无限制）。

### maxRequestBodySize

设置请求提交数据的最大限制，默认为0（4 * 1024 * 1024）。可以根据自己系统的需要，调整此参数的设置，如果系统不需要上传大文件之类，建议使用更小的限制。

### expiredClearInterval

定时清除过期缓存的时间，默认为0（300秒）。badger为了更高的性能，对于一些过期的数据会生成冗余，可以根据系统的状况调整清除的时间间隔。

### logFormat

HTTP日志格式化字符串，程序本身支持的placeholder使用{placeholder}的形式来配置，如："pike\t{when-iso-ms} - {client-ip} - \"{method} {uri}\" {status} {size} {latency-ms}ms"，下面是系统支持的placeholder列表：

示例中的描述为请求 http://aslant.site:5000/users/me?cache-control=no-cache

- `host` 该请求的host(包括port部分)：`aslant.site:5000`
- `method` 该请求HTTP的method：`GET`
- `path` 请求的path：`/users/me`
- `proto` 请求的proto： `HTTP/1.1`
- `query` 请求的querystring：`cache-control=no-cache`
- `remote` 发起该请求的IP（并不一定是真实IP，有可能是代理服务器的IP）：`192.168.1.18`
- `client-ip` 发起该请求的客户端IP（从x-forwarded-for中获取，如果没有，则取remote）：`121.10.21.2`
- `scheme` 该请求的scheme：`HTTP`
- `uri` 该请求的完整路径：`/users/me?cache-control=no-cache`
- `~jt` 该请求中Cookie的jt值，~表示从Cookie中获取值：`Hkls2k6uSM`
- `>X-Request-Id` 该请求头中的X-Request-Id的值，>表示从请求头中获取值：`H1WHZPgIG`
- `<X-Response-Id` 该响应头中的X-Response-Id的值，<表示从响应头中获取值：`H1WHZPgIG`
- `when` 该日志的输出时间：`Thu, 01 Feb 2018 21:54:49 +0800`
- `when-iso` 该日志的输出时间：`2018-02-01T13:54:49Z`
- `when-iso-ms` 该日志的输出时间：`2018-02-01T13:54:49.532Z`
- `when-unix` 该日志的输出时间：`1517493289`
- `status` 该请求的响应状态码：`200`
- `size` 该请求的响应数据大小：`11`
- `referer` 该请求的referer：`http://xxxxx/index.html'
- `userAgent` 该请求的user-agent：`fasthttp`
- `latency` 该请求的响应时长：`170.31µs`
- `latency-ms` 该请求的响应时长（ms）：`0ms`

### accessLog

访问日志的保存文件路径，如果logType为date，则应该设置为目录，如果不是，则设置为文件。

### logType

日志类型，可以设置为`date`，则日志按天分割（如果访问日志写到本地磁盘，建议使用）。

### udpLog

UDP日志服务器地址`127.0.0.1:7349`，如果配置了此参数优先使用UDP形式写访问日志。

### enableServerTiming

是否添加Server-Timing字段，此功能会自动以标准的Sever-Timing形式添加接口处理时间，建议启用。

### textTypes

需要压缩的数据类型，如果不配置则为默认值，默认为`text`、`javascript`、`json`。是否压缩数据根据`Content-Type`是否包含配置的类型，如果是则压缩。

### certFile

HTTPS证书cert文件路径

### keyFile

HTTPS证书key文件路径

### directors

director列表，每个director有相应的匹配规则，以及backend列表。对于director的权重根据host与prefix的配置排序，为：host 与 prefix --> host --> prefix --> 其它。

- `directors.name` 该director的名字
- `directors.type` 该director的backend选择策略，支持random roundRobin leastConn ipHash uriHash first
- `directors.pass` 配置pass的url规则，对于GET/HEAD请求，如果url中包含此规则，则直接pass至backend，该请求不可缓存
- `directors.ping` 对backend的健康检测url，如果不配置，则认为所有的backend都是可用
- `directors.prefix` 此director匹配的url前缀，如果有配置此参数，匹配此url前缀的请求才可处理
- `directors.host` 此director匹配的host，如果有配置此参数，包含host的请求才可处理
- `directors.backends` 此director对应的backend列表

### favicon

favicon的base64数据。

### responseHeader

需要添加的自定义的HTTP响应头。
