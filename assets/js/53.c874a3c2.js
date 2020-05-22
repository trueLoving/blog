(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{360:function(t,a,s){"use strict";s.r(a);var e=s(2),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"基本介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍"}},[t._v("#")]),t._v(" 基本介绍")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/网络基础/网络基础 HTTP的通信过程01.png"),alt:"mixureSecure"}}),t._v(" "),s("p",[t._v("最简单的HTTP通信过程是发生在"),s("strong",[t._v("客户端")]),t._v("与"),s("strong",[t._v("服务端")]),t._v("之间的。")]),t._v(" "),s("p",[t._v("客户端发送请求，而服务端响应请求，如上图所示。")]),t._v(" "),s("p",[t._v("而客户端发送请求的最重要目的是为了获取服务端上的资源。然而客户端为了获取自己想要的资源就必须告诉服务端资源的位置(URI)。只有告诉服务端资源的位置服务端才能返回给客户端其想要的资源。")]),t._v(" "),s("p",[t._v("所以，客户端不是发送一个请求就可以获取到资源，在发送请求的时候，请求要携带一些数据，例如资源的位置URI，请求服务端的位置等等。")]),t._v(" "),s("p",[t._v("而这些数据就是报文。")]),t._v(" "),s("p",[t._v("报文是客户端和服务端进行数据交互的数据载体")]),t._v(" "),s("h2",{attrs:{id:"报文的数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报文的数据结构"}},[t._v("#")]),t._v(" 报文的数据结构")]),t._v(" "),s("p",[t._v("用于HTTP协议交互的信息被称为HTTP报文")]),t._v(" "),s("p",[t._v("HTTP报文本身是由多行数据构成的"),s("strong",[t._v("字符串文本")])]),t._v(" "),s("p",[t._v("而HTTP报文可以分为两个部分")]),t._v(" "),s("ol",[s("li",[t._v("报文首部")]),t._v(" "),s("li",[t._v("报文主体")])]),t._v(" "),s("p",[t._v("而在这里，根据HTTP报文的使用目的可以分为以下两种")]),t._v(" "),s("ol",[s("li",[t._v("请求报文（客户端发送请求的HTTP报文）")]),t._v(" "),s("li",[t._v("响应报文（服务端响应请求的HTTP报文）")])]),t._v(" "),s("p",[t._v("请求报文的结构如下图所示")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/网络基础/网络基础 HTTP的通信过程02.png"),alt:"mixureSecure"}}),t._v(" "),s("p",[t._v("而响应报文的结构如下图所示")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/网络基础/网络基础 HTTP的通信过程03.png"),alt:"mixureSecure"}}),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("注：\n首部字段：包含表示请求和响应的各种条件和数学的各类首部。\n一般有4种首部：\n1. 通用首部\n2. 请求首部\n3. 响应首部\n4. 实体首部\n")])])]),s("h2",{attrs:{id:"传输过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传输过程"}},[t._v("#")]),t._v(" 传输过程")]),t._v(" "),s("p",[t._v("HTTP的通信过程中，为了提高传输过程中传输的稳定性和高效性，有以下两种手段来实现传输速度的提升")]),t._v(" "),s("ol",[s("li",[t._v("压缩传输（内容编码）")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("压缩传输是指将传输内容进行压缩，降低内容的字节大小,从而实现传输速率的提升\n由发送方将内容进行编码压缩，然后由接收端根据发送方发送报文的请求头对内容进行解码\n常见的压缩方法如下\n1. gzip\n2. compress\n3. deflate\n4. identity\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("分块压缩传输")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("分块压缩传输是指发送方将要传输的内容进行分块，然后每一块进行压缩，然后一块一块发送给接收端。\n接收端根据发送方发过来的HTTP报文判断该块是属于整体内容的哪一部分，并且判断此时发送方所要发送的内容是否已经结束。\n接收端在介绍块数据的同时，会同时将块数据进行解码，无需等到发送方将数据全部发送过来再解码\n")])])]),s("p",[t._v("HTTP的通信传输内容的不同可以分为以下两种")]),t._v(" "),s("ol",[s("li",[t._v("简单的字符串传输（文本传输）")]),t._v(" "),s("li",[t._v("多部分对象传输（传输内容含有文件，图片，音频等二进制数据;文本传输+二进制传输）")])]),t._v(" "),s("p",[t._v("简单的文本传输只需要将内容变成字符串（或许会添加内容压缩操作）放在HTTP报文中。")]),t._v(" "),s("p",[t._v("而文本传输+二进制传输则需要特殊的实体类型来进行传输")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("在这里要提一下实体主体和报文主体的区别：\n报文:是HTTP通信中的基本单位，由8位组字节流组成，通过HTTP进行传输\n实体：作为请求或者响应的有效载荷数据被传输，其内容由实体首部和实体主体组成\nHTTP报文的主体用于传输请求或响应的实体主体\n")])])]),s("p",[t._v("而为了能进行文本传输+二进制传输，HTTP根据MINE机制实现了以下多部分对象")]),t._v(" "),s("ol",[s("li",[t._v("multipart/form-data(在web表单文件上传时使用，在web开发中这个比较常用)")]),t._v(" "),s("li",[t._v("multipart/byteranges（状态码206响应报文包含多个范围的内容使用）")])]),t._v(" "),s("p",[t._v("在HTTP的通信过程中，两种可以通过3种机制来协商服务端所要返回的内容")]),t._v(" "),s("p",[t._v("这三种机制分别如下")]),t._v(" "),s("ol",[s("li",[t._v("服务端驱动协商")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("服务端根据请求报文的报文头相关字段来判断应该返回给什么类型的资源\n相关首部字段如下\n1. Accept\n2. Accept-Charset\n3. Accept-Encoding\n4. Accept-Language\n5. Content-Language\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("客户端驱动协商")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("在客户端由客户选择自己所想要的资源\n例如，在一个网站中，是想要英文版本的还是要中文版本的，则由用户手动切换语言，然后通过JavaScript将用户所做出的选择发送给服务端，服务端根据请求报文返回相应资源\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("透明协商")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("服务端驱动协商 + 客户端驱动协商\n")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);