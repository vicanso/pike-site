webpackJsonp([0x90d37ade6112],{389:function(n,e){n.exports={data:{markdownRemark:{html:'<p>Pike的参数绝大部分都有默认值，在了解各参数的意义之后，可以根据自己需要更多的定制化</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-yaml"><code><span class="token comment"># HTTP response header 中的 Server，如果未配置，则为Pike</span>\n<span class="token key atrule">name</span><span class="token punctuation">:</span> Pike\n<span class="token comment"># 程序监听的端口，默认为 :3015</span>\n<span class="token key atrule">listen</span><span class="token punctuation">:</span> <span class="token punctuation">:</span><span class="token number">3015</span>\n<span class="token comment"># 数据缓存的db目录，默认为 /tmp/pike</span>\n<span class="token key atrule">db</span><span class="token punctuation">:</span> /tmp/pike\n<span class="token comment"># 后台管理员页面路径，如果不配置，无法使用管理员功能</span>\n<span class="token key atrule">adminPath</span><span class="token punctuation">:</span> /pike\n<span class="token comment"># 管理员验证token</span>\n<span class="token key atrule">adminToken</span><span class="token punctuation">:</span> ry3WwvhVG\n<span class="token comment"># hit for pass 的缓存有效期，默认为 300</span>\n<span class="token key atrule">hitForPass</span><span class="token punctuation">:</span> <span class="token number">600</span>\n<span class="token comment"># 是否使用自动生成ETag（对于没有ETag的添加）</span>\n<span class="token key atrule">etag</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token comment"># 设置对于数据压缩的最小文件（大于此值才压缩），如果设置为0，则使用默认值1024</span>\n<span class="token key atrule">compressMinLength</span><span class="token punctuation">:</span> <span class="token number">1024</span>\n<span class="token comment"># 程序并发限制，设置为0表示使用fasthttp默认值 (256 * 1024)</span>\n<span class="token key atrule">concurrency</span><span class="token punctuation">:</span> <span class="token number">0</span>\n<span class="token comment"># 是否禁用 disableKeepalive，默认为 false</span>\n<span class="token key atrule">disableKeepalive</span><span class="token punctuation">:</span> <span class="token boolean important">false </span>\n<span class="token comment"># readBufferSize 的限制，0表示使用fasthttp默认值 (4096)</span>\n<span class="token key atrule">readBufferSize</span><span class="token punctuation">:</span> <span class="token number">0 </span>\n<span class="token comment"># writeBufferSize 的限制，0表示使用fasthttp默认值 (4096)</span>\n<span class="token key atrule">writeBufferSize</span><span class="token punctuation">:</span> <span class="token number">0 </span>\n<span class="token comment"># 设置upstream的连接超时，默认为0，0表示无限制(time.Duration)，不建议使用默认值</span>\n<span class="token key atrule">connectTimeout</span><span class="token punctuation">:</span> 3s \n<span class="token comment"># 设置请求的读取超时，0表示无限制(time.Duration)</span>\n<span class="token key atrule">readTimeout</span><span class="token punctuation">:</span> <span class="token number">0 </span>\n<span class="token comment"># 设置响应的写超时，0表示无限制(time.Duration)</span>\n<span class="token key atrule">writeTimeout</span><span class="token punctuation">:</span> <span class="token number">0 </span>\n<span class="token comment"># 限制每个IP的最大请求，0表示无限制</span>\n<span class="token key atrule">maxConnsPerIP</span><span class="token punctuation">:</span> <span class="token number">0</span>\n<span class="token comment"># 设置keep-alive的保持时间，0表示无限制(time.Duration)</span>\n<span class="token key atrule">maxKeepaliveDuration</span><span class="token punctuation">:</span> <span class="token number">0 </span>\n<span class="token comment"># 设置最大的请求数据大小，0表示使用fasthttp默认值 (4 * 1024 * 1024)</span>\n<span class="token key atrule">maxRequestBodySize</span><span class="token punctuation">:</span> <span class="token number">0</span>\n<span class="token comment"># 过期缓存的清除时间间隔，如果设置为小于等于0 ，则使用默认值 300s</span>\n<span class="token key atrule">expiredClearInterval</span><span class="token punctuation">:</span> 300s\n<span class="token comment"># 访问日志的格式化，如果对于性能有更高的要求，而且也不需要访问日志，则不需要此配置</span>\n<span class="token key atrule">logFormat</span><span class="token punctuation">:</span> <span class="token string">"pike\\t{when-iso-ms} - {client-ip} - \\"{method} {uri}\\" {status} {size} {latency-ms}ms"</span>\n<span class="token comment"># 访问日志保存路径</span>\n<span class="token key atrule">accessLog</span><span class="token punctuation">:</span> /tmp/pike/access.log\n<span class="token comment"># accessLog: /tmp/pike</span>\n<span class="token comment"># 日志类型，如果为"date"表示按天分割日志，accessLog则应该配置为一个目录</span>\n<span class="token comment"># logType: date</span>\n<span class="token comment"># UDP日志，如果有配置，优先使用UDP形式</span>\n<span class="token comment"># udpLog: 127.0.0.1:7349</span>\n<span class="token comment"># 是否启用Server-Timing</span>\n<span class="token key atrule">enableServerTiming</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token comment"># 文本类型（Content-Type包含此类型字符串会被压缩）</span>\n<span class="token key atrule">textTypes</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> text\n  <span class="token punctuation">-</span> javascript\n  <span class="token punctuation">-</span> json\n<span class="token comment"># HTTPS证书相关</span>\n<span class="token key atrule">certFile</span><span class="token punctuation">:</span> /cert/mine.pem\n<span class="token key atrule">keyFile</span><span class="token punctuation">:</span> /cert/mine.key\n<span class="token key atrule">directors</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span>\n    <span class="token comment"># 名称</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> tiny \n    <span class="token comment"># backend的选择策略，支持 random roundRobin leastConn ipHash uriHash first</span>\n    <span class="token key atrule">type</span><span class="token punctuation">:</span> first \n    <span class="token comment"># 配置url pass的条件，如果url符合(包含此字符串）则直接为pass（更好的性能）</span>\n    <span class="token key atrule">pass</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> cache<span class="token punctuation">-</span>control=no<span class="token punctuation">-</span>cache\n    <span class="token comment"># backend的健康检测，如果不配置，则不做检测，默认backend都为正常</span>\n    <span class="token key atrule">ping</span><span class="token punctuation">:</span> /ping\n    <span class="token comment"># prefix与host是AND的关系</span>\n    <span class="token comment"># 判断请求url的是否包含该前缀，如果是，则是此director</span>\n    <span class="token key atrule">prefix</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /api\n    <span class="token comment"># 判断请求的host是否符合，如果符合，则是此director</span>\n    <span class="token key atrule">host</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> mac<span class="token punctuation">:</span><span class="token number">3015</span>\n    <span class="token comment"># backend列表</span>\n    <span class="token key atrule">backends</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">5018</span>\n      <span class="token punctuation">-</span> 192.168.31.3<span class="token punctuation">:</span><span class="token number">3001</span>\n      <span class="token punctuation">-</span> 192.168.31.3<span class="token punctuation">:</span><span class="token number">3002</span>\n  <span class="token punctuation">-</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> npmtrend\n    <span class="token key atrule">type</span><span class="token punctuation">:</span> roundRobin\n    <span class="token key atrule">ping</span><span class="token punctuation">:</span> /ping\n    <span class="token key atrule">host</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> npmtrend.com\n    <span class="token key atrule">backends</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 192.168.31.3<span class="token punctuation">:</span><span class="token number">3200</span>\n      <span class="token punctuation">-</span> 192.168.31.3<span class="token punctuation">:</span><span class="token number">3300</span>\n<span class="token comment"># favicon的base64字符串</span>\n<span class="token key atrule">favicon</span><span class="token punctuation">:</span> base64<span class="token punctuation">-</span>string\n<span class="token comment"># 需要添加的自定义的响应头</span>\n<span class="token key atrule">responseHeader</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token string">"X-Server:My-Pike"</span>\n  <span class="token punctuation">-</span> <span class="token string">"X-Location:GZ"</span>\n</code></pre>\n      </div>\n<h3 id="name"><a href="#name" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>name</h3>\n<p>设置HTTP的Response header中的Server字段，如果没有配置，则为Pike。</p>\n<h3 id="listen"><a href="#listen" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>listen</h3>\n<p>程序监听的端口，默认为<code>:3015</code>。</p>\n<h3 id="db"><a href="#db" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>db</h3>\n<p>缓存数据存放目录，默认为<code>/tmp/pike</code>路径，建议将该目录设置为SSD磁盘，可以获得更好的性能体验。</p>\n<h3 id="adminpath"><a href="#adminpath" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>adminPath</h3>\n<p>后台管理页面，如果不配置，无法使用管理员功能，安全性考虑，建议使用自定义的路径。</p>\n<h3 id="admintoken"><a href="#admintoken" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>adminToken</h3>\n<p>管理员验证Token，在后台管理页面的的功能，直接使用Token验证，建议使用随机生成的字符串（浏览器验证通过之后会保存到localStorage）。</p>\n<h3 id="hitforpass"><a href="#hitforpass" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>hitForPass</h3>\n<p>对于从接口响应<code>Cache-Control</code>中判断该请求不可缓存，设置该请求为hit for pass的时长。默认值为300(秒)为较为适中的间隔，如果明确了解此字段用途，可以根据需要做调整。</p>\n<h3 id="etag"><a href="#etag" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>etag</h3>\n<p>是否自动生成ETag(此字段的用途可以上网搜索)，对于响应数据，如果后端没有生成ETag，自动生成此字段。建议配置此字段为true，除非能确认接口数据中，绝大部分数据都是变化很频繁，不可能出现304的。</p>\n<h3 id="compressminlength"><a href="#compressminlength" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>compressMinLength</h3>\n<p>设置数据压缩的最小长度（字节），如果小于此值，则不做dfpx。设置为0则使用默认值：1024。如果不希望任何数据做压缩（无法接受压缩、解压的损耗，内网传输速度极高），可以将此值设置为极大的值。</p>\n<h3 id="concurrency"><a href="#concurrency" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>concurrency</h3>\n<p>并发请求限制，设置为0使用默认值(256 * 1024)，建议根据自己系统性能调节此参数，避免太高的请求量把程序压垮，如果不确定，可以不配置此参数。</p>\n<h3 id="disablekeepalive"><a href="#disablekeepalive" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>disableKeepalive</h3>\n<p>是否禁用keep alive，默认为false 不禁用。不建议调整此参数，如果明确不希望使用，可设置为true 禁用。</p>\n<h3 id="readbuffersize"><a href="#readbuffersize" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>readBufferSize</h3>\n<p>读缓冲区的大小限制，设置为0则使用默认值（4096）。</p>\n<h3 id="writebuffersize"><a href="#writebuffersize" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>writeBufferSize</h3>\n<p>写缓冲区的大小限制</p>\n<h3 id="connecttimeout"><a href="#connecttimeout" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>connectTimeout</h3>\n<p>连接upstream的超时时间，默认为0（无限制）。建议根据自己的系统配置此参数，设置一个较大的值也比设置为0较可取，不配置有可能导致系统无响应时请求堆积。</p>\n<h3 id="readtimeout"><a href="#readtimeout" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>readTimeout</h3>\n<p>设置请求的读取超时，默认为0（无限制）。建议根据自己的系统配置此参数，设置一个较大的值也比设置为0较可取。</p>\n<h3 id="writetimeout"><a href="#writetimeout" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>writeTimeout</h3>\n<p>设置请求的写超时，默认为0（无限制）。建议根据自己的系统配置此参数，设置一个较大的值也比设置为0较可取。</p>\n<h3 id="maxkeepaliveduration"><a href="#maxkeepaliveduration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>maxKeepaliveDuration</h3>\n<p>设置keep alive的保持时间，默认为0（无限制）。</p>\n<h3 id="maxrequestbodysize"><a href="#maxrequestbodysize" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>maxRequestBodySize</h3>\n<p>设置请求提交数据的最大限制，默认为0（4 * 1024 * 1024）。可以根据自己系统的需要，调整此参数的设置，如果系统不需要上传大文件之类，建议使用更小的限制。</p>\n<h3 id="expiredclearinterval"><a href="#expiredclearinterval" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>expiredClearInterval</h3>\n<p>定时清除过期缓存的时间，默认为0（300秒）。badger为了更高的性能，对于一些过期的数据会生成冗余，可以根据系统的状况调整清除的时间间隔。</p>\n<h3 id="logformat"><a href="#logformat" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>logFormat</h3>\n<p>HTTP日志格式化字符串，程序本身支持的placeholder使用{placeholder}的形式来配置，如：“pike\\t{when-iso-ms} - {client-ip} - ”{method} {uri}” {status} {size} {latency-ms}ms”，下面是系统支持的placeholder列表：</p>\n<p>示例中的描述为请求 <a href="http://aslant.site:5000/users/me?cache-control=no-cache">http://aslant.site:5000/users/me?cache-control=no-cache</a></p>\n<ul>\n<li><code>host</code> 该请求的host(包括port部分)：<code>aslant.site:5000</code></li>\n<li><code>method</code> 该请求HTTP的method：<code>GET</code></li>\n<li><code>path</code> 请求的path：<code>/users/me</code></li>\n<li><code>proto</code> 请求的proto： <code>HTTP/1.1</code></li>\n<li><code>query</code> 请求的querystring：<code>cache-control=no-cache</code></li>\n<li><code>remote</code> 发起该请求的IP（并不一定是真实IP，有可能是代理服务器的IP）：<code>192.168.1.18</code></li>\n<li><code>client-ip</code> 发起该请求的客户端IP（从x-forwarded-for中获取，如果没有，则取remote）：<code>121.10.21.2</code></li>\n<li><code>scheme</code> 该请求的scheme：<code>HTTP</code></li>\n<li><code>uri</code> 该请求的完整路径：<code>/users/me?cache-control=no-cache</code></li>\n<li><code>~jt</code> 该请求中Cookie的jt值，~表示从Cookie中获取值：<code>Hkls2k6uSM</code></li>\n<li><code>>X-Request-Id</code> 该请求头中的X-Request-Id的值，>表示从请求头中获取值：<code>H1WHZPgIG</code></li>\n<li><code>&#x3C;X-Response-Id</code> 该响应头中的X-Response-Id的值，&#x3C;表示从响应头中获取值：<code>H1WHZPgIG</code></li>\n<li><code>when</code> 该日志的输出时间：<code>Thu, 01 Feb 2018 21:54:49 +0800</code></li>\n<li><code>when-iso</code> 该日志的输出时间：<code>2018-02-01T13:54:49Z</code></li>\n<li><code>when-iso-ms</code> 该日志的输出时间：<code>2018-02-01T13:54:49.532Z</code></li>\n<li><code>when-unix</code> 该日志的输出时间：<code>1517493289</code></li>\n<li><code>status</code> 该请求的响应状态码：<code>200</code></li>\n<li><code>payload-size</code> 该请求的提交数据大小：<code>0</code></li>\n<li><code>size</code> 该请求的响应数据大小：<code>11</code></li>\n<li><code>referer</code> 该请求的referer：`<a href="http://xxxxx/index.html">http://xxxxx/index.html</a>’</li>\n<li><code>userAgent</code> 该请求的user-agent：<code>fasthttp</code></li>\n<li><code>latency</code> 该请求的响应时长：<code>170.31µs</code></li>\n<li><code>latency-ms</code> 该请求的响应时长（ms）：<code>0ms</code></li>\n</ul>\n<h3 id="accesslog"><a href="#accesslog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>accessLog</h3>\n<p>访问日志的保存文件路径，如果logType为date，则应该设置为目录，如果不是，则设置为文件。</p>\n<h3 id="logtype"><a href="#logtype" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>logType</h3>\n<p>日志类型，可以设置为<code>date</code>，则日志按天分割（如果访问日志写到本地磁盘，建议使用）。</p>\n<h3 id="udplog"><a href="#udplog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>udpLog</h3>\n<p>UDP日志服务器地址<code>127.0.0.1:7349</code>，如果配置了此参数优先使用UDP形式写访问日志。</p>\n<h3 id="enableservertiming"><a href="#enableservertiming" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>enableServerTiming</h3>\n<p>是否添加Server-Timing字段，此功能会自动以标准的Sever-Timing形式添加接口处理时间，建议启用。</p>\n<h3 id="texttypes"><a href="#texttypes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>textTypes</h3>\n<p>需要压缩的数据类型，如果不配置则为默认值，默认为<code>text</code>、<code>javascript</code>、<code>json</code>。是否压缩数据根据<code>Content-Type</code>是否包含配置的类型，如果是则压缩。</p>\n<h3 id="certfile"><a href="#certfile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>certFile</h3>\n<p>HTTPS证书cert文件路径</p>\n<h3 id="keyfile"><a href="#keyfile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>keyFile</h3>\n<p>HTTPS证书key文件路径</p>\n<h3 id="directors"><a href="#directors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>directors</h3>\n<p>director列表，每个director有相应的匹配规则，以及backend列表。对于director的权重根据host与prefix的配置排序，为：host 与 prefix —> host —> prefix —> 其它。</p>\n<ul>\n<li><code>directors.name</code> 该director的名字</li>\n<li><code>directors.type</code> 该director的backend选择策略，支持random roundRobin leastConn ipHash uriHash first</li>\n<li><code>directors.pass</code> 配置pass的url规则，对于GET/HEAD请求，如果url中包含此规则，则直接pass至backend，该请求不可缓存</li>\n<li><code>directors.ping</code> 对backend的健康检测url，如果不配置，则认为所有的backend都是可用</li>\n<li><code>directors.prefix</code> 此director匹配的url前缀，如果有配置此参数，匹配此url前缀的请求才可处理</li>\n<li><code>directors.host</code> 此director匹配的host，如果有配置此参数，包含host的请求才可处理</li>\n<li><code>directors.backends</code> 此director对应的backend列表</li>\n</ul>\n<h3 id="favicon"><a href="#favicon" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>favicon</h3>\n<p>favicon的base64数据。</p>\n<h3 id="responseheader"><a href="#responseheader" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>responseHeader</h3>\n<p>需要添加的自定义的HTTP响应头。</p>',frontmatter:{title:"配置详解",next:null,prev:"installation.html"},fields:{path:"docs/config.md",slug:"docs/config.html"}}},pathContext:{slug:"docs/config.html"}}}});
//# sourceMappingURL=path---docs-config-html-4ef67e5bc462a9297363.js.map