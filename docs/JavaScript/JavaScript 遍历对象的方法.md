---
title: 遍历对象的方法
---

## 概述

JavaScript的对象可以说是JavaScript的最重要的一部分,可以说没有对象就没有JavaScript.

从数据类型上来讲，除了基本的六种数据类型(Number,String,Boolean,undefined,null,Symbol)，其他的属于引用类型的都是属于对象(Function.Array,Map,Set,Proxy,Reflect,Generator,Promise...这些都是对象,都继承于对象,都可以调用对象上的方法)

因此,若想要掌握好JavaScript,那么就必须熟练掌握对象(Object)

## 对象的属性

对象是有一个个key:value组成的无序集合,key我们叫做属性名,value我们叫做属性值

按ES6标准,目前对象的属性名可以有一下两种

1. 字符串(这是我们最常用的,也是我们最早使用的)
2. Symbol(这种基本数据类型的存在就是为了能够是属性名能够具有唯一性,而使得属性名命名之间相互冲突)

然而,有时候我们在遍历对象的时候,有些属性我们不想被遍历到,而根据这个标准又可以将属性分为以下两种

1. 可枚举属性
2. 不可枚举属性

一般情况下我们可以直接给对象添加属性,这个属性是可枚举的

如果我们想要配置属性是不可枚举的,就要使用[Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)方法来为实例对象添加属性

我们可以使用属性描述符或者属性存取符来描述属性的性质

属性的性质包括如下

1. 是否可重新配置(configurable，属性描述符)
2. 属性的初始值(value，属性描述符)
3. 是否可被枚举出来(enumerable，属性描述符)
4. 属性值是否可以被修改(writable，属性描述符)
5. 读取属性值时所触发的回调函数(get，属性存取符)
6. 修改属性值时所触发的回电函数(set，属性存取符)

一般来说，我们一般采用属性描述符或者属性存取符其中的一种来描述属性性质

## 遍历对象的方法

#### 1. for...in

可以遍历到对象的属性特点：**可被枚举**，**非Symbol**的属性

该方法可以遍历到该实例对象的原型对象上新添加的属性

**demo测试**

```js
let obj = {
    a: 1,
    [Symbol('c')]: 'c'
}

Object.defineProperty(obj, 'b', {
    value: 'b',
    enumerable: false
});

Object.prototype.test = "test";

/**
 * a:1
 * 
 */
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
       // a:1 
       console.log(`${key}:${obj[key]}`);
    }
    // a:1
	// test:test
    console.log(`${key}:${obj[key]}`);
}
```

#### 2. Object.keys()/Object.values()/Object.getOwnPropertyNames()/Object.entries()

此类方法是定义与Object的原型上

keys(),values(),entries()可以遍历到对象的属性特点：**可被枚举**，**非Symbol**的属性

getOwnPropertyNames可以遍历到对象的属性特点：**可被枚举和不可被枚举的**，**非Symbol**的属性

而这些方法无法遍历到实例对象的原型对象上的方法

**demo测试**

```js
let obj = {
    a: 1,
    [Symbol('c')]: 'c'
}

Object.defineProperty(obj, 'b', {
    value: 'b',
    enumerable: false
});

Object.prototype.test = "test";


/**
 * a:1
 */
// Object.keys(obj).forEach((key) => console.log(`${key}:${obj[key]}`))
/**
 * 1
 */
// Object.values(obj).forEach((value)=>console.log(value));
/**
 * ['a',1];
 */
// Object.entries(obj).forEach((keyValue)=>console.log(keyValue));

/**
 * 
 * 可枚举的不可枚举的字符串属性
 * 
 * a,b
 * 
 */
Object.getOwnPropertyNames(obj).forEach((key) => console.log(key));
```

#### 3. Reflect.ownKeys

可以遍历到对象的属性特点：可枚举和不可枚举，String/Symbol都可以遍历到

**demo测试**

```js
let obj = {
    a: 1,
    [Symbol('c')]: 'c'
}

Object.defineProperty(obj, 'b', {
    value: 'b',
    enumerable: false
});

Object.prototype.test = "test";

/**
 * 
 * a
 * b
 * Symbol(c)
 * 
 */
Reflect.ownKeys(obj).forEach((key) => console.log(key));
```

#### 4. 上述方法比较

**测试代码**

```js
const objLoop = (function () {
    let obj = {};
    for (let i = 0; i < 10000; i++) {
        obj[i] = i;
    }
    return obj;
})();

console.time('forIn');
for (const key in objLoop) { }
console.timeEnd('forIn');


console.time('objKeys');
Object.keys(objLoop).forEach((key) => { });
console.timeEnd('objKeys');

console.time('objVal');
Object.values(objLoop).forEach((val) => { });
console.timeEnd('objVal');

console.time('objEnt');
Object.entries(objLoop).forEach((en) => { });
console.timeEnd('objEnt');

console.time('objPN');
Object.getOwnPropertyNames(objLoop).forEach((key) => { });
console.timeEnd('objPN');

console.time('refKeys');
Reflect.ownKeys((key) => { });
console.timeEnd('refKeys');
```

**各个浏览器运行的结果**

<img :src="$withBase('/JavaScript/JavaScript 遍历对象的方法01.jpg')" alt="mixureSecure">

从这个，我们可以看出不同的浏览器所运行的时间是有所不同

然而，从方法本身来看，Reflect的运行时间是最短的（所有浏览器运行结果都一样），其他方法的运时间会因为不同的浏览器而产生的效果不同

#### 总结

|                     方法名                     |                       遍历对象属性特点                       |     备注     |
| :--------------------------------------------: | :----------------------------------------------------------: | :----------: |
|                    for...in                    | **可被枚举**，**非Symbol**的属性。但是可以**遍历到原型对象上的属性** |              |
| Object.keys()/Object.values()/Object.entries() |               **可被枚举**，**非Symbol**的属性               |              |
|          Object.getOwnPropertyNames()          |         **可被枚举或者不可枚举**，**非Symbol**的属性         |              |
|                Reflect.ownKeys                 |       可枚举和不可枚举，String/Symbol属性都可以遍历到        | 运行时间最短 |

