webpackJsonp([0x81b8806e4260],{393:function(l,e){l.exports={data:{marketing:{edges:[{node:{frontmatter:{title:"简易"},html:"<p>Pike让HTTP缓存服务更简单易用。使用yaml配置文件，更直观易懂，缓存的处理使用HTTP的标准(Cache-Control)的形式，不需要做改造则可兼容现行系统。</p>\n<p>简易性是Pike的首要目标，不追求太复杂的控制流程，不使用自定义的缓存控制，只为简易而存在。</p>"}},{node:{frontmatter:{title:"高效"},html:"<p>得益于fasthttp与badger的高性能，Pike在测试机上对于缓存的请求能达到100k/rps(Intel Celeron® G1610T 2x 2.30 GHz/8GB内存)，而转发接口的性能损耗也在1ms左右，足以应对高访问量请求处理。</p>"}},{node:{frontmatter:{title:"易部署运维"},html:"<p>提供WEB的管理后端，基于Token的权限校验，提供系统状态监控、性能监控、IP屏蔽与缓存清除的功能。简易管理后台免除需要专业运维人员的干涉，开发人员接管处理，更快捷方便。</p>\n<p>单一可执行文件或docker的部署方式，可运行在windows、linux与macos三大平台，无须安装任何依赖。</p>"}}]},features:{edges:[{node:{frontmatter:{title:"特性"},html:"<ul>\n<li>基于yaml的配置，简洁易懂</li>\n<li>WEB管理后台，提供系统性能、黑名单IP、缓存清理功能</li>\n<li>标准化的基于HTTP头Cache-Control缓存控制</li>\n<li>压缩保存的响应数据，避免每次响应时重新压缩（如果客户端不支持压缩则解压）</li>\n<li>自定义日志格式，支持二十多种placeholder，如：cookie，请求头字段，响应头字段，响应时间等。</li>\n<li>访问日志支持以文件（按天分隔）或者UDP的形式输出</li>\n<li>支持自定义HTTP响应头配置</li>\n<li>支持自定义最小压缩长度，对于内网之间的访问，避免压缩、解压的时间损耗</li>\n<li>支持自定义增加jpeg压缩处理</li>\n<li>支持自定义文本压缩级别</li>\n</ul>"}}]}},pathContext:{}}}});
//# sourceMappingURL=path---index-5800088ef6a889a6129b.js.map