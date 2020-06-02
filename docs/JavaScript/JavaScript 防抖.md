---
title: 防抖
categories:
 - 前端
tags:
 - javascript
date: 2020-06-02
---


:::tip

防抖的学习笔记

:::

<!-- more -->


## What

防抖是避免事件无意义频繁触发的一种解决方案

例如,当我们点击一个按钮会发送一次ajax请求。可当我们用户频繁点击该按钮时会发送多次请求,这样就造成了一定的资源浪费

防抖的原理就是：尽管我们多次触发事件,但是事件的执行一定在n秒后执行,如果我们在n秒内又触发了该事件,那么我们就重新以新的事件时间作为标准。总而言之,就是事件的触发一定会在n秒后且在n秒内不会被触发该事件才会执行

## How

#### 要求

1. 我们通过定时器来实现事件触发的延迟
2. 在我们实现防抖时,要考虑到参数函数f执行时的this和event参数
3. 我们希望通过向防抖函数传入一个函数来表明参数函数f是否立即执行,待等到n秒后且n秒内没触发才触发
4. 参数函数f有可能有返回值,我们的防抖函数需要向外返回
5. 防抖函数支持可取消功能


#### 代码实现


```js
function debounce(f,wait,immediate){

    var timeout,result;

    var debounced = function(){

        var context = this;
        var args = arguments;

        if(timeout)clearTimeout(timeout);

        if(immediate){
            // 如果已经执行过,不再执行
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            },wait)
            if(callNow)result = f.apply(context,args);
        }else{
            timeout = setTimeout(function(){
                func.apply(context,args);
            },wait)
        }
        return result;
    }

    debounced.cancel = function(){
        clearTimeout(timeout);
        timeout = null;
    }
    return debounced;
}

```