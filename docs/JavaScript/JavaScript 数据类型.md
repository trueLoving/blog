---
title: 数据类型
---

## 数据判断方法

1. typeof --> 返回结果为数据类型的字符串表达
```
typeof(null) --> object
typeof(undefined) --> undefined
可以判断 undefined/数值/字符串/布尔值/function
无法判断 null/object object/array
```
2. instanceof --> 判断对象的**具体类型**
3. === / ==(会做数据类型转换再比较)

## 基本数据类型(非引用数据类型)

| 数据类型  |   数据名称   | 相对应的类 |  判断  |               其他                |
| :-------: | :----------: | :--------: | :----: | :-------------------------------: |
|  number   |     数字     |   Number   | typeof | 采用IEEE754格式来表示整数和浮点数 |
|  boolean  |     布尔     |  Boolean   | typeof |       只有两个值:true/false       |
|   null    |      空      |    Null    |   ===   |          只有一个值:null          |
| undefined |    未定义    | Undefined  |   typeof,===   |       只有一个值:undefined        |
|  string   |    字符串    |   String   |  typeof  |                                   |
|  symbol   | 独一无二的值 |   Symbol   |  typeof  |             es6新增的             |
`undefined == null --> true;undefined === null --> false`



## 引用类型

| 数据类型  | 数据名称 | 相对应的类 |  判断  | 其他 |
| :-------: | :------: | :--------: | :----: | :--: |
|  object   |   对象   |   Object   | typeof |  任意对象都是Object对象   |
| function  |   函数   |  Function  | typeof |  一种特别的对象（可以执行，其内部包含可执行代码    |
|   array   |   数组   |   Array    |     instanceof    |  属性名是数值下标，内部数据是有序的    |
