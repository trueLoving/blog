---
title: 关键字this
---


## 什么是this

​	this,是指当前执行代码的环境对象。其实，搞清楚this只要搞清楚这两个概念就可以了：当前执行代码和环境对象

1. **什么是当前执行代码**

```txt
说白了当前浏览器执行到哪一行代码
```

2. **什么是环境对象**

```txt
说白了就是当前是哪一个对象在执行当前代码
这个对象是从JavaScript内部代码来讲，而不是从浏览器角度去讲（如果是从浏览器角度去讲，执行JavaScript代码的是浏览器的JavaScript引擎）
```

## this的一些特点

1. this的值只有**在运行执行**中才能确定
2. 在JavaScript中,函数的调用方式（默认调用，call/apply/bind，...）决定了this的值
3. 在执行期间,this不能被赋值

## this的使用

​	如果使用好this，其实最根本的只要知道当前执行过程中this的值是什么，那么基本我们就能使用好关键字this

#### 全局环境

​	无论是否在严格情况下，在全局执行环境中（在任何函数体外部），this都指向全局变量

```js
// 在浏览器中，输出为window对象
// 在Nodejs中，输出为{}
console.log(this)
```

#### 函数(运行时)环境

​	在函数内部，this的值取决于函数被调用的方式

#### 常见的函数调用方式

1. 简单调用

```js
'use strict'
// 函数体
function f(){
    console.log(this);
}
   
// 在浏览器中，打印window对象
// 在Nodejs中，打印global对象
// 在严格模式下，则输出undefined
// 在严格模式下，如果this没有被执行环境（即函数没有被对象调用，那this则会为undefined）
f();
```

2. 使用call或者apply函数运行时内部的this值

```js
// obj对象
var obj = {
    a:"hello obj"
}
   
// 函数f
function f(){
    console.log(this);
}
   
// 函数执行时不指定this的值
// 因为是在非严格模式下,所以打印window对象
f();
   
//函数执行时指定this的值为obj
// 打印obj对象
f.call(obj);
   
//函数执行时指定this的值为obj
// 打印obj对象
f.apply(obj);
```

注意：如果给apply或者call所传的this的值不是一个对象，则JavaScript会尝试使用内部的`ToObject`操作讲其转换为对象，即如果给call传递的参数为数字7，则7会强制转换成Number对象7

```js
var obj = 7;
   
function f(){
    // 打印[Object Number]
    // 一般对于要获取一个变量的类型，我们可以使用typeof函数来获取变量的类型
    // 但是typeof所获取的变量类型还不够具体，例如如果获取数组类型ttypeof只能获取为对象
    // 我们可以使用Object.prototype.toString.call(变量)来获取变量更具体的类型
    console.log(Object.prototype.toString.call(this));
}
   
f.call(obj);
```

3. 使用bind函数指定函数运行时内部的this值

```txt
bind函数是Function原型上的方法，调用f.bind(obj)会返回一个于f相同作用域和函数体的函数，
只是这个函数在执行过程中的this值已经绑死，无法再次修改该函数执行过程中this的值
```

**demo示例**
```js
// 对象A
var objA = {
    msg: "hello objA"
}
      
// 对象B
var objB = {
    msg: "hello objB"
}
      
// 函数fn
function fn() {
    console.log(this);
}
       
var f = fn;
      
var g = fn.bind(objA);
      
var h = g.bind(objB);
      
// 打印window对象
f();
// 打印对象A
g();
// 打印对象B
h();
      
// 打印true
console.log(f===fn);
// 打印false
console.log(g===fn);
// 打印false
console.log(h===g);
```

4. 箭头函数

```txt
1. 箭头函数中的this与该箭头函数在运行时的外部函数this的值相同

2. 在箭头函数中,this与封闭词法环境的this保持一致。在全局代码中，它将被设置为全局对象
```

**demo1**

```js
var outerObj = {
      
    // 返回outer对象
    inner: function () {
        return this
    },
      
    // 返回window对象
    // inner:()=>this
          
    this
}
      
console.log(outerObj.inner());
// 因为箭头函数会使箭头函数在执行过程中,其内部this的值与外部执行过程中this的值相同
```

**demo2**

```js
// 对象obj
var obj = {
    bar: function () {
        var x = () => this;
        return x;
    }
};
      
// fn1 = x = () => this;
var fn1 = obj.bar();
// 可以打印看看fn1是什么东西
// console.log(fn1);
// true
console.log(fn1()===obj);
      
// fn2 = function(){
//     var x = () => this;
//     return x;
// }
var fn2 = obj.bar;
// 可以打印看看fn2是什么东西
// console.log(fn2);
// true
console.log(fn2()()===window);
```

5. 函数作为对象里的方法被调用

```txt
当函数作为对象里的方法被调用时,函数执行过程中this的值为调用该函数的对象
```

```js
// 对象obj
var obj = {
   msg:"hello obj"
}
   
// 函数f
function f(){
    console.log(this);
}
   
// 将函数f作为对象obj的一个属性方法
obj.f = f;
   
// 调用obj的属性f
// 打印对象obj
obj.f();
```

`this` 的绑定只受最靠近的成员引用的影响

当函数作为构造函数被调用时，它的this被绑定到正在构造的新的对象上

当函数被用作事件处理函数时，它的`this`指向触发事件的元素（一些浏览器在使用非`addEventListener`的函数动态添加监听函数时不遵守这个约定）

当代码被内联[on-event 处理函数](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Event_handlers)调用时，它的`this`指向监听器所在的DOM元素：

## 最后

​在这里，我总结一下我对关键字this的理解：

```txt
1. 一般来说函数中的this的值只有在执行过程中才能确定下来（当然，我们也可以直接使用Function.prototype.bind方法直接将函数的this值绑死），
且this的值为当前环境中执行该函数的对象。若没有，在非严格模式下为全局对象。在严格模式下为undefined
2. 在执行函数的过程中，我们可以通过调用函数对象原型上的call方法和apply来执行函数内部this的值
3. 在DOM事件函数中，函数内的this的值是指向当前注册该事件函数的DOM
```