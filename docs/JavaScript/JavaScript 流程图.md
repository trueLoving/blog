---
title: 流程图
categories:
 - FrontEnd
tags:
 - javascript
date: 2019-06-11
publish: false
---

## 事件循环机制
#### 执行流程图
<img :src="$withBase('/JavaScript/JavaScript 常见流程图 事件循环机制执行流程图.jpg')" alt="mixureSecure">

#### 描述
JavaScript的代码按照执行时机可以分为以下两种
1. 同步代码:执行立马可以得到反馈结果的代码
2. 异步代码:执行不会立马可以得到反馈结果的代码

引擎在`执行`代码时,若发现异步代码,例如定时器,就会像浏览器的其他模块,例如定时器模块进行请求

然后让浏览器对应模块进行处理

当处理完成后,就将结果和回调函数放在回调函数队列中

当执行所有的同步代码后,引入会循环查询回调队列,若有则开始执行对应的回调函数


## Promise

#### 执行流程图
<img :src="$withBase('/JavaScript/JavaScript 常见流程图 promise执行流程图.jpg')" alt="mixureSecure">

#### 描述

Promise是一种异步编程的解决方案

Promise是构造函数,其构造参数为Function类型,用于执行异步代码的函数

当执行promise后,若执行resolve方法,则当前的promise的状态由pending-->resolved

当执行promise后,若执行reject方法,则当前的promise的状态由pending-->rejected

然后我们可以使用then()触发onResolved方法,以此来获取异步操作成功返回回来的数据

我们也可以使用then()/catch()触发onRejected方法,以此来获取异步操作失败返回回来的数据

then()返回的是新的promise对象