(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{373:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("npm i webpack@next webpack-cli -D")]),t._v(" "),a("h4",{attrs:{id:"关注点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关注点"}},[t._v("#")]),t._v(" 关注点")]),t._v(" "),a("ol",[a("li",[t._v("通过持久缓存提高构建性能")]),t._v(" "),a("li",[t._v("使用更好的算法和默认值来改善长期缓存")]),t._v(" "),a("li",[t._v("通过更好的树摇和代码生成来改善捆绑包")]),t._v(" "),a("li",[t._v("清除处于怪异状态的内部结构，同时在v4中实现功能二不引入重大改变")]),t._v(" "),a("li",[t._v("通过引入重大更改来为将来的功能做准备，以使我们能够尽可能长时间使用v5")])]),t._v(" "),a("h4",{attrs:{id:"自动删除node-js-polyfills"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动删除node-js-polyfills"}},[t._v("#")]),t._v(" 自动删除Node.js Polyfills")]),t._v(" "),a("p",[t._v("在webpack5中，会自动停止Node的核心模块的提供，并专注于前端兼容的模块")]),t._v(" "),a("p",[t._v("迁移")]),t._v(" "),a("ol",[a("li",[t._v("尽可能尝试使用与前端兼容的模块")]),t._v(" "),a("li",[t._v("可以为nodejs核心模块手动添加一个polyfill。错误信息会提示如何实现该目标")])]),t._v(" "),a("h4",{attrs:{id:"chunk-和-模块id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunk-和-模块id"}},[t._v("#")]),t._v(" Chunk 和 模块ID")]),t._v(" "),a("p",[t._v("添加了用于长期缓存的新算法。在生产模式默认启动")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("chunkId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deterministic'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("moduleIds"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deterministic'")]),t._v("\n")])])]),a("h4",{attrs:{id:"chunk-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunk-id"}},[t._v("#")]),t._v(" Chunk ID")]),t._v(" "),a("p",[t._v("我们可以不用使用"),a("code",[t._v("import(/*webpackChunkName:'name'*/'module')")]),t._v("在开发环境来为chunk命名")]),t._v(" "),a("p",[t._v("webpack内部有chunk的命名规则，不再是以id(0,1,2)命名")]),t._v(" "),a("h4",{attrs:{id:"tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[t._v("#")]),t._v(" Tree Shaking")]),t._v(" "),a("ol",[a("li",[t._v("webpack5能够处理嵌套模块的tree shaking")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// module.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" inner "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./inner'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" inner "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// user.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" module "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./module'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在生产环境中，inner模块的b会被删除")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("webpack5能够处理多个模块之前的关系")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" something "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./something'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usingSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" something"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usingSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当设置"),a("code",[t._v("'sideEffects':false")]),t._v("时，一旦发现"),a("code",[t._v("test")]),t._v("方法没有使用，不但会删除test，还会删除"),a("code",[t._v("./something")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("webpack5能够处理Commonjs的tree shaking")])]),t._v(" "),a("h4",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" output")]),t._v(" "),a("p",[t._v("webpack4 默认输出ES5代码")]),t._v(" "),a("p",[t._v("webpack5 开始新增一个属性output.ecmaVersion,可以生成ES5和ES6代码")]),t._v(" "),a("h4",{attrs:{id:"caching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caching"}},[t._v("#")]),t._v(" Caching")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缓存类型")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'filesystem'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    buildDependencies"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当配置修改时，缓存失效")]),t._v("\n        config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("__filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("缓存将存储到node_modules/.cache/webpack")]),t._v(" "),a("h4",{attrs:{id:"更多内容-https-github-com-webpack-changelog-v5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多内容-https-github-com-webpack-changelog-v5"}},[t._v("#")]),t._v(" 更多内容 https://github.com/webpack/changelog-v5")])])}),[],!1,null,null,null);s.default=e.exports}}]);