---
title: Object对象
categories:
 - 前端
tags:
 - javascript
date: 2019-04-11
---
## 前言

对象，无论是在JavaScript语言中，还是在其他语言，都是一个非常重要的概念

对象，在我看来:

1. 从宏观上来见，其实就是对应现实生活中具体的事物（例如人，车，学生等）
2. 从微观上来讲，其实就是保存着名值对的一个{}

在对象中，有一个非常重要的概念：类

类，其实就是对所有具有相同特征的对象，将相同特征组合进行组成。

```
我们可以认为类其实就是一个模板，而对象是基于这个模板所创建出来的实例。
例如 “学生”这个概念我们就可以对应到类这个概念
而“张三”,"李四"这些人的是“学生”这个类的实例对象
```

在JavaScript，可以说所有的内置变量都是对象（因为在JavaScript中函数也是对象，而正是因为这个特性，我们可以实现函数的高级操作，例如回调，闭包，将函数当作参数给函数执行）

## 对象的属性

在JavaScript中，对象的属性是可以**动态添加和删除**。

1. 我们可以直接使用 obj[attr]=value 来添加属性或修改属性名对应的属性值

```
如果在使用该语句前obj上已经有attr这个属性名了，那么就会修改obj[attr]的值
如果obj上没有该属性名，则会添加该属性
```

2. 我们可以使用**delete**关键字来删除对象上属性名所对应的属性

```js
// 示例代码
// 创建测试样例
var obj = {
    "a":"hello a",
    [Symbol("b")]:"hello b"
}
// {a: "hello a", Symbol(b): "hello b"}
console.log(obj);
// 删除obj上属性名名为a的属性
delete obj.a
// {Symbol(b): "hello b"}
console.log(obj);
```

3. 我们可以使用JavaScript内置对象Object的defineProperty方法来为对象添加属性并作详细配置

```js
var obj = {};
// 使用方法，为obj实例对象添加属性名为a的属性
Object.defineProperty(obj,"a",{
    get:function(){
        return "hello a"
    },
    set:function(newValue){
        this.a = newValue;
    }
})
// 输出 hello a
console.log(obj.a);
```

```
在这里要说一下，在使用Object.defineProperty方法时第三个参数是一个关于属性的描述对象
在JavaScript中，存在着一个叫做属性描述符的概念，该概念是用于描述属性用的
属性描述符有两种:
1. 数据描述符(描述该属性是否可修改，是否可以重新配置，是否可以变for...of遍历到，默认值为多少)
2. 存取描述符(描述在读取或修改该属性时应该怎么做)
```

这里就不作具体的介绍，具体的内容请点击[该链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

## 对象的属性名

在JavaScript中，按照ECMAScript6的标准，对象的属性名可以有以下两种类型

1. 字面量字符串
2. Symbol实例对象（该类属性名的存在是为了防止属性名冲突）

示例代码如下

```js
// 创建测试对象
var obj = {
    "a":"hello a",
    [Symbol("b")]:"hello b"
}
/**
 * Reflect是ES6的一个新添加的静态对象，不可被实例化
 * 该对象的ownKeys方法可以获取参数对象上的所有属性名(包括字符串和Symbol实例对象，但不包括其原型链上的属性)
 */
Reflect.ownKeys(obj).forEach((item)=>{
    // 打印obj对象上属性名对应的属性值
    console.log(obj[item]);
})
```

## 对象的属性值

在JavaScript中，对象的属性值可以有以下几种

1. 基本的数据类型(String,Number,Boolean,null,undefined,)
2. 引用数据类型(Object,funtion,Array,Set,Map,Proxy,Symbol,.....)

我们获取对象的属性值是通过该属性值对应的属性名来获取的

```
在这里，要说两个概念：属性和方法
对象是由一系列的key-value组成的无序序列。
而根据value类型的不同（或许也可以说是属性使用的目的不同）将key-value可划分为属性和方法
一般来说，属性中的属性名对应的属性值是类型非函数
而，方法中的属性名对应的属性值一般是函数
属性是用于描述该对象的一些特征
而方法是该对象所可以做出的一些行为
```

在这里，则举一个例子

```js
var obj = {
    // 这是属性，用于描述对象的一些特征
    "attr": "This is attr",
    // 这是方法，是对象可以做出的一些行为
    "method": function () {
        console.log(this);
    }
}
```

## 对象属性的遍历

在JavaScript,遍历对象的属性有以下方法

1. for in 

```
该方法会循环遍历对象自身和其原型链上的可枚举属性，不包括Symbol属性
```

2. Object.keys()

```
该方法返回一个属性名的数值（包括对象自身的但不含原型链上的所有可枚举属性，也不包括Symbol属性）
```

3. Object.getOwnPropertyNames()

```
该方法返回一个属性名数值（包括对象自身的所有属性，不包含Symbol属性，但是包括不可枚举属性）
```

4. Reflect.ownKeys()

```
该方法返回一个属性，包含对象自身的所有属性，不管属性名是Symbol或字符串，也不管是否可枚举
```

示例代码

```js
var obj = {
    // 普通属性
    a:"hello a",
    // Symbol实例属性
    [Symbol("b")]:"hello b"
}

// 给obj的原型对象添加一个属性c
obj.__proto__.c = "hello c"

/**
 * hello a
 * hello c
 */
for (const key in obj) {
    console.log(obj[key]);
}

console.log("-------------------");

/**
 * hello a
 */
Object.keys(obj).forEach((key)=>{
    console.log(obj[key]);
})

console.log("-------------------");

/**
 * hello a
 */
Object.getOwnPropertyNames(obj).forEach((key)=>{
    console.log(obj[key]);
})

console.log("-------------------");

/**
 * hello a
 * hello b
 */
Reflect.ownKeys(obj).forEach((key)=>{
    console.log(obj[key]);
})
```

## Object对象

在JavaScript中，有一个内置对象Object,我们所创建的所有对象的原型都指向这个内置对象

我们有以下方法去创建对象

1. 字面量对象创建（推荐）

```js
var obj = {}
```

2. 基于内置对象Object（不推荐）

```js
var obj = new Object()
```

而在这个内置对象上，有一些非常实用的方法，在我们创建和操作对象时会带来非常大的方便。我们所创建的实例对象也可以调用该内置对象上的一些方法

关于该内置对象的详细情况可以参考点击该[链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object),这里就不作过多阐述