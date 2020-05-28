(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{353:function(t,e,a){"use strict";a.r(e);var v=a(1),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[t._v("简单梳理了一下HTTP的基本知识")])]),t._v(" "),a("h2",{attrs:{id:"思维导图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思维导图"}},[t._v("#")]),t._v(" 思维导图")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/Notes/Http基础 01.jpg"),alt:"Http基础 01"}}),t._v(" "),a("h2",{attrs:{id:"http请求实体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http请求实体"}},[t._v("#")]),t._v(" HTTP请求实体")]),t._v(" "),a("h3",{attrs:{id:"请求行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求行"}},[t._v("#")]),t._v(" 请求行")]),t._v(" "),a("p",[t._v("请求行=请求方式 + 请求地址")]),t._v(" "),a("p",[t._v("常见请求方式如下")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("请求方法名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("相关说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("GET")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("获取资源（最常用的）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("POST")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("传输实体主体（最常用的）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("PUT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("传输文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("HEAD")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("获取报文首部")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DELETE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("删除文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("OPTIONS")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("询问支持的方法")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TRACE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("追踪路径。该方法是让Web服务器端将之前的请求通信还给客户端的方法（很少用）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CONNECT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("要求用隧道协议连接代理（很少用）")])])])]),t._v(" "),a("h3",{attrs:{id:"请求头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求头"}},[t._v("#")]),t._v(" 请求头")]),t._v(" "),a("p",[t._v("常见的请求头如下")]),t._v(" "),a("ol",[a("li",[t._v("Host（请求主机）")]),t._v(" "),a("li",[t._v("Cookie")]),t._v(" "),a("li",[t._v("Content-Type（告诉服务器请求实体中数据的格式 json/urlencoded）")])]),t._v(" "),a("h3",{attrs:{id:"请求实体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求实体"}},[t._v("#")]),t._v(" 请求实体")]),t._v(" "),a("p",[t._v("客户端向服务端传递的数据(json/urlencoded)")]),t._v(" "),a("h2",{attrs:{id:"http响应实体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http响应实体"}},[t._v("#")]),t._v(" HTTP响应实体")]),t._v(" "),a("h3",{attrs:{id:"响应行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应行"}},[t._v("#")]),t._v(" 响应行")]),t._v(" "),a("p",[t._v("响应行=状态码+ 状态描述文本")]),t._v(" "),a("p",[a("code",[t._v("状态码类型")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类别")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("原因短语")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1XX")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("informational(信息性状态码)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("接收的请求正在接收")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2XX")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Success(成功状态码)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("请求正常处理完毕")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3XX")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Redirection(重定向状态码)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("需要进行附加操作以完成请求")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4XX")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Client Error(客户端错误状态码)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务端无法处理请求")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5XX")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Server Error(服务端错误状态码)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务端请求出错")])])])]),t._v(" "),a("p",[a("code",[t._v("具体的状态码对应的含义")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("状态码")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("200 OK")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("表示从客户端发来的请求在服务器端被正常处理了")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("204 No Content")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("代表服务器接收的请求已成功处理，但在返回的响应报文中不含实体的主体部分")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("206 Partial Content")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("该状态码表示客户端进行了范围请求，而服务器成功执行了这部分的GET 请求")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("301 Moved Permanently")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("永久性性重定向 该状态码表示请求的资源已被分配了新的 URI，以后应使用资源现在所指的 URI")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("400 Bad Request")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("该状态码表示请求报文中存在语法错误")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("401 Unauthorized")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("该状态码表示发送的请求需要有通过 HTTP 认证（BASIC 认证、DIGEST 认证）的认证信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("403 Forbidden")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("状态码表明对请求资源的访问被服务器拒绝了")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("404 Not Found")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("该状态码表明服务器上无法找到请求的资源")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("500 Internal Server Error")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("该状态码表明服务器端在执行请求时发生了错误")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("503 Service Unavailable")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求")])])])]),t._v(" "),a("h3",{attrs:{id:"响应头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应头"}},[t._v("#")]),t._v(" 响应头")]),t._v(" "),a("p",[t._v("Content-Type 告诉客户端服务端传过来的数据格式(html/json/img/js/css)")]),t._v(" "),a("h3",{attrs:{id:"响应实体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应实体"}},[t._v("#")]),t._v(" 响应实体")]),t._v(" "),a("p",[t._v("服务端向客户端传递的数据")])])}),[],!1,null,null,null);e.default=_.exports}}]);