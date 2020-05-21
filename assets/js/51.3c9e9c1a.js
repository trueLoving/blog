(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{376:function(t,_,v){"use strict";v.r(_);var r=v(4),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),v("p",[t._v("分析"),v("strong",[t._v("浏览器从输入url回车到最终浏览器的页面显示")]),t._v("，我们可以分为以下4个方面来进行分析（在我看来，这个其实就是扩展版的HTTP通信，增加了许多机制来使得客户端和服务端能够安全快速方便的进行数据传输）")]),t._v(" "),v("ol",[v("li",[t._v("浏览器如何发送请求")]),t._v(" "),v("li",[t._v("请求报文如何到服务端")]),t._v(" "),v("li",[t._v("浏览器如何接收到服务端返回的内容")]),t._v(" "),v("li",[t._v("浏览器如何解析服务端所返回的内容")])]),t._v(" "),v("p",[t._v("我想，只要能搞清这4个方面，那么我们就可以弄清楚浏览器从url回车输入到最终浏览器的页面显示到底用了什么技术")]),t._v(" "),v("h2",{attrs:{id:"浏览器如何发送请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器如何发送请求"}},[t._v("#")]),t._v(" 浏览器如何发送请求")]),t._v(" "),v("p",[t._v("浏览器从输入url到按下回车后，就会发出一个请求报文。这里我们就以输入www.baidu.com")]),t._v(" "),v("p",[t._v("在浏览器发送请求报文之前，它会确定是采用http协议还是采用https。如果没有指定协议，直接输入一个域名或者一个IP地址，则默认使用http协议（当然，有些服务端在接收请求报文时会强制让浏览器使用https协议）")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("https = http + ssl\n为什么会提出http协议：主要是因为http本身不安全，因此需要添加一些机制来保证http传输的安全\nssl的全称是Secure Sockets Layer(安全套接层) 是为网络通信提供安全及数据完整性的一种安全协议\n在http中添加ssl机制一般就能保证数据传输的安全\n")])])]),v("p",[t._v("这就是输入www.baidu.com的请求报文的报文头")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/网络基础/网络基础 url输入浏览器的过程01.PNG"),alt:"mixureSecure"}}),t._v(" "),v("p",[t._v("在这里，我们可以知道该请求报文的请求方法是get方法（一般我们通过浏览器输入url发送请求报文，请求方法都是get），http版本为1.1版本，主机名为www.baidu.com。")]),t._v(" "),v("p",[t._v("但是，我们要知道HTTP通信是通过IP协议传输的，并不能通过域名来进行传输，因此这里还需要讲域名转换为对应的IP。")]),t._v(" "),v("p",[t._v("这步我们就需要借助DNS域名解析服务，将我们的域名转换为对应的IP。")]),t._v(" "),v("p",[t._v("然后浏览器再根据IP向服务端发送请求")]),t._v(" "),v("p",[t._v("在这里，做一下第一个步骤的总结")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("1. 输入url后，判断是域名还是ip，如何使域名则请求DNS服务器获取域名对应的IP地址\n2. 得到服务端的ip地址后，向服务端发送请求报文\n")])])]),v("h2",{attrs:{id:"请求报文如何到服务端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求报文如何到服务端"}},[t._v("#")]),t._v(" 请求报文如何到服务端")]),t._v(" "),v("p",[t._v("ok，刚刚第一步浏览器已经向服务端发送了一个请求报文，接下来就是谈谈这个请求报文是如何达到服务端的")]),t._v(" "),v("p",[t._v("在这里，就需要IP协议来使得请求报文能传输到相应的服务端")]),t._v(" "),v("p",[t._v("IP协议根据请求报文中的HTTP首部字段不断经过各种路由器和网关进行跳转，最终到达服务端所在的网段，最终到达服务端")]),t._v(" "),v("p",[t._v("然后服务端接收到浏览器发送的请求报文，就可以知道浏览器的位置，然后就可以和浏览器进行TCP连接")]),t._v(" "),v("p",[t._v("TCP协议位于传输层，其主要功能是提供可靠的字节流服务（说的通俗一点，就是浏览器和服务端建立TCP连接后，就通过tcp协议来进行数据的传输，至于数据如果传输，我们可以不用管）")]),t._v(" "),v("p",[t._v("在这里tcp的连接会进行"),v("strong",[t._v("三次握手")]),t._v("，目的是为了确定浏览器和服务端发送数据和接收数据的能力。")]),t._v(" "),v("p",[t._v("关于tcp的建立连接和断开连接可以参考这篇博客："),v("a",{attrs:{href:"https://blog.csdn.net/bleeding_sky/article/details/104471578",target:"_blank",rel:"noopener noreferrer"}},[t._v("网络基础 tcp的三次握手和四次挥手"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("在这里做一下第二步骤的总结")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("1. 请求报文根据IP协议会被传输到服务端\n2. 服务端接收到了请求报文后就知道浏览器的网络地址\n3. 浏览器与服务端通过TCP三次握手建立连接\n")])])]),v("h2",{attrs:{id:"浏览器如何接收到服务端返回的内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器如何接收到服务端返回的内容"}},[t._v("#")]),t._v(" 浏览器如何接收到服务端返回的内容")]),t._v(" "),v("p",[t._v("接下来，浏览器与服务端成功建立tcp连接后，就能够获得服务端根据请求报文所返回的内容（即浏览器可以获得服务端所发送过来的响应报文）")]),t._v(" "),v("h2",{attrs:{id:"浏览器如何解析服务端所返回的内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器如何解析服务端所返回的内容"}},[t._v("#")]),t._v(" 浏览器如何解析服务端所返回的内容")]),t._v(" "),v("p",[t._v("浏览器解析响应报文，获取其想要的数据")]),t._v(" "),v("p",[t._v("在这里，浏览器通过输入url获取的一般都是html内容（有些url输入后会获取到一个下载连接，并开始进行本地下载）")]),t._v(" "),v("p",[t._v("接下来的任务，就是去解析这份html内容")]),t._v(" "),v("p",[t._v("html内容的解析，我们可以从以下方面来理解")]),t._v(" "),v("ol",[v("li",[t._v("html本身的代码")]),t._v(" "),v("li",[t._v("html中所会引入的资源(css,js,img,...)")])]),t._v(" "),v("p",[t._v("而且，我们要知道，一般浏览器中负责解析html内容的是浏览器的呈现引擎（也可以叫做UI引擎）")]),t._v(" "),v("p",[t._v("接下来，我们就开始分析html内容的解析过程")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("在开始解析html内容的过程中，浏览器的呈现引擎会自顶向下解析html内容")])]),t._v(" "),v("li",[v("p",[t._v("如果发现那些资源是需要引入的，则立马通知浏览器的网络引擎立即从网络请求相关资源")])]),t._v(" "),v("li",[v("p",[t._v("将HTML代码解析成DOM树，将CSS解析成CSS规则，然后两者结合形成渲染树")])]),t._v(" "),v("li",[v("p",[t._v("渲染树+ 布局 开始在页面绘制，最终显示在页面中")])]),t._v(" "),v("li",[v("p",[t._v("刚刚上述步骤不是线性进行的，即不是等到第一步做好后再做第二步的，再生成渲染树时就有可能进行页面绘制")])]),t._v(" "),v("li",[v("p",[t._v("然而，有时候CSS的一些规则和JavaScript的一些语法会修改DOM树和CSS规则，那么与之对应的渲染树就会发生变化，这是后页面就会进行"),v("strong",[t._v("重绘")]),t._v("和"),v("strong",[t._v("回流")])])]),t._v(" "),v("li",[v("p",[t._v("最终，待所有工作都完成，页面就显示在浏览器上")])])]),t._v(" "),v("p",[t._v("更深层次的浏览器页面渲染原理可参考以下博客")]),t._v(" "),v("ol",[v("li",[v("a",{attrs:{href:"https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/#The_rendering_engine",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的工作原理：新式网络浏览器幕后揭秘"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://www.cnblogs.com/Peng2014/p/4687218.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器渲染页面原理"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("p",[t._v("最后，借用一幅图（来自**《图解HTTP》**这本书）来总结浏览器从输入url到页面显示的流程图")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/网络基础/网络基础 url输入浏览器的过程02.PNG"),alt:"mixureSecure"}}),t._v(" "),v("p",[t._v("在传输过程中，所涉及到的网络协议如下")]),t._v(" "),v("ol",[v("li",[t._v("负责传输的IP协议（网络层）")]),t._v(" "),v("li",[t._v("确保可靠性的TCP协议（传输层）")]),t._v(" "),v("li",[t._v("提供域名解析的DNS服务（应用层）")])])])}),[],!1,null,null,null);_.default=a.exports}}]);