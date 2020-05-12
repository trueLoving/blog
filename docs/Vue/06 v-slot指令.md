---
title: v-slot指令
---

## 前言
`v-slot`指令出现的目的是为了替换`slot`和`slot-scope`指令
该指令在vue2.6版本及以上版本才能使用
而slot和slot-scope指令在vue2中是可以使用，但是在vue3中讲会被移除

我们可以使用`v-slot`来声明传入组件slot作用域的变量


## 产生原因
1. 最开始的时候是使用`<template slot-scope>`来给slot传入数据，但是这样写代码太过冗余
2. 然后在vue2.5添加指令slot-scope来为slot传入输入，该指令可以在任何元素标签使用，他会去找其子代中的slot作用域。但是这样会无法搞清楚数据来源是来自哪里
3. 因此就出现了新的指令v-slot来解决问题

## 使用
