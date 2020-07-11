---
title: ES6 特性总结
categories:
 - 前端
tags:
 - javascript
date: 2020-07-11
---

:::tip

ES6语法学习总结

:::

<!-- more -->

## 关键字 let

描述：ES6定义了`let`关键字用于声明块级作用域变量

#### 特点

1. 变量不能重复声明

2. 块级作用域(全局作用域，函数作用域，eval作用域)

3. 不存在变量提升

4. 不影响作用域链

#### 案例场景

1. 点击div换色

现在页面中，有三个div，我们需要添加该功能，点击div时背景颜色变红

```html
<html>
    <head>
        <title>div点击变色</title>
        <style>
            div{
                width:100px;
                height:100px;
                margin:40px;
                float:left;
            }
        </style>
    </head>
    <body>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <script>
            var divs = document.getElementByTagNames('div');
            for(let i=0;i<divs.length;i++){
                divs[i].onClick = function(){
                    // this.style.background = 'pink';
                    div[i].style.background = 'pink'; // **
                }
            }
        </script>
    </body>
</html>
```
```
如果我们使用var来声明变量，那么其对于的点击事件函数内部就无法访问到与之对应的DOM元素。
因为事件函数的执行是异步执行的，而var声明的变量是挂载到全局对象上的，
当事件函数开始执行时，其i值为3,就无法访问到在最初注册该事件函数时与之对应的DOM对象


而let声明因为其块级作用域，可以保留当时i的状态，
因此在事件函数中定义是所使用的i保留其当时注册使用的值，也因为上述的代码可以满足我们的要求
```


2. 定时器输出
```js
for(let i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
    })
}

// 0,1,2,3,4
for(var i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
    })
}
// 5,5,5,5,5
```

```
这是一道非常常见的面试题

在解决该问题之前，我们要清楚定时器里的函数是什么时候进行的：是在我们主线程代码结束后才会执行

也因此,定时器里的函数执行是在for循环结果后才执行

那么,为什么两种结果不一样：主要是因为var&let的不同

let声明的变量在函数使用的时候也会记录它当前的值，
也因此let声明的i在函数中被使用，然后被调用输入的结果为0,1,2,3,4

var声明的变量会挂载在全局对象，
函数执行的时候是直接找到了全局对象的i,而此时i的值在循环之后就变成了5，也因此函数执行的输出结果为5,5,5,5,5
```


 
## 关键字 const

描述：ES6定义了`const`关键字用于定义常量

#### 特点

1. 一定要赋初始值

2. 一般常量使用大写(潜规则)

3. 常量的值不能修改

4. 块级作用域

5. 对于元素和对象的元素成员修改，不算做对常量的修改，不会报错

## 变量解构赋值

描述：ES6允许按照一定模式从对象和数组提取值，对变量进行赋值

#### 1. 数组的解构
```js
let array = [1,2,3,4];
const [one,two,three,four] = array;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
console.log(four); // 4
```

#### 2. 对象的解构
```js
let person = {
    name:'zhangsan',
    age:24,
    sayHello:function(){
        console.log('hello world');
    }
}

const { name,age,sayHello } = person;
console.log(name); // 'zhangsan'
console.log(age); // 24
console.log(sayHello); // Function sayHello
sayHello() // hello world
```

## 模板字符串

描述：ES6引入新的声明字符串的方式 [``]

```js
// 1. 声明
let str = `I am a string`;
console.log(typeof str); // 'string'

// 2. 内容可以直接出现换行符 
let htmlCode = `
                <body>
                    <h1>hello template string</h1>
                </body>
                `

// 3. 变量拼接
let strValue = 'string';
let str = `I am a ${strValue}`;
console.log(str); // I am a string

```

## 对象的简洁写法

描述：ES5允许在大括号里面，直接写入变量和函数，作为对象的属性和方法

```js
let name = 'zhangsan';
let age = 24;

let person = {
    name,
    age
}

console.log(person) // {name:'zhangsan',age:24}
```