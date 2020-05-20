(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{351:function(t,e,a){"use strict";a.r(e);var v=a(4),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"基本介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍"}},[t._v("#")]),t._v(" 基本介绍")]),t._v(" "),a("p",[a("strong",[t._v("HTTP")]),t._v("(HyperText Transfer Protocol，超文本传输协议)是目前使用范围最广的网络协议之一。")]),t._v(" "),a("p",[a("strong",[t._v("HTTP")]),t._v("从最初的诞生到现在为止，共有以下版本")]),t._v(" "),a("ol",[a("li",[t._v("0.9（最初的版本，现已基本不在使用）")]),t._v(" "),a("li",[t._v("1.0（初期标准，但该协议标准至今 仍被广泛使用）")]),t._v(" "),a("li",[t._v("1.1（目前主流的 HTTP 协议版本）")]),t._v(" "),a("li",[t._v("2.0（还在制定中）")])]),t._v(" "),a("p",[a("strong",[t._v("HTTP")]),t._v("在计算机网络的层次中，按照TCP/IP模型分层是属于应用层")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("TCP/IP模型是对计算机网络整体体系结构的一种分层划分，分层的主要目的是为了最大降低计算机网络体系模块与模块之间的耦合性\n")])])]),a("p",[t._v("![网络基础 http的基本认识01](../images/网络基础 http的基本认识01.png)")]),t._v(" "),a("h2",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("ol",[a("li",[t._v("HTTP连接是无状态的，即HTTP连接不会保存之前的连接状态")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("这样设计的主要目的是为了更加灵活HTTP的使用\n但是现实需要保存HTTP的连接状态，比如记录用户的登录状态。于是就引入了Cookies技术，来管理连接状态\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("持续连接")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("随着HTTP的广泛使用，HTTP的请求次数变得越来越多\n为了减少HTTP连接所带来的代价，于是在HTTP1.1版本就引入了持续连接\n持续连接就是：只要连接双方都没有提出断开连接的请求，则就会一直保持tcp的连接状态\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("管线化")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("客户端在发送HTTP请求时，可以不必等待服务端对HTTP的响应，可以直接进行下一个HTTP请求\n")])])]),a("h2",{attrs:{id:"实际运用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实际运用"}},[t._v("#")]),t._v(" 实际运用")]),t._v(" "),a("ol",[a("li",[t._v("HTTP现在广泛应用于客户端和服务端数据的交换中。")]),t._v(" "),a("li",[t._v("客户端通过发送HTTP请求将数据发送给服务端，而服务端则根据HTTP请求做出相应响应，返回给客户端")]),t._v(" "),a("li",[t._v("HTTP协议能够明确区分哪端是客户端，哪端是服务端")]),t._v(" "),a("li",[t._v("请求必定是由客户端发出，而服务端端回复响应")]),t._v(" "),a("li",[t._v("客户端发送http的请求叫做"),a("strong",[t._v("请求报文")])]),t._v(" "),a("li",[t._v("服务端根据http的请求报文而做出的响应叫做"),a("strong",[t._v("响应报文")])])]),t._v(" "),a("h4",{attrs:{id:"_1-请求报文的数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-请求报文的数据结构"}},[t._v("#")]),t._v(" 1. 请求报文的数据结构")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("请求方法\tURI\t\tHTTP版本\n可选的请求首部字段\n内容实体\n")])])]),a("p",[t._v("所有的"),a("strong",[t._v("请求方法")]),t._v("如下表所示")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("请求方法名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("相关说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("GET")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("获取资源（最常用的）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("POST")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("传输实体主体（最常用的）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("PUT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("传输文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("HEAD")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("获取报文首部")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DELETE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("删除文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("OPTIONS")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("询问支持的方法")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TRACE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("追踪路径。该方法是让Web服务器端将之前的请求通信还给客户端的方法（很少用）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CONNECT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("要求用隧道协议连接代理（很少用）")])])])]),t._v(" "),a("h4",{attrs:{id:"_2-响应报文的数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-响应报文的数据结构"}},[t._v("#")]),t._v(" 2. 响应报文的数据结构")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("HTTP版本\t状态码\t\t状态码的原因短语\n可选的响应首部字段\n主体\n")])])]),a("p",[a("strong",[t._v("响应状态码")]),t._v("的分类如下表所示")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类别")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("原因短语")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1XX")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("informational(信息性状态码)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("接收的请求正在接收")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2XX")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Success(成功状态码)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("请求正常处理完毕")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3XX")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Redirection(重定向状态码)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("需要进行附加操作以完成请求")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4XX")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Client Error(客户端错误状态码)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务端无法处理请求")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5XX")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Server Error(服务端错误状态码)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务端请求出错")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);