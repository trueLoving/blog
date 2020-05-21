(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{359:function(t,a,v){"use strict";v.r(a);var _=v(4),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),v("p",[t._v("​\tJavaScript的异步问题，是一个老生常谈的问题了。无论是在我们的面试中，还是在我们的实际开发中，如果你要使用JavaScript这门语言，那么你就无法避免JavaScript的异步。")]),t._v(" "),v("p",[t._v("​\t对于JavaScript的异步这个问题，其实已经有许多博客文章讲过了，而且也已经讲得十分的清楚了。在这里，我也只是阐述我对于JavaScript 异步的理解，或许有的地方会讲得不清楚，甚至是错误的，在这里请大佬们多多指正！")]),t._v(" "),v("h2",{attrs:{id:"什么是同步，什么是异步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是同步，什么是异步"}},[t._v("#")]),t._v(" 什么是同步，什么是异步")]),t._v(" "),v("p",[t._v("​异步,英文名称为Asynchronous，按照百度百科异步其实是一种通讯方式，它对数据交换的双方接收数据和发送数据的时间点没有要求，即接收方不知道发送方什么时候将数据发送，发送方也不知道接收方什么时候能够接收到数据（在我个人看来，就是接收方只关注如何去接收数据，而发送方只关注如何去发送数据）。")]),t._v(" "),v("p",[t._v("​其实，不只是JavaScript中有异步的概念，其他的编程语言也有异步的概念，异步在计算机的应用范围是十分的广泛的。在这里要强调一下，异步与多线程与并行并不是同一个概念。")]),t._v(" "),v("p",[t._v("​多线程：就是能够对多个程序进行同时操控。")]),t._v(" "),v("p",[t._v("​并行：多个程序在处理期间，在处理开始到处理结束这个时间段之间，有重合的部分。")]),t._v(" "),v("p",[t._v("​而异步概念对立的概念是同步。")]),t._v(" "),v("p",[t._v("​在这里先给一个异步同步的简单概念")]),t._v(" "),v("p",[t._v("​异步：计算机在处理某个线程时，不用阻塞当前线程来等待处理完成，而是允许后续操作，直至其他线程将处理完成，并回调通知此线程。")]),t._v(" "),v("p",[t._v("​同步：就是按顺序一步一步执行线程，根据线程所存放的栈一个一个按顺序执行")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("1. 线程：其实就是一个最小的处理单元。每一个线程一次只能执行一个任务\n2. 每一个任务顺序执行，只有前面的完成了，后面的才能开始\n")])])]),v("p",[t._v("​\t因为现在的计算机大多数都是多个内核(core)，因此可以同时执行多个任务。支持多线程的编程语言可以使用计算机的多个内核，同时完成多个任务，比如"),v("a",{attrs:{href:"https://baike.baidu.com/item/java/85979",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java"),v("OutboundLink")],1),t._v("就可以开多线程同时处理多个任务")]),t._v(" "),v("h2",{attrs:{id:"为什么javascript会出现同步和异步的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么javascript会出现同步和异步的问题"}},[t._v("#")]),t._v(" 为什么JavaScript会出现同步和异步的问题")]),t._v(" "),v("p",[t._v("​\t在我看来，JavaScript会出现同步和异步的最主要的原因是因为JavaScript是单线程的，而现在的计算机大多数都是多个内核(core)，可以同时执行多个任务。JavaScript无法最大化的利用内核。")]),t._v(" "),v("p",[t._v("​\t我认为，JavaScript的异步技术其最终目的是为了最大提高JavaScript对计算机内核的利用率。")]),t._v(" "),v("p",[t._v("​\t为什么JavaScript是单线程的，而不像Java是多线程的呢？")]),t._v(" "),v("p",[t._v("​\t我想我们可以这里理解")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("1. 我们要清楚js代码是由谁去解析执行的，是浏览器里js引擎去解析执行的。\n2. 浏览器在我们的操作系统中是属于一个什么样的程序：是属于一个多进程多线程的程序。\n3. 而浏览器在打开后具体包含以下进程\n\t1. Browser进程，浏览器的主进程，主要作用有\n\t\t- 控制浏览器的交互动作，例如：打开关闭页面、前进后退按钮、接受URL输入等\n\t\t- 网络资源的下载\n\t\t- 将renderer渲染进程的结果展示到用户界面\n\t2. 插件进程，浏览器的每一个插件对应一个进程\n\t3. GPU进程，用于3D绘制等，最多只能有一个\n4. 浏览器初始化完成后，每打开一个tab页，即多增加一个渲染进程。\n5. 而浏览器的一个渲染进程又包括以下线程\n\t1. UI渲染线程\n\t2. JS引擎线程\n\t3. 事件触发线程\n\t4. 定时器线程\n\t5. 异步http请求线程\n6. 因此，到这里我们可以看到JS引擎其实是一个线程，自然而然就可以推出JavaScript就是一个单线程的脚本语言\n")])])]),v("p",[t._v("参考文章："),v("a",{attrs:{href:"https://blog.csdn.net/a380776767/article/details/82667540",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的多进程、多线程运行机制"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("​\t刚刚讲了一下为什么JavaScript是单线程的，而在我们的实际开发中，虽然我们只写JavaScript代码，但是我们不仅仅只跟JS引擎这一个线程打交道，我们还会跟浏览器中的一个渲染进程的其他线程打交道")]),t._v(" "),v("ol",[v("li",[t._v("例如，在我们发送Ajax请求时，JS引擎会跟异步http请求线程打交道。")]),t._v(" "),v("li",[t._v("例如，在我们设置定时器时，JS引擎会跟定时器线程打交道。")]),t._v(" "),v("li",[t._v("例如，在我们会某一个DOM元素设置监听事件时,JS引擎会跟事件线程打交道。")]),t._v(" "),v("li",[t._v("......")])]),t._v(" "),v("p",[t._v("所以，从另外一个方面来讲，其实JavaScript也是一门“多线程编程语言”。")]),t._v(" "),v("p",[t._v("正是因为这些现实的原因，所以我们才引入了异步技术")]),t._v(" "),v("h2",{attrs:{id:"我们在编写代码中如何利用同步和异步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#我们在编写代码中如何利用同步和异步"}},[t._v("#")]),t._v(" 我们在编写代码中如何利用同步和异步")]),t._v(" "),v("p",[t._v("​刚刚前面讲了异步的基本概念和异步提出的一些原因，那么接下来就要讲讲如何在我们编写JS代码时使用异步技术。")]),t._v(" "),v("p",[t._v("​首先，讲讲JS中几种可以使用到异步技术的情况")]),t._v(" "),v("ol",[v("li",[t._v("Ajax网络请求（会与http异步线程交互）")]),t._v(" "),v("li",[t._v("定时器设置（会与定时器线程交互）")]),t._v(" "),v("li",[t._v("文件的读取")]),t._v(" "),v("li",[t._v("访问数据库")]),t._v(" "),v("li",[t._v("......")])]),t._v(" "),v("p",[t._v("​然后就是现在几种比较常见的异步技术")]),t._v(" "),v("ol",[v("li",[t._v("回调函数callback")]),t._v(" "),v("li",[t._v("异步对象 Promise(es6)")]),t._v(" "),v("li",[t._v("async 和 await(es7)")])]),t._v(" "),v("p",[t._v("​在这里，我就不具体讲如何使用刚刚上述的异步技术来进行异步编程，因为如果要讲的话是会非常的复杂，文章的篇幅也会变得非常的长。")]),t._v(" "),v("h2",{attrs:{id:"最后"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),v("p",[t._v("​我们要清楚，同步和异步并没有好坏之分，不是说使用异步就会使得JavaScript的运行效率变高。"),v("strong",[t._v("异步还是同步执行代码，取决于我们要做什么")]),t._v("。")]),t._v(" "),v("p",[t._v("​有些时候，我们希望事情能够立即加载并发生。例如，当将一些用户定义的样式应用到一个页面时，您希望这些样式能够尽快被应用。")]),t._v(" "),v("p",[t._v("​但是，如果我们正在运行一个需要时间的操作，比向后端请求数据，那么最好将该操作从主线程中移开使用异步完成任务。")]),t._v(" "),v("p",[t._v("​我们要搞清楚什么情况下使用异步，什么情况下使用同步，这样我们才能发挥异步技术的优势。")])])}),[],!1,null,null,null);a.default=r.exports}}]);