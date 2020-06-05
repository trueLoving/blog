(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{373:function(t,e,r){"use strict";r.r(e);var a=r(2),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"事件循环机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事件循环机制"}},[t._v("#")]),t._v(" 事件循环机制")]),t._v(" "),r("h4",{attrs:{id:"执行流程图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行流程图"}},[t._v("#")]),t._v(" 执行流程图")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/JavaScript/JavaScript 常见流程图 事件循环机制执行流程图.jpg"),alt:"mixureSecure"}}),t._v(" "),r("h4",{attrs:{id:"描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),r("p",[t._v("JavaScript的代码按照执行时机可以分为以下两种")]),t._v(" "),r("ol",[r("li",[t._v("同步代码:执行立马可以得到反馈结果的代码")]),t._v(" "),r("li",[t._v("异步代码:执行不会立马可以得到反馈结果的代码")])]),t._v(" "),r("p",[t._v("引擎在"),r("code",[t._v("执行")]),t._v("代码时,若发现异步代码,例如定时器,就会像浏览器的其他模块,例如定时器模块进行请求")]),t._v(" "),r("p",[t._v("然后让浏览器对应模块进行处理")]),t._v(" "),r("p",[t._v("当处理完成后,就将结果和回调函数放在回调函数队列中")]),t._v(" "),r("p",[t._v("当执行所有的同步代码后,引入会循环查询回调队列,若有则开始执行对应的回调函数")]),t._v(" "),r("h2",{attrs:{id:"promise"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[t._v("#")]),t._v(" Promise")]),t._v(" "),r("h4",{attrs:{id:"执行流程图-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行流程图-2"}},[t._v("#")]),t._v(" 执行流程图")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/JavaScript/JavaScript 常见流程图 promise执行流程图.jpg"),alt:"mixureSecure"}}),t._v(" "),r("h4",{attrs:{id:"描述-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#描述-2"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),r("p",[t._v("Promise是一种异步编程的解决方案")]),t._v(" "),r("p",[t._v("Promise是构造函数,其构造参数为Function类型,用于执行异步代码的函数")]),t._v(" "),r("p",[t._v("当执行promise后,若执行resolve方法,则当前的promise的状态由pending--\x3eresolved")]),t._v(" "),r("p",[t._v("当执行promise后,若执行reject方法,则当前的promise的状态由pending--\x3erejected")]),t._v(" "),r("p",[t._v("然后我们可以使用then()触发onResolved方法,以此来获取异步操作成功返回回来的数据")]),t._v(" "),r("p",[t._v("我们也可以使用then()/catch()触发onRejected方法,以此来获取异步操作失败返回回来的数据")]),t._v(" "),r("p",[t._v("then()返回的是新的promise对象")])])}),[],!1,null,null,null);e.default=s.exports}}]);