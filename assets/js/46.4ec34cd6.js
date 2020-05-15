(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{196:function(t,e,a){"use strict";a.r(e);var n=a(9),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"基本认识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本认识"}},[t._v("#")]),t._v(" 基本认识")]),t._v(" "),a("p",[t._v("http的首部是http报文的一个非常重要的组成部分，客户端和服务端会根据报文的首部字段来做出一些相应行为")]),t._v(" "),a("p",[t._v("有时候我们可以在首部添加一些额外的信息给服务端（例如客户端证书的相关信息.....）")]),t._v(" "),a("p",[t._v("而首部字段的组成方式就是")]),t._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("首部字段名：字段值1,字段值2,字段值3\n// Content-Type:text/html\n// 这个首部字段的意思是客户端希望范围的响应内容类型是text/html\n\n// Keep-alive:timeout=15,max=100\n// 超过15s客户端没有响应就断开链接\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("而根据作用和使用的报文对象不同可以分为以下几种首部字段")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("请求首部字段（针对于请求报文）")])]),t._v(" "),a("li",[a("p",[t._v("响应首部字段（针对于响应报文）")])]),t._v(" "),a("li",[a("p",[t._v("通用首部字段（请求报文和响应报文都会用到的）")])]),t._v(" "),a("li",[a("p",[t._v("实体首部字段（该首部字段的存在是对实体主体资源的一些额外说明，例如该实体主体什么时候会失效\n我们可以在这类字段添加我们对于我们要返回内容的信息的一些额外说明）")])])]),t._v(" "),a("p",[t._v("而在我们的实际过程中，我们客户端到服务端的报文有时候是需要经过代理的。而由于这个原来代理服务器就需要考虑究竟是哪些字段是需要反代理发送过去的，哪些字段是仅仅服务端一次接收报文该字段就废弃")]),t._v(" "),a("p",[t._v("因此，首部字段又可以分为以下两种")]),t._v(" "),a("ol",[a("li",[t._v("端到端首部字段（会被代理服务器转发过去）")]),t._v(" "),a("li",[t._v("逐跳首部字段（不会被代理服务器转发过去）")])]),t._v(" "),a("p",[t._v("而除了以下8个字段之外，其他字段都属于端到端首部字段")]),t._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1. Connectiom\n2. Keep-Alive\n3. Proxy-Authenticate\n4. Proxy-Authorization\n5. Trailer\n6. TE\n7. Transfer-Encoding\n8. Upgrade\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"常见的首部字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的首部字段"}},[t._v("#")]),t._v(" 常见的首部字段")]),t._v(" "),a("h4",{attrs:{id:"通用首部字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用首部字段"}},[t._v("#")]),t._v(" 通用首部字段")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("首部字段名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Cache-Control")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("控制缓存的行为")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Connection")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("逐跳首部、连接的管理")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Date")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("创建报文的日期时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Pragma")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("报文指令")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Trailer")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("报文末端的首部一览")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Transfer-Encoding")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("指定报文主体的传输编码方式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Upgrade")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("升级为其他协议")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Via")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("代理服务器的相关信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Warning")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("错误通知")])])])]),t._v(" "),a("h4",{attrs:{id:"请求首部字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求首部字段"}},[t._v("#")]),t._v(" 请求首部字段")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("首部字段名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Accept")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("用户代理可处理的媒体类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Accept-Charset")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("优先的字符集")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Accept-Encoding")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("优先的内容编码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Accept-Language")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("优先的语言（自然语言）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Authorization")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Web认证信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Expect")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("期待服务器的特定行为")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("From")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("用户的电子邮箱地址")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Host")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("请求资源所在服务器")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("If-Match")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("比较实体标记（ETag）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("If-Modified-Since")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("比较资源的更新时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("If-None-Match")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("比较实体标记（与 If-Match 相反）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("If-Range")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("资源未更新时发送实体 Byte 的范围请求")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("If-Unmodified-Since")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("比较资源的更新时间（与If-Modified-Since相反）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Max-Forwards")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("最大传输逐跳数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Proxy-Authorization")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("代理服务器要求客户端的认证信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Range")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实体的字节范围请求")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Referer")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("对请求中 URI 的原始获取方")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("传输编码的优先级")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("User-Agent")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("HTTP 客户端程序的信息")])])])]),t._v(" "),a("h4",{attrs:{id:"响应首部字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应首部字段"}},[t._v("#")]),t._v(" 响应首部字段")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("首部字段名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Accept-Ranges")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否接受字节范围请求")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Age")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("推算资源创建经过时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ETag")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("资源的匹配信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Location")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("令客户端重定向至指定URI")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Proxy-Authenticate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("代理服务器对客户端的认证信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Retry-After")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("对再次发起请求的时机要求")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Server")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("HTTP服务器的安装信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Vary")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("代理服务器缓存的管理信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("WWW-Authenticate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器对客户端的认证信息")])])])]),t._v(" "),a("h4",{attrs:{id:"实体首部字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实体首部字段"}},[t._v("#")]),t._v(" 实体首部字段")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("首部字段名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Allow")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("资源可支持的HTTP方法")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Encoding")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实体主体适用的编码方式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Language")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实体主体的自然语言")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Length")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实体主体的大小（单位：字节）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Location")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("替代对应资源的URI")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Content-MD5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实体主体的报文摘要")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Range")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实体主体的位置范围")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实体主体的媒体类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Expires")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实体主体过期的日期时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Last-Modified")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("资源的最后修改日期时间")])])])]),t._v(" "),a("h2",{attrs:{id:"首部字段的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首部字段的应用"}},[t._v("#")]),t._v(" 首部字段的应用")]),t._v(" "),a("p",[t._v("报文的首部字段是用于客户端与服务端一些行为的控制指令（例如连接时间，缓存的控制。服务端所要返回的类型）")]),t._v(" "),a("p",[t._v("当然，除了刚刚上面的字段，还有一些非属于HTTP首部字段报文‘规范规定的字段，例如Set-Cookies,Cookie,Content-Disposition")]),t._v(" "),a("p",[t._v("Cookie，Set-Cookies等字段用于将客户端的Cookies发送到服务端去")]),t._v(" "),a("p",[t._v("例如，现在比较常见的用户认证方式jwt")]),t._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("jwt,全称 json web token,是一种用户认证方式，一般在单点登录系统中使用\njwt的基本流程\n1. 客户端想服务器发送用户认证，用户认证成功服务端返回一个token令牌\n2. 客户端缓存token令牌，然后在接下来的每次请求在报文的首部字段添加自定义字段 token:token令牌值\n3. 服务端在收到客户端的请求时，先拦截查看报文首部字段是否有token字段，有就那其对应的值进行令牌校验，没有就报错\n4. 自定义字段的名称需要客户端和服务端要协商好\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("当然，比如我们现在使用比较广的https")]),t._v(" "),a("p",[t._v("在进行ssl连接阶段，会把客户端和服务端证书的相关信息放在报文首部字段中")]),t._v(" "),a("p",[t._v("我们也可以通过修改响应首部字段Location来使得我们的客户端进行重定向。当然，在具体的使用过程中我们可以直接利用语言或者框架已经封装好的接口来修改")]),t._v(" "),a("p",[t._v("首部字段是使用方式，最终还需要根据我们的实际情况来决定。")])])}),[],!1,null,null,null);e.default=i.exports}}]);