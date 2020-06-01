(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{394:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("tcp的三次握手是用于实现客户端和服务端的安全建立连接")])]),s._v(" "),t("li",[t("p",[s._v("tcp的四次挥手是用于实现客户端和服务端的安全断开连接")])]),s._v(" "),t("li",[t("p",[s._v("tcp的三次握手和四次挥手最终是为了确定客户端和服务端双方的接收和发送数据的能力是否正常")])])]),s._v(" "),t("h2",{attrs:{id:"tcp的三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp的三次握手"}},[s._v("#")]),s._v(" tcp的三次握手")]),s._v(" "),t("h4",{attrs:{id:"_1-过程描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-过程描述"}},[s._v("#")]),s._v(" 1. 过程描述")]),s._v(" "),t("p",[s._v("刚开始的时候，客户端是处于close状态，而服务端处理listen状态。接下来就是双方开始进行tcp的三次握手（即建立连接）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("![网络基础 tcp的三次握手和四次挥手01](images/网络基础 tcp的三次握手和四次挥手01.png)1. 第一次握手：客户端给服务端发送一个SYN报文，并指明客户端的初始值序列号ISN(c),此时客户端的状态由最初的close状态变为SYN_Send状态\n2. 第二次握手：服务端接收到客户端的SYN报文之后，会以自己的SYN报文作为应答，并且也指定自己的初始化序列号ISN(s)。同时把客户端的ISN+1作为ACK的值，表示自己已经接收到客户端的SYN。此时服务端的状态由listen状态变为SYN_Recevied状态\n3. 第三次握手：客户端收到服务端发送过来的SYN报文后，会发送一个ACK报文。该ACK报文的值为服务端的ISN值+1。发送该ACK报文给服务端，告诉服务端客户端已经接收到此报文。此时客户端的状态变为establised状态。\n4. 服务端接收到ACK报文之后，也变成了establised状态。此时双方就建立起了连接\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("strong",[s._v("过程图")])]),s._v(" "),t("img",{attrs:{src:s.$withBase("/网络基础/网络基础 tcp的三次握手和四次挥手01.png"),alt:"mixureSecure"}}),s._v(" "),t("h4",{attrs:{id:"_2-每一次握手的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-每一次握手的作用"}},[s._v("#")]),s._v(" 2. 每一次握手的作用")]),s._v(" "),t("ol",[t("li",[s._v("第一次握手")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("客户端发送数据包，服务端接收到了。\n这样对服务端来说，就可以得出结论：客户端的发送能力是正常的。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("第二次握手")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("服务端发送数据包，客户端接收到了。\n这样对客户端来说，就可以得出结论：服务端的接收数据和发送数据的能力是正常的。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("第三次握手")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("客户端发送数据包，服务端接收到了。\n这样对服务端来说，就可以得出结论：客户端的接收数据的能力是正常的。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("因此，通过tcp的三次握手：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("对于客户端来说，它就知道了服务端发送数据和接收数据的能力是正常的（在第二次握手时）")])]),s._v(" "),t("li",[t("p",[s._v("对于服务端来说，它就知道了客户端发送数据（第一次握手）和接收数据（第三次握手）的能力是正常的")])])]),s._v(" "),t("h2",{attrs:{id:"tcp的四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp的四次挥手"}},[s._v("#")]),s._v(" tcp的四次挥手")]),s._v(" "),t("h4",{attrs:{id:"_1-过程描述-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-过程描述-2"}},[s._v("#")]),s._v(" 1. 过程描述")]),s._v(" "),t("p",[s._v("能够使已经成功建立连接的客户端和服务端安全断开连接。")]),s._v(" "),t("p",[s._v("此时客户端和服务端都处于established状态。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("在这里，假设客户端主动向服务端断开连接\n1. 第一次挥手：客户端发送一个FIN报文，报文中指定一个ISN(c)。此时客户端就处于FIN_WAIT的状态\n2. 第二次挥手：服务端接收到FIN之后，会发送ACK报文。ACK报文的值为ISN(c)+1。发送给客户端表示服务端已经接收到客户端发送的FIN。此时服务端处于CLOSE_WAIT状态。\n3. 第三次挥手：如果服务端表示同意断开连接，则服务端再发一个FIN报文给客户端，报文中指定一个ISN(s)。此时服务端的状态为LAST_ACK状态。\n4. 第四次挥手：客户端收到服务端发送过来的FIN报文后，一样发送一个ACK报文给服务端表示客户端已经接收到了。而ACK的值为ISN(s)+1。此时客户端处于TIME_WAIT状态。需要过2个发送周期以确保服务端接收到客户端发送的ACK报文之后才进入到CLOSE状态。\n5. 服务端接收到客户端发送的ACK报文后，就关闭连接，处于CLOSED状态\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("strong",[s._v("过程图")])]),s._v(" "),t("img",{attrs:{src:s.$withBase("/网络基础/网络基础 tcp的三次握手和四次挥手02.png"),alt:"mixureSecure"}}),s._v(" "),t("h4",{attrs:{id:"_2-为什么客户端在第四次挥手不直接关闭连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么客户端在第四次挥手不直接关闭连接"}},[s._v("#")]),s._v(" 2. 为什么客户端在第四次挥手不直接关闭连接")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("是为了确保服务端已经接收到了客户端发送的ACK报文。\n如果服务端没有接收到该ACK报文，会重新发送一个FIN报文给客户端。客户端再次收到服务端的FIN报文之后，就知道了之前发送的ACK报文已经丢失了，就会重新发送一个ACK报文。\n至于 TIME_WAIT 持续的时间至少是一个报文的来回时间。一般会设置一个计时，如果过了这个计时没有再次收到 FIN 报文，则代表对方成功就是 ACK 报文，此时处于 CLOSED 状态。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"相关概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关概念"}},[s._v("#")]),s._v(" 相关概念")]),s._v(" "),t("ol",[t("li",[s._v("Syn")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("SYN的全称是Synchronize Sequence Numbers，中文名叫做同步序列编号。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("ISN")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ISN的全称是Initial Sequence Number,中文名叫做初始化序列号。\n让对方知道接下来接收数据的时候如何按序列号组装数据\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("ACK")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ACK的全称是Acknowledge character，中文名称叫做确认字符。\n表示发来的数据已确认接收无误。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("FIN")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("FIN是tcp包中的一个标识字段，表示关闭连接\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);