---
title: 节流
categories:
 - 前端
tags:
 - javascript
date: 2020-06-02
---


:::tip

节流的学习笔记

:::

<!-- more -->

## What
节流也是限制事件无意义触发的一种解决方案 

还有一种解决方案就是防抖

## How

节流的原理是：如果我们持续触发事件,每隔一段事件,只执行一次事件

我们可以通过时间戳和定时器来实现节流

#### 时间戳

使用时间戳,当触发事件的时候,我们取出当前的时间戳,然后减去之前的时间戳(最一开始设置为0),如果大于设置的时间周期,然后更新时间戳为当前的时间戳,如果小于,就不执行

```js
function throttle(func,wait){

    var context,args;
    var previous = 0;

    return function(){
        var now += new Date();
        context = this;
        args = arguments;
        if(now - previous>wait){
            func.apply(context,args);
            previous = now;
        }

    }
}

```

该方法事件会立即执行,并且停止触发后没有办法再次执行事件

#### 定时器

当触发事件的时候,我们设置一个定时器,再触发事件,如果定时器存在,就不执行,直到定时器执行,然后执行函数,清空执行器

```js
function throttle(func,wait){

    var timeout;
    var previous = 0;

    return function(){
        context = this;
        args = arguments;
        if(!timeout){
            timeout = setTimeout(()=>{
                timeout=null;
                func.apply(context,args);
            },wait)
        }
    }

}

```


该方法首次事件的触发是在n秒后执行,并且当停止触发事件后还会再执行一次事件
