webpackJsonp([0xd72e590acfcb],{23:function(e,t){e.exports=[{title:"Community Resources",items:[{id:"support",title:"Support"},{id:"conferences",title:"Conferences"},{id:"meetups",title:"Meetups"},{id:"articles",title:"Articles"},{id:"podcasts",title:"Podcasts"},{id:"videos",title:"Videos"},{id:"courses",title:"Courses"},{id:"examples",title:"Examples"},{id:"external-resources",title:"External Resources"}]},{title:"Tools",items:[{id:"debugging-tools",title:"Debugging"},{id:"component-workbenches",title:"Component Workbenches"},{id:"jsx-integrations",title:"JSX Integrations"},{id:"starter-kits",title:"Starter Kits"},{id:"routing",title:"Routing"},{id:"model-management",title:"Model Management"},{id:"data-fetching",title:"Data Fetching"},{id:"testing",title:"Testing"},{id:"ui-components",title:"UI Components"},{id:"misc",title:"Miscellaneous"}]}]},24:function(e,t){e.exports=[{title:"快速入门",items:[{id:"how-to-start",title:"快速使用"},{id:"installation",title:"安装"},{id:"config",title:"配置"}]}]},25:function(e,t){e.exports=[{title:"Tutorial",items:[{id:"preface",title:"前言",href:"/tutorial/tutorial.html#前言",forceInternal:!0},{id:"use-cache-mistake",title:"对缓存使用的误区",href:"/tutorial/tutorial.html#对缓存使用的误区",forceInternal:!0,subitems:[{id:"why-cache",title:"缓存的作用",href:"/tutorial/tutorial.html#缓存主要是为了提升系统的处理并发量，而不是让本来慢的请求变得响应快",forceInternal:!0},{id:"cache-ttl",title:"HTTP缓存的有效期过长",href:"/tutorial/tutorial.html#HTTP缓存的有效期过长",forceInternal:!0},{id:"cache-ttl-category",title:"缓存有效期设置方式的形式多样",href:"/tutorial/tutorial.html#缓存有效期设置方式的形式多样",forceInternal:!0}]},{id:"http-cache-design",title:"HTTP缓存服务的设计",href:"/tutorial/tutorial.html#HTTP缓存服务的设计",forceInternal:!0},{id:"performance",title:"性能",href:"/tutorial/tutorial.html#性能",forceInternal:!0},{id:"end",title:"结语",href:"/tutorial/tutorial.html#结语",forceInternal:!0}]}]},40:function(e,t,r){(function(i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=r(7),a=n(l),o=r(11),c=n(o),s=r(52),d=n(s),u=r(43),f=n(u),m=r(1),p=(n(m),r(53)),h=n(p),g=r(16),v=n(g),y=r(57),E=n(y),b=r(58),x=n(b),_=r(5),k=r(56),T=n(k),S=function(e){var t=e.authors,r=void 0===t?[]:t,n=e.createLink,l=e.date,o=e.enableScrollSync,s=e.ogDescription,u=e.location,m=e.markdownRemark,p=e.sectionList,g=e.titlePostfix,y=void 0===g?"":g,b=r.length>0,k=m.frontmatter.title||"";return i.createElement(c.default,{direction:"column",grow:"1",shrink:"0",halign:"stretch",css:{width:"100%",flex:"1 0 auto",position:"relative",zIndex:0}},i.createElement(v.default,{ogDescription:s,ogUrl:(0,T.default)(m.fields.slug),title:""+k+y}),i.createElement("div",{css:{flex:"1 0 auto"}},i.createElement(a.default,null,i.createElement("div",{css:_.sharedStyles.articleLayout.container},i.createElement(c.default,{type:"article",direction:"column",grow:"1",halign:"stretch"},i.createElement(d.default,{title:k}),(l||b)&&i.createElement("div",{css:{marginTop:15}},l," ",b&&i.createElement("span",null,"by"," ",(0,x.default)(r,function(e){return i.createElement("a",{css:_.sharedStyles.link,href:e.frontmatter.url,key:e.frontmatter.name},e.frontmatter.name)}))),i.createElement("div",{css:_.sharedStyles.articleLayout.content},i.createElement("div",{css:[_.sharedStyles.markdown],dangerouslySetInnerHTML:{__html:m.html}}),m.fields.path&&i.createElement("div",{css:{marginTop:80}},i.createElement("a",{css:_.sharedStyles.articleLayout.editLink,href:"https://github.com/reactjs/reactjs.org/tree/master/content/"+m.fields.path},"Edit this page")))),i.createElement("div",{css:_.sharedStyles.articleLayout.sidebar},i.createElement(h.default,{enableScrollSync:o,createLink:n,defaultActiveSection:(0,E.default)(u.pathname,p),location:u,sectionList:p}))))),(m.frontmatter.next||m.frontmatter.prev)&&i.createElement(f.default,{location:u,next:m.frontmatter.next,prev:m.frontmatter.prev}))};t.default=S,e.exports=t.default}).call(t,r(3))},41:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=r(40),l=i(n);t.default=l.default,e.exports=t.default},42:function(e,t,r){(function(i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},a=r(7),o=n(a),c=r(11),s=n(c),d=r(13),u=n(d),f=r(6),m=n(f),p=r(1),h=(n(p),r(5)),g=function(e){var t,r=e.next,n=e.prev,l=e.location;return i.createElement("div",{css:{background:h.colors.dark,color:h.colors.white,paddingTop:50,paddingBottom:50}},i.createElement(o.default,null,i.createElement(s.default,{type:"ul",halign:"space-between",css:(t={},t[h.media.between("small","medium")]={paddingRight:240},t[h.media.between("large","largerSidebar")]={paddingRight:280},t[h.media.between("largerSidebar","sidebarFixed",!0)]={paddingRight:380},t)},i.createElement(s.default,{basis:"50%",type:"li"},n&&i.createElement("div",null,i.createElement(E,null,"Previous article"),i.createElement("div",{css:{paddingTop:10}},i.createElement(y,{location:l,to:n},v(n))))),r&&i.createElement(s.default,{halign:"flex-end",basis:"50%",type:"li",css:{textAlign:"right"}},i.createElement("div",null,i.createElement(E,null,"Next article"),i.createElement("div",{css:{paddingTop:10}},i.createElement(y,{location:l,to:r},v(r))))))))};g.propTypes={next:m.default.string,prev:m.default.string},t.default=g;var v=function(e){return e.replace(/-/g," ").replace(".html","")},y=function(e){var t,r=e.children,n=e.to,l=e.location,a=l&&l.pathname.replace(/\/[^\/]+\.html/,"/"+n)||n;return i.createElement(u.default,{css:(t={display:"inline",textTransform:"capitalize",borderColor:h.colors.subtle,transition:"border-color 0.2s ease",fontSize:30,borderBottomWidth:1,borderBottomStyle:"solid"},t[h.media.lessThan("large")]={fontSize:24},t[h.media.size("xsmall")]={fontSize:16},t[":hover"]={borderColor:h.colors.white},t),to:a},r)},E=function(e){var t=e.children;return i.createElement("div",{css:l({color:h.colors.brand},h.fonts.small)},t)};e.exports=t.default}).call(t,r(3))},43:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=r(42),l=i(n);t.default=l.default,e.exports=t.default},201:function(e,t,r){(function(e){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var n=r(41),l=i(n),a=r(6),o=i(a),c=r(1),s=(i(c),r(55)),d=r(19),u=function(t){var r=t.data,i=t.location;return e.createElement(l.default,{createLink:s.createLinkDocs,location:i,markdownRemark:r.markdownRemark,sectionList:d.sectionListDocs,titlePostfix:" - Pike"})};u.propTypes={data:o.default.object.isRequired};t.pageQuery="** extracted graphql fragment **";t.default=u}).call(t,r(3))},19:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.sectionListTutorial=t.sectionListDocs=t.sectionListCommunity=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},l=r(23),a=i(l),o=r(24),c=i(o),s=r(25),d=i(s),u=c.default.map(function(e){return n({},e,{directory:"docs"})}),f=a.default.map(function(e){return n({},e,{directory:"community"})});t.sectionListCommunity=f,t.sectionListDocs=u,t.sectionListTutorial=d.default}});
//# sourceMappingURL=component---src-templates-docs-js-3e772439779121a1bf63.js.map