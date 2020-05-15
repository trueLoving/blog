(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{221:function(s,e,a){"use strict";a.r(e);var t=a(9),l=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"_1-webpack是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack是什么"}},[s._v("#")]),s._v(" 1. Webpack是什么")]),s._v(" "),a("ol",[a("li",[s._v("前端资源构建工具（将代码在运行前进行处理，使得浏览器能够支持运行该代码）")]),s._v(" "),a("li",[s._v("静态模块打包器（将前端的所有资源文件作为模块，根据模块的依赖关系进行静态分析，打包成对应的静态资源(bundle)）")])]),s._v(" "),a("h4",{attrs:{id:"_2-webpack-五个核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-webpack-五个核心概念"}},[s._v("#")]),s._v(" 2. webpack 五个核心概念")]),s._v(" "),a("ol",[a("li",[s._v("Entry（入口）")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("指示webpack以哪个文件为入口起点开始打包，分析构建内部依赖图。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("Output（输出）")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("指示webpack打包后的资源bundles输出到哪里去，以及如何命名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("Loader")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("让webpack能够处理那些非JavaScript文件（类似于一些提供一些翻译功能）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("Plugins")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("可以用于执行范围更广的任务，插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("Mode")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("模式指示Webpack使用相应模式的配置\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),s._v(" "),a("img",{attrs:{src:s.$withBase("/Webpack/webpack的基本认识01.PNG"),alt:"mixureSecure"}}),s._v(" "),a("h4",{attrs:{id:"_3-webpack的基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-webpack的基本使用"}},[s._v("#")]),s._v(" 3. webpack的基本使用")]),s._v(" "),a("ol",[a("li",[s._v("npm init -y")]),s._v(" "),a("li",[s._v("npm i webpack webpack-cli -g")]),s._v(" "),a("li",[s._v("编写入口文件(./src/index.js 为例)，创建打包后的输出文件所存放的文件夹( ./build/为例)")]),s._v(" "),a("li",[s._v("运行命令\n"),a("ol",[a("li",[s._v("开发模式：webpack ./src/index.js -o ./build/built.js --mode==development")]),s._v(" "),a("li",[s._v("生产模式：webpack ./src/index.js -o ./build/built.js --mode==development")])])]),s._v(" "),a("li",[s._v("运行成功后会发现build文件夹下有一个built.js文件，该js文件可以被浏览器直接运行，也可以被node运行")])]),s._v(" "),a("h4",{attrs:{id:"_4-其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-其他"}},[s._v("#")]),s._v(" 4. 其他")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("webpack能够处理js/json文件，不能处理其他文件（除非引入相关loader进行预处理）")])]),s._v(" "),a("li",[a("p",[s._v("根目录下的文件webpack.config.js webpack的配置文件")]),s._v(" "),a("p",[s._v("作用：指示webpack在运行时应该加载哪些配置")]),s._v(" "),a("p",[s._v("所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs")])]),s._v(" "),a("li",[a("p",[s._v("webpack常见要打包的文件类型")])]),s._v(" "),a("li",[a("p",[s._v("css")])])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("style-loader 创建style标签并将js中的样式资源插入进行添加到head中生效\ncss-loader 将css代码变成commonjs加载到js中，以字符串的形式来存储css内容\nMiniCssExtractPlugin --\x3e 从js代码中提取css\npostcss,postcss-loader,postcss-preset-env --\x3e 处理css的兼容性\nOptimizeCssAssetsWebpackPlugins --\x3e 压缩css代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("js")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("eslint-loader eslint-config-airbnb-base eslint-plugin-import eslint --\x3e js的语法检查\nbabel-loader @babel/core @babel/preset-env @babel/polyfill core-js --\x3e 处理js的兼容性\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("html")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("HtmlWebpackPlugin 该插件功能会默认创建一个空的HTML文件，自动引入打包输出所有的资源\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("images")])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("url-loader  解析url中引入的图片,默认使用es6模块解析(因此，在这里要关闭该loader的es6语法)\nfile-loader 原样输出文件\nhtml-loader 处理html文件的img图片,默认使用commonjs模块解析\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"webpack的其他插件-第三方依赖库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack的其他插件-第三方依赖库"}},[s._v("#")]),s._v(" webpack的其他插件/第三方依赖库")]),s._v(" "),a("ol",[a("li",[s._v("workbox-webpack-plugin PWD依赖")]),s._v(" "),a("li",[s._v("thread-loader 多进程打包依赖")])])])}),[],!1,null,null,null);e.default=l.exports}}]);