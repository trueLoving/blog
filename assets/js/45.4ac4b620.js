(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{367:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[t._v("通过阅读优秀开源项目的源码,对于该项目的理解会更上一层楼")]),t._v(" "),a("p",[t._v("同时,开源项目中所使用的编码技术我们可以使用在我们平常的编码工作中,让我们的代码更具有质量")])]),t._v(" "),a("h2",{attrs:{id:"思维导图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思维导图"}},[t._v("#")]),t._v(" 思维导图")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/Notes/axios源码阅读01.jpg"),alt:"axios源码阅读01"}}),t._v(" "),a("h2",{attrs:{id:"执行过程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行过程图"}},[t._v("#")]),t._v(" 执行过程图")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/Notes/axios源码阅读02.jpg"),alt:"axios源码阅读02"}}),t._v(" "),a("ol",[a("li",[a("p",[t._v("axios/axios.create会调用Axios的createInstance方法,创建一个基于config参数的函数对象,且该函数对象上有Axios的原型方法")])]),t._v(" "),a("li",[a("p",[t._v("然后执行返回回来的函数对象,该函数对象内部会调用原型对象上的request方法发送请求")])]),t._v(" "),a("li",[a("p",[t._v("待请求完成后,会返回一个promise对象以使我们能够获取到请求得到的结果")])])]),t._v(" "),a("h2",{attrs:{id:"axios-prototype-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios-prototype-request"}},[t._v("#")]),t._v(" Axios.prototype.request")]),t._v(" "),a("p",[t._v("该方法会返回一个promise对象")]),t._v(" "),a("p",[t._v("该方法的作用将请求拦截器,dispatchRequest方法,响应拦截器串联成一个链式的promise")]),t._v(" "),a("p",[t._v("代码具体是在 /lib/core/Axios.js 第51行~第66行")]),t._v(" "),a("p",[t._v("代码如下")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dispatchRequest是一个函数,返回值为promise,具体的会在下面阐述")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config为外部传进来的配置参数")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建promise链")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" chain "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dispatchRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" promise "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将请求拦截器放入promise链")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unshiftRequestInterceptors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("interceptor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unshift")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interceptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fulfilled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("interceptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rejected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将响应拦截器放入promise链")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unshiftResponseInterceptors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("interceptor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interceptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fulfilled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("interceptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rejected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 链式调用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    promise "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回执行结果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" promise\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])]),a("p",[t._v("在这里,该处代码首先创建了一个chain变量数组,默认值为[dispatchRequest,undefined]")]),t._v(" "),a("p",[t._v("然后将请求拦截器里的回调函数放在chain的前面,将响应拦截器里的回调函数放在chain的后面")]),t._v(" "),a("p",[t._v("之后链式调用promise")]),t._v(" "),a("p",[t._v("最后返回执行结果")]),t._v(" "),a("p",[a("code",[t._v("执行过程图如下")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/Notes/axios源码阅读03.jpg"),alt:"axios源码阅读03"}}),t._v(" "),a("h2",{attrs:{id:"axios-prototype-dispatchrequest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios-prototype-dispatchrequest"}},[t._v("#")]),t._v(" Axios.prototype.dispatchRequest")]),t._v(" "),a("p",[t._v("该方法会返回一个promise对象")]),t._v(" "),a("p",[t._v("该方法的调用时机是在request进行promise链式调用时触发,准确来说,是在执行完成所有的请求拦截器时触发")]),t._v(" "),a("p",[t._v("该方法的主要功能是完成请求体数据格式和响应体格式的转换")]),t._v(" "),a("p",[t._v("当传入的config参数数据类型为object,则会自动将object转换为json")]),t._v(" "),a("p",[t._v("当后端返回的数据为json时,会自动将json转换为object")]),t._v(" "),a("p",[t._v("该方法的执行流程如下")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("转换请求数据")])]),t._v(" "),a("li",[a("p",[t._v("调用xhrAdapter()发送请求")])]),t._v(" "),a("li",[a("p",[t._v("请求返回转换响应数据,返回promise")])])]),t._v(" "),a("p",[t._v("代码具体在/lib/core/dispatchRequest")]),t._v(" "),a("p",[a("code",[t._v("过程图如下")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/Notes/axios源码阅读04.jpg"),alt:"axios源码阅读04"}}),t._v(" "),a("h2",{attrs:{id:"xhradapter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xhradapter"}},[t._v("#")]),t._v(" xhrAdapter")]),t._v(" "),a("p",[t._v("该方法会返回一个promise,会由dispatchRequest调用")]),t._v(" "),a("p",[t._v("该方法创建一个xhr对象,根据上面config参数进行相应设置,发送请求,并接受响应数据")]),t._v(" "),a("p",[t._v("如果成功,则resolve(data),否则就reject(reason)")]),t._v(" "),a("p",[t._v("代码具体在 /lib/adapter/xhr.js")]),t._v(" "),a("h2",{attrs:{id:"取消请求流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取消请求流程"}},[t._v("#")]),t._v(" 取消请求流程")]),t._v(" "),a("ol",[a("li",[t._v("当配置了cancelToken对象时\n"),a("ol",[a("li",[t._v("创建一个用于将来取消请求的cancelPromise")]),t._v(" "),a("li",[t._v("并定义了一个用于取消请求的cancel函数")]),t._v(" "),a("li",[t._v("将cancel函数传递出来")])])]),t._v(" "),a("li",[t._v("取消请求\n"),a("ol",[a("li",[t._v("执行cancel函数,传递错误信息")]),t._v(" "),a("li",[t._v("内部会让cancelPromise变为成功,且成功的值为一个Cancel对象")]),t._v(" "),a("li",[t._v("在cancelPromise的成功回调中中断请求,并让发请求的promise失败,失败的reason为Cancel对象")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);