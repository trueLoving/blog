---
title: ES6 语法总结 03
categories:
 - 前端
tags:
 - javascript
date: 2020-07-12
---

:::tip

ES6语法学习总结 03

:::

<!-- more -->


## Set

ES6提供新的数据结果Set,该数据结构的特点就是其内部不会存在重复的元素，类似于数组，成员的值都是唯一的

集合实现了iterator接口，所以可以使用扩展运算符和for...of进行遍历


#### 属性方法
1. size 返回集合的元素个数

2. add  增加啊一个元素，返回当前集合

3. delete   删除元素，返回boolean值

4. has  检测集合中是否包含某个元素，返回boolean值

5. clear 清空集合

#### 应用

1. 数组去重
```js
let test = [1,2,2,3,4,5,6,6];
let result = [...new Set(test)];
console.log(result); // [1,2,3,4,5,6]
```
2. 交集
```js
let arr1 = [1,2,2,3,4,4,5];
let arr2 = [2,2,3,3,4,4];
let result = [...new Set(arr1)].filter(item=>new Set(arr2).has(item));
console.log(result); // [2,3,4]
```
3. 并集
```js
let arr1 = [1,2,2,3,4,4,5,7,6,10];
let arr2 = [2,2,3,3,4,4];
let union = [...new Set([...arr1,...arr2])];
console.log(union); // [1,2,3,4,5,7,6,10];
```
4. 差集
```js
let arr1 = [1,2,2,3,4,4,5,7,6,10];
let arr2 = [2,2,3,3,4,4];
let diff = [...new Set(arr1)].filter(item=>!new Set(arr2).has(item));
console.log(diff); // [1,5,7,6,10];
```

## Map

ES6提供了Map数据结构。它类似于对象，也是键值对的几个。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

Map也实现了iterator接口，所以可以使用扩展运算符和for...of进行遍历

#### 属性方法

1. size 返回Map的元素个数

2. set  增加一个新的元素，返回当前的Map

3. get  返回键名对象的键值

4. has  检测Map中是否包含某个元素，返回boolean值

5. clear    清空Map,返回undefined