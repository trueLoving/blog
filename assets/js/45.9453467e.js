(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{380:function(t,a,v){"use strict";v.r(a);var _=v(2),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",[t._v("今天和学弟交流了一下,探讨了一下有关这方面的问题,感觉这部分比较陌生。")]),t._v(" "),v("p",[t._v("于是查了一些文档资料学习一下.下面是我个人总结")])]),t._v(" "),v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),v("p",[t._v("一种用于提高网页加载速度的运维技术")]),t._v(" "),v("p",[t._v("通过减少客户端加载服务器资源的次数来实现网页加载速度提高")]),t._v(" "),v("p",[t._v("因此,要关注以下两个问题")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("什么时候加载什么样资源(加载缓存失效的或者服务端已经更改的资源)")])]),t._v(" "),v("li",[v("p",[t._v("缓存设置(设置缓存的有效时间....)")])])]),t._v(" "),v("h2",{attrs:{id:"what"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#what"}},[t._v("#")]),t._v(" What")]),t._v(" "),v("h3",{attrs:{id:"强缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),v("p",[t._v("服务器强制要求客户端直接从本地缓存中获取资源")]),t._v(" "),v("p",[t._v("资源的缓存时间,缓存类型都是由服务端控制的")]),t._v(" "),v("p",[v("code",[t._v("相关字段")])]),t._v(" "),v("p",[t._v("max-age 缓存最大时间")]),t._v(" "),v("p",[t._v("public\t\t是否允许资源被代理访问")]),t._v(" "),v("p",[t._v("immutable 为了让用户在刷新页面的时候不要去请求服务器")]),t._v(" "),v("h3",{attrs:{id:"协商缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),v("p",[t._v("客户端判断本地缓存是否失效，如果失效相服务端请求资源")]),t._v(" "),v("p",[t._v("服务端来判断资源是否失效。")]),t._v(" "),v("p",[t._v("如果失效则返回304状态码要求客户端重新请求资源")]),t._v(" "),v("p",[t._v("如果没有失效则返回200状态呢，要求客户端从缓存中获取资源")]),t._v(" "),v("h2",{attrs:{id:"why-优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#why-优点"}},[t._v("#")]),t._v(" Why/优点")]),t._v(" "),v("p",[t._v("通过减少网络请求的次数来实现以下效果")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("节省带宽")])]),t._v(" "),v("li",[v("p",[t._v("减轻服务器的负担")])]),t._v(" "),v("li",[v("p",[t._v("加快网页加载速度")])]),t._v(" "),v("li",[v("p",[t._v("用户体验好")])])]),t._v(" "),v("h2",{attrs:{id:"缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),v("p",[t._v("资源如果有更改但是客户端不即使更新会造成用户信息获取的滞后。如果有历史性遗留bug将会造成程序的不正常运行")]),t._v(" "),v("h2",{attrs:{id:"how"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#how"}},[t._v("#")]),t._v(" How")]),t._v(" "),v("p",[t._v("决定采用强制缓存还是协商缓存都是由服务端的响应头决定的")]),t._v(" "),v("h3",{attrs:{id:"强制缓存的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强制缓存的使用"}},[t._v("#")]),t._v(" 强制缓存的使用")]),t._v(" "),v("p",[t._v("服务器在响应头设置cache-control字段来控制缓存的相关属性")]),t._v(" "),v("p",[t._v("max-age 设置缓存的有效时间")]),t._v(" "),v("p",[t._v("public/private 代理服务器是否同样缓存资源")]),t._v(" "),v("p",[t._v("immutable 用户刷新页面是走协商流程的服务请求")]),t._v(" "),v("p",[v("code",[t._v("简单总结")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("配置")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("cache-control: max-age=xxxx，public")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("客户端和代理服务器都可以缓存该资源")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("che-control: max-age=xxxx，private")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("只让客户端可以缓存该资源；代理服务器不缓存")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("cache-control: max-age=xxxx，immutable")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("客户端在xxx秒的有效期内，如果有请求该资源的需求的话就直接读取缓存,statu code:200 ，即使用户做了刷新操作，也不向服务器发起http请求")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("ache-control: no-cache")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("跳过设置强缓存，但是不妨碍设置协商缓存")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("cache-control: no-store")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("不缓存")])])])]),t._v(" "),v("h3",{attrs:{id:"协商缓存的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存的使用"}},[t._v("#")]),t._v(" 协商缓存的使用")]),t._v(" "),v("p",[t._v("服务器在响应头设置etag和last-modified字段来实现与客户端的协商缓存")]),t._v(" "),v("p",[t._v("etag 每一个文件资源的标识符")]),t._v(" "),v("p",[t._v("last-modified 当前文件的最后一次修改时间")]),t._v(" "),v("p",[t._v("当走协商流程时,‘客户端会先判断本地缓存是否失效,如果没失效就从缓存获取资源。")]),t._v(" "),v("p",[t._v("如果失效再向服务端请求资源,这时请求就会带上etag和last-modifed资源")]),t._v(" "),v("p",[t._v("当服务端接受到客户端发送请求时,会通过请求头中的etag和last-modifed来判断该资源是否被修改。")]),t._v(" "),v("p",[t._v("如果没有被修改就返回304状态码告诉客户端该资源没有被修改，可以继续从缓存中获取资源")]),t._v(" "),v("p",[t._v("如果该资源在服务器中已被修改，就返回状态码200告诉客户端该资源已被修改，要求客户端重新向服务端获取资源")]),t._v(" "),v("p",[v("code",[t._v("过程图如下")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/Notes/强缓存和协商缓存 01.jpg"),alt:"强缓存和协商缓存 01"}})]),t._v(" "),v("h2",{attrs:{id:"文章的思维导图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文章的思维导图"}},[t._v("#")]),t._v(" 文章的思维导图")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/Notes/强缓存和协商缓存 02.jpg"),alt:"强缓存和协商缓存 02"}})])}),[],!1,null,null,null);a.default=e.exports}}]);