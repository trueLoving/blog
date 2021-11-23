---
title: hoisting(变量提升)
categories:
 - 前端
tags:
 - javascript
date: 2019-07-19
---

## 基本认识
`hoisting(变量提升)`，所描述的是JavaScript代码在运行中所产生的一种现象。

用简单的话来讲就是JavaScript引擎在运行JavaScript代码时会`先处理声明变量的代码，再从第一行执行代码`

hoisting产生的原因与JavaScript引擎解析JavaScript代码的机制有关，因此只有理解JavaScript引擎解析代码的机制才能明白hoisting

## 引擎解析代码机制
引擎解析代码主要分为以下两步
1. 预处理
2. 执行代码

#### 预处理
在这个阶段，引擎会通览代码，并遇到以下关键字（主要是声明变量的关键字）时会进行一些相关处理  

**主要关键字如下**
1. let
2. const
3. class
4. var
5. function

当遇到这些关键字时，引擎会为每一个声明的变量在内存中创建一个独一无二的空间，并且会做一些相关处理。  

例如当遇到用var声明的变量时会初始化定义为`undefined`, 
  
而遇到let,const or class声明的变量时会标记该变量为`uninitialize`，且不可使用

而遇到函数定义时会先进行函数的定义

**测试代码如下**
```js
// throw an error:Cannot access 'letA' before initialization   
// console.log(letA);
let letA = 1;

// throw an error:Cannot access 'constA' before initialization  
// console.log(constA);
const constA = 1;

// throw an error:Cannot access 'classA' before initialization  
// console.log(classA);
class classA{};


// undefined
console.log(varA);
var varA = 1;

// fA()
console.log(fA);
function fA(){
    console.log("hello fA");
}
```
```
在这里提一下函数声明的三种方式
1. new Function(例如var f = new Function(...args))
2. 函数声明(例如f(){})
3. 函数表达式(例如var f = function(){})
其中，只有第二种方法声明的函数是支持hoisiting,其他声明是不支持hoisting
```

#### 执行代码
当JavaSript引擎执行完成第一步时，就开始进行第二步操作

从代码的第一行开始执行，按照代码执行流的顺序执行，遇到函数就跳入到函数执行，遇到异步代码就按照异步代码机制执行

## var hoisting vs function hoisting

简而言之，函数提升大于变量提升

什么意思，以下面的代码作为例子说明
```js

// ƒ a(){ // 2
//   console.log("hello a");
// }
console.log(a);

var a = 1; // 1

function a(){ // 2
    console.log("hello a");
}
```
在这里，我们分别使用var和function定义了一个同名的变量，而当我们打印该变量时发现打印出来的结果是function定义的变量   
 

这个就说明了一个现象function定义变量的执行比var定义变量的执行要高,即`函数提升大于变量提升`


## let&const hoisting
let/const/class声明的变量也有hoisting现象.  
只是与var/function处理的措施不同，let/const/class声明的变量只是被引擎处于标记为`uninitialize`，并没有为那些变量赋初始值。  
在变量被声明和变量被真正初始化之间的这段时间被称为`temporal dead zone(临时死区)`。如果我们尝试在这段时间去访问这些变量，我们会得到一个变量引用错误的异常报错
犹如下面例子
```js
// throw an error:Cannot access 'a' before initialization
console.log(a);
let a = 1;
```
因为变量a没有被初始化赋值，因此在我们访问该变量时会报异常错误说变量a没有被定义。
