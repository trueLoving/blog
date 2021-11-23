---
title: 强缓存和协商缓存
categories:
 -  笔记
tags:
 - 笔记
date: 2020-05-24
---


:::tip

数组扁平化

:::

## 前言

当数组嵌套数据时，我们需要将该数组转换为一维数组，那么方法如下

## 1. Array.prototype.flat

使用方法链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

flat()方法会按照一个可指定的深度递归遍历数组，并将所有元素于遍历到的子数组中的元素合并为一个新的数组返回


`代码`
```js
var array = [1,[2,3],4,[5,[6,7]],8];
console.log(array.flat(Infinity)); // [1,2,3,4,5,6,7,8]
// 如果无需指定深度直接参数值为‘Infinity’即可

```

## 2. 正则(replace) + 字符串分割(split)

使用方法(链接)

1. (String.prototype.replace)[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace]

2. (String.prototype.split)[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split]

`代码`
```js
var array = [1,[2,3],4,[5,[6,7]],8];
var str = JSON.stringify(array); // 将数组转换为字符串处理
str.replace(/(\[|\])/g,'').split(',') // 用正则将 '['和']'替换为,然后再基于逗号分割
```

## 3. 正则 + JSON.parse

使用方法(链接)

(JSON.parse)[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse]

`代码`
```js
var array = [1,[2,3],4,[5,[6,7]],8];
var str = JSON.stringify(array); // 将数组转换为字符串处理
str = str.replace(/(\[|\])/g,'');
str = '['+str+']';
array = JSON.parse(str);
```

## 4. 递归
`代码`
```js
function handleArray(array){
    let result = [];
    for(let i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            result.push(...handleArray(array[i]));
        }else{
            result.push(array[i]);
        }
    }
    return result;
}
```

## 5. Array.prototype.reduce

使用方法链接: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

`代码`
```js
function flat(array){
    return array.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur)?flat(cur):cur);
    },[]);
}
```


## 6. 扩展运算符 (...)

`代码`
```js
while(arr.some(Array.isArray())){
    arr = [].concat(...arr);
}
```

## 7. generator + yield

`代码`
```js
function* flat(arr){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            yield* flat(arr[i]);
        }else{
            yield arr[i];
        }
    }
}
console.log([...flat([1,[2,3],4])]);
```