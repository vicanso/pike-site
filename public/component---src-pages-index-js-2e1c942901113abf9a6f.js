webpackJsonp([35783957827783],{169:function(e,t,a){(function(r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}t.__esModule=!0;var i,l,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d=a(13),s=n(d),m=a(1),g=(n(m),a(5)),u=function(e){var t=e.cssProps,a=void 0===t?{}:t;return r.createElement("svg",{css:a,height:"12",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 4.53657 8.69699"},r.createElement("path",{d:"\n        M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,\n        0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,\n        0,0,1,.18254,8.697Z\n      ",fill:"currentColor"}))},p=function(e){var t=e.children,a=e.type,n=o(e,["children","type"]),i=void 0;switch(a){case"primary":i=h;break;case"secondary":i=y}return r.createElement(s.default,c({},n,{css:[f,i]}),t,"secondary"===a&&r.createElement(u,{cssProps:{marginLeft:10}}))},f=(i={display:"inline-block",fontSize:16},i[g.media.greaterThan("xlarge")]={fontSize:20},i),h=(l={backgroundColor:g.colors.brand,color:g.colors.black,padding:"10px 25px",whiteSpace:"nowrap",transition:"background-color 0.2s ease-out"},l[g.media.greaterThan("xlarge")]={paddingTop:15,paddingBottom:15},l[":hover"]={backgroundColor:g.colors.white},l),y={color:g.colors.brand,transition:"color 0.2s ease-out",":hover":{color:g.colors.white}};t.default=p,e.exports=t.default}).call(t,a(3))},170:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(169),o=r(n);t.default=o.default,e.exports=t.default},453:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjZmZmIi8+CiAgPGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"},193:function(e,t,a){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l,c=a(170),d=r(c),s=a(7),m=r(s),g=a(11),u=r(g),p=a(6),f=r(p),h=a(1),y=(r(h),a(16)),v=r(y),b=a(5),x=a(56),T=r(x),w=a(453),E=r(w),I=function(t){function a(e,r){n(this,a);var i=o(this,t.call(this,e,r)),l=e.data,c=l.marketing.edges.map(function(e){var t=e.node;return{title:t.frontmatter.title,content:t.html}}),d=l.features.edges.map(function(e){var t=e.node;return{title:t.frontmatter.title,content:t.html}});return i.state={marketing:c,features:d[0]},i}return i(a,t),a.prototype.render=function(){var t,a,r,n,o,i,l,c=this.state,s=c.marketing,g=c.features;return console.dir(g),e.createElement("div",{css:{width:"100%"}},e.createElement(v.default,{title:"Pike - 简单高效的HTTP缓存服务",ogUrl:(0,T.default)("index.html")}),e.createElement("header",{css:{backgroundColor:b.colors.dark,color:b.colors.white}},e.createElement("div",{css:(t={paddingTop:45,paddingBottom:20},t[b.media.greaterThan("small")]={paddingTop:60,paddingBottom:70},t[b.media.greaterThan("xlarge")]={paddingTop:95,paddingBottom:85,maxWidth:1500,marginLeft:"auto",marginRight:"auto",position:"relative","::before":{content:" ",position:"absolute",top:0,left:0,bottom:0,right:0,backgroundImage:"url("+E.default+")",backgroundRepeat:"no-repeat",backgroundPosition:"100% 100px",backgroundSize:"50% auto",opacity:.05}},t)},e.createElement("div",{css:{position:"relative"}},e.createElement(m.default,null,e.createElement("h1",{css:(a={color:b.colors.brand,textAlign:"center",margin:0,fontSize:45,letterSpacing:"0.01em"},a[b.media.size("xsmall")]={fontSize:30},a[b.media.greaterThan("xlarge")]={fontSize:60},a)},"Pike"),e.createElement("p",{css:(r={paddingTop:15,textAlign:"center",fontSize:24,letterSpacing:"0.01em",fontWeight:200},r[b.media.size("xsmall")]={fontSize:16,maxWidth:"12em",marginLeft:"auto",marginRight:"auto"},r[b.media.greaterThan("xlarge")]={paddingTop:20,fontSize:30},r)},"简单高效的HTTP缓存服务"),e.createElement(u.default,{valign:"center",css:(n={paddingTop:40},n[b.media.greaterThan("xlarge")]={paddingTop:65},n)},e.createElement(S,null,e.createElement(d.default,{to:"/docs/how-to-start.html",type:"primary"},"开始尝试")),e.createElement(S,null,e.createElement(d.default,{to:"/tutorial/tutorial.html",type:"secondary"},"为什么需要Pike"))))))),e.createElement(m.default,null,e.createElement("div",{style:{"margin-top":"30px"},css:b.sharedStyles.markdown},e.createElement("h3",{css:[P,{"&&":(o={color:b.colors.subtle,paddingTop:0,fontWeight:300,fontSize:20},o[b.media.greaterThan("xlarge")]={fontSize:24,fontWeight:200},o)}]},g.title),e.createElement("div",{dangerouslySetInnerHTML:{__html:g.content}}))),e.createElement(m.default,null,e.createElement("div",{css:b.sharedStyles.markdown},e.createElement("section",{css:[k,(i={},i[b.media.lessThan("medium")]={marginTop:0,marginBottom:0,overflowX:"auto",paddingTop:30,WebkitOverflowScrolling:"touch",position:"relative",maskImage:"linear-gradient(to right, transparent, white 10px, white 90%, transparent)"},i)]},e.createElement("div",{css:(l={display:"flex",flexDirection:"row"},l[b.media.lessThan("medium")]={display:"block",whiteSpace:"nowrap"},l)},s.map(function(t,a){var r,n,o;return e.createElement("div",{key:a,css:(n={display:"flex",flexDirection:"column",flex:"0 1 33%",marginLeft:40,"&:first-of-type":(r={marginLeft:0},r[b.media.lessThan("medium")]={marginLeft:10},r)},n[b.media.lessThan("medium")]={display:"inline-block",verticalAlign:"top",marginLeft:0,whiteSpace:"normal",width:"75%",marginRight:20,paddingBottom:40,"&:first-of-type":{marginTop:0}},n)},e.createElement("h3",{css:[P,{"&&":(o={color:b.colors.subtle,paddingTop:0,fontWeight:300,fontSize:20},o[b.media.greaterThan("xlarge")]={fontSize:24,fontWeight:200},o)}]},t.title),e.createElement("div",{dangerouslySetInnerHTML:{__html:t.content}}))}))),e.createElement("hr",{css:{height:1,marginBottom:-1,border:"none",borderBottom:"1 solid "+b.colors.divider}}))))},a}(h.Component);I.propTypes={data:f.default.shape({marketing:f.default.object.isRequired,features:f.default.object.isRequired}).isRequired,location:f.default.object.isRequired};var S=function(t){var a,r,n=t.children;t.primary;return e.createElement("div",{css:(r={width:"50%"},r[b.media.between("small","large")]={paddingLeft:20},r[b.media.greaterThan("xlarge")]={paddingLeft:40},r["&:first-child"]={textAlign:"right",paddingRight:15},r["&:nth-child(2)"]=(a={},a[b.media.greaterThan("small")]={paddingLeft:15},a),r)},n)};t.pageQuery="** extracted graphql fragment **";t.default=I;var k=(l={marginTop:20,marginBottom:15},l[b.media.greaterThan("medium")]={marginTop:60,marginBottom:65},l),P={"&&":{marginBottom:20}}}).call(t,a(3))}});
//# sourceMappingURL=component---src-pages-index-js-2e1c942901113abf9a6f.js.map