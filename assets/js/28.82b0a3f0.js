(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{380:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"概念须知"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概念须知"}},[s._v("#")]),s._v(" 概念须知")]),s._v(" "),n("ol",[n("li",[s._v("执行环境：执行环境定义了变量或函数是否有权访问去访问其他数据，并决定了它们各自的行为")]),s._v(" "),n("li",[s._v("每一个执行环境都有一个与之相关的变量对象，环境中定义的所有变量和函数都保存在这个对象中。就是说，在JavaScript的后台中，每一个执行环境都有一个变量对象与之对应")]),s._v(" "),n("li",[s._v("每一个函数都有自己的执行环境")]),s._v(" "),n("li",[s._v("当代码在一个环境中执行时，会创建当前执行环境与之对应的变量对象的一个"),n("strong",[s._v("作用域链")])]),s._v(" "),n("li",[s._v("作用域链的目的就是保证能够有权有序访问执行环境的所有变量和函数")]),s._v(" "),n("li",[s._v("而作用域的前端，始终时当前执行的代码所在环境的变量对象")]),s._v(" "),n("li",[s._v("全局执行环境都是作用域链中的最后一个对象")])]),s._v(" "),n("h2",{attrs:{id:"作用域链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[s._v("#")]),s._v(" 作用域链")]),s._v(" "),n("p",[s._v("​\t现在对作用域链做一个简单的介绍")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1. 作用域链其实是由一个个执行环境与之对应的变量对象所组成的\n2. 而每一个变量对象存储着当前执行环境声明的所有函数和对象\n3. 作用域链的最顶端始终是当前的执行环境对应的变量对象\n4. 作用域链的最底部始终是全局执行环境对应的变量对象\n5. 而对一个变量的访问始终是从作用域链的最顶端开始，一直沿着作用域链查看每一个执行环境对应的变量对象是否有该变量，有就返回，并停止访问。如果没有就继续向上访问作用域链。\n6. 如果遍历作用域链中的所有环境变量（就是每一个执行环境与之对应的变量对象）还没有找到该变量，则抛出未定义的异常\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"例子说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子说明"}},[s._v("#")]),s._v(" 例子说明")]),s._v(" "),n("p",[s._v("​\t这里，用一个简单的例子说明变量沿着作用域链的访问过程")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全局执行环境 将与之对应的环境变量记作global ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("f1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// f1()函数内部的执行环境，将与之对应的环境变量记作f1")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("f2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// f2()函数内部的执行环境，将与之对应的环境变量记作f2")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('" f2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('" f2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error, c is not defined")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.log(c);")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("f2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('" f1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('" f1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('" global"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("f1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("p",[s._v("​\t在这段代码中，共涉及到三个执行环境，那么与之对应的就有三个环境变量，它们存储着对应执行环境所声明的变量和函数。\n这三个环境变量分别是")]),s._v(" "),n("ol",[n("li",[s._v("全局执行环境与之对应的环境变量global")]),s._v(" "),n("li",[s._v("f1函数执行环境与之对应的环境变量f1")]),s._v(" "),n("li",[s._v("f1函数执行环境与之对应的环境变量f2")])]),s._v(" "),n("p",[s._v("而在这段代码中，这三个环境变量将会构成一个作用域链，如下图所示")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/JavaScript/JavaScript 作用域链1.png"),alt:"mixureSecure"}}),s._v(" "),n("p",[s._v("有了这幅图，我们就可以非常清楚一个变量的访问过程")]),s._v(" "),n("p",[s._v("一个变量的访问过程可以分为下面几步")]),s._v(" "),n("ol",[n("li",[s._v("可以知道当前的作用域链")]),s._v(" "),n("li",[s._v("要确定被访问变量所在的执行环境所对应的环境变量")]),s._v(" "),n("li",[s._v("将被访问变量所对应的环境变量作为访问作用域链的起点，然后开始向上访问")])]),s._v(" "),n("p",[s._v("就以f1函数的console.log(a)为例（此处是访问变量a）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1. 首先，确定被访问变量a所在的执行环境对应的环境变量，在这里是f1\n2. 然后以该环境变量作为起点向上访问作用域链，遇到就返回当前变量所对应的值并停止访问\n3. 发生f1环境变量中有变量名为a的变量，返回该变量所对应的值，并停止访问作用域链\n\n因此，console.log(a)所显示的结果是f2函数中声明的变量a，而不是外部全局的变量a\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("再以f1函数中的console.log(b)为例(此处是访问变量b)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1. 首先，确定被访问变量b所在的执行环境对应的环境变量，在这里是f1\n2. 然后以该环境变量作为起点向上访问作用域链，遇到就返回当前变量所对应的值并停止访问\n3. 在这里，发现环境变量f1中没有变量名为b的变量，于是向上访问作用域链，结果访问到全局执行环境对应的环境变量global\n4. 发现global环境变量中有变量名为b的变量，于是返回该变量对应的值，停止作用域链的访问\n\n因此，console.log(b)所显示的结果是定义在函数f1外部的变量名为b的变量值\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("再以f2函数中的console.log(b)为例(此处是访问变量b)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1. 首先，确定被访问变量b所在的执行环境对应的环境变量，在这里是f2\n2. 然后以该环境变量作为起点向上访问作用域链，遇到就返回当前变量所对应的值并停止访问\n3. 在这里，发现环境变量f2中没有变量名为b的变量，于是向上访问作用域链，结果访问到f1函数对应的环境变量f1\n4. 然后发现f1也没有变量名为b的变量，于是继续沿作用域链向上访问，结果访问到全局执行环境对应的环境变量global\n5. 发现global环境变量中有变量名为b的变量，于是返回该变量对应的值，停止作用域链的访问\n\n因此，console.log(b)所显示的结果是定义在全局执行环境的变量名为b的变量值\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("再以f2函数中的console.log(a)为例(此处是访问变量a)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1. 首先，确定被访问变量a所在的执行环境对应的环境变量，在这里是f2\n2. 然后以该环境变量作为起点向上访问作用域链，遇到就返回当前变量所对应的值并停止访问\n3. 在这里，发现环境变量f2中没有变量名为a的变量，于是向上访问作用域链，结果访问到f1函数对应的环境变量f1\n4. 然后发现f1有变量名ab的变量，于是发f1环境变量中变量名为a的变量值，并停止访问\n\n因此，console.log(a)所显示的结果是定义在f1执行环境的变量名为a的变量值\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("f2函数中的console.log(c)原理也相同，这里就不作过多阐述了")])])}),[],!1,null,null,null);a.default=e.exports}}]);