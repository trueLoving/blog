---
title: axios源码学习
categories:
 -  笔记
tags:
 - 笔记
date: 2020-05-28
---

:::tip

通过阅读优秀开源项目的源码,对于该项目的理解会更上一层楼

同时,开源项目中所使用的编码技术我们可以使用在我们平常的编码工作中,让我们的代码更具有质量

:::

<!-- more -->


## 思维导图

<img :src="$withBase('/Notes/axios源码阅读01.jpg')" alt="axios源码阅读01">



## 执行过程图

<img :src="$withBase('/Notes/axios源码阅读02.jpg')" alt="axios源码阅读02">

1. axios/axios.create会调用Axios的createInstance方法,创建一个基于config参数的函数对象,且该函数对象上有Axios的原型方法

2. 然后执行返回回来的函数对象,该函数对象内部会调用原型对象上的request方法发送请求

3. 待请求完成后,会返回一个promise对象以使我们能够获取到请求得到的结果

## Axios.prototype.request

该方法会返回一个promise对象

该方法的作用将请求拦截器,dispatchRequest方法,响应拦截器串联成一个链式的promise

代码具体是在 /lib/core/Axios.js 第51行~第66行

代码如下
```js
// dispatchRequest是一个函数,返回值为promise,具体的会在下面阐述
// config为外部传进来的配置参数

// 创建promise链
var chain = [dispatchRequest,undefined];
var promise = Promise.resolve(config);

// 将请求拦截器放入promise链
this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor){
    chain.unshift(interceptor.fulfilled,interceptor.rejected);
})

// 将响应拦截器放入promise链
this.interceptors.response.forEach(function unshiftResponseInterceptors(interceptor){
    chain.push(interceptor.fulfilled,interceptor.rejected);
})

// 链式调用
while(chain.length){
    promise = promise.then(chain.shift(),chain.shift())
}

// 返回执行结果
return promise
```

在这里,该处代码首先创建了一个chain变量数组,默认值为[dispatchRequest,undefined]

然后将请求拦截器里的回调函数放在chain的前面,将响应拦截器里的回调函数放在chain的后面

之后链式调用promise

最后返回执行结果

`执行过程图如下`


<img :src="$withBase('/Notes/axios源码阅读03.jpg')" alt="axios源码阅读03">

## Axios.prototype.dispatchRequest

该方法会返回一个promise对象

该方法的调用时机是在request进行promise链式调用时触发,准确来说,是在执行完成所有的请求拦截器时触发

该方法的主要功能是完成请求体数据格式和响应体格式的转换

当传入的config参数数据类型为object,则会自动将object转换为json

当后端返回的数据为json时,会自动将json转换为object

该方法的执行流程如下

1. 转换请求数据

2. 调用xhrAdapter()发送请求

3. 请求返回转换响应数据,返回promise

代码具体在/lib/core/dispatchRequest

`过程图如下`

<img :src="$withBase('/Notes/axios源码阅读04.jpg')" alt="axios源码阅读04">


## xhrAdapter

该方法会返回一个promise,会由dispatchRequest调用

该方法创建一个xhr对象,根据上面config参数进行相应设置,发送请求,并接受响应数据

如果成功,则resolve(data),否则就reject(reason)

代码具体在 /lib/adapter/xhr.js

## 取消请求流程

1. 当配置了cancelToken对象时
    1. 创建一个用于将来取消请求的cancelPromise
    2. 并定义了一个用于取消请求的cancel函数
    3. 将cancel函数传递出来
2. 取消请求
    1. 执行cancel函数,传递错误信息
    2. 内部会让cancelPromise变为成功,且成功的值为一个Cancel对象
    3. 在cancelPromise的成功回调中中断请求,并让发请求的promise失败,失败的reason为Cancel对象