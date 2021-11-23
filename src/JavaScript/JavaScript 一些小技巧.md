---
title: JavaScript 小技巧-1
categories:
 - 前端
tags:
 - javascript
date: 2019-02-21
---

## 1. 数组去重

**情况描述**

```
就是去除数组中重复的元素
例如数组[1,2,2,3]经过我们的去重操作后就变成[1,2,3]
在这里，去重的标准是判断“数组成员A===数组成员B”，若为true,则去除其中一员数组成员，否则就不去重
```

**方法**

1. 使用[set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)对象去重（**推荐**，时间复杂度为O(n)）
2. 数组方法fliter([Array.prototype.filter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)，时间复杂度为O(n^2))
3. 数组方法reduce([Array.prototype.reduce](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)，时间复杂度为O(n^2))

**demo代码**

```js
// 创建测试样例
const array = [1, 2, 3, 4, 5, 1];

/**
 * 时间复杂度为O(n)
 * 就是将数组转换为集合，因为集合的成员是唯一的
 * 再用...遍历集合并赋值到数据
 */
const a1 = [...new Set(array)]

/**
 * 时间复杂度为O(n^2)
 * array.filter方法会返回一个新的数组，对原本的数组不会产生任何影响
 * 回调函数为true就会把此时遍历到的元素成员加到新的数组
 * array.indexOf(item) 返回的是该元素第一个找
 * index为当前遍历到的元素下标
 * 
 * 比如[1,2,1]
 * 第一次遍历,array.indexOf(item)-->0,index-->0,true,1-->true
 * 第二次遍历,array.indexOf(item)-->1,index-->1,true,2-->true
 * 第三次遍历,array.indexOf(item)-->0,index-->2,false,1-->false
 */
const a2 = array.filter((item, index) => array.indexOf(item) === index);

/**
 * 时间复杂度为O(n^2)
 */
const a3 = array.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);

// 输出测试结果
console.log(a1, a2, a3);
```

## 2. 对象解构

**情况描述**

```
当我们需要从一个对象中获取一个属性并且赋值到一个变量时，我们可以声明变量。但是如果我们需要从一个对象获取多个属性并赋值到变量时，我们可以使用对象解构
```

**方法**

```js
const {attr1,attr2,attr3...} = obj
```

**demo代码**

```js
// 创建测试样例
const user = {
    name: "Jack",
    age: 25
}

// 对象解构
const { name, age } = user;

// 输出测试结果
console.log(name, age);
```

## 3. 对象联合

**情况描述**

```
当我们有2个以上的对象需要合并成一个对象时,我们可以使用对象联合
```

**方法**

```js
const obj = {...obj1,...obj2,...obj3,...}
```

**demo代码**

```js
// 创建测试样例
const obj1 = { "a": 1, "b": 2 };
const obj2 = { "c": 3 };
const obj3 = { "d": 4 }

// 对象联合
const obj = {...obj1,...obj2,...obj3};

// 输出测试样例
console.log(obj);
```

## 4. 创建私有变量

**情况描述**

```
在js中，是没有私有变量的，但是我们可以闭包来实现私有变量
```

**方法**

使用闭包

```
闭包是指创建了一个封闭的作用域而使得外面的作用域无法访问作业域s1,但是s1可以访问到外部的作用域，这种情况就叫做闭包
```

**demo代码**

```js
/**
 * 测试样例
 * use IIFE to create a closure to achieve private value
 * IIFE(Immediately Invoked Function Expression)
 * IIFE（ 立即调用函数表达式）是一个在定义时就会立即执行的JavaScript 函数。
 * 更多细节查阅：https://developer.mozilla.org/en-US/docs/Glossary/IIFE
 */
const myModule = (function () {

    /**
     * 私有变量
     * 外部无法直接访问该变量
     */
    const privateValue = 'hello world';

    /**
     * 私有方法
     */
    function privateMethod() {
        console.log('This is a private method!');
    }

    /**
     * 公共方法
     */
    function publicMethod() {
        console.log("This is a public method!")
    }

    return {
        /**
         * 我们可以通过return一个对象，该对象上有方法，属性
         * 我们可以将该模块想要暴露到外面的属性和方法通过该对象暴露出去
         * 外面则通过该对象访问
         */
        publicMethod: function () {
            privateMethod();
        }
    }

})();

// undefined
console.log(myModule.privateValue)
// function
console.log(myModule.publicMethod);
```



