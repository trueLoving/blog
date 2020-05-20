---
title: DOM的基本介绍
categories:
 - FrontEnd
tags:
 - javascript
date: 2019-11-11
---
## 前言

我们平常在web说的JavaScript其实是有三部分组成的

1. ECMAScript(JavaScript的核心模块)
2. DOM(用于操作文档节点)
3. BOM(用于操作浏览器)

而JavaScript是以ECMAScript规范作为核心模块，根据其宿主环境而创建出来的动态解释性脚本语言。

例如，在浏览器中的JavaScript语法和在Node使用的JavaScript语法有细微不同的（宿主环境不同）。而不同的浏览器之间所使用的JavaScript语法也略有差异。

因为JavaScript是由浏览器的JS引擎去解析执行的，而浏览器的JS引擎是否浏览器开发商所开发出来的。浏览器开发商根据ECMAScript,DOM,BOM规范，再根据自己所开发的浏览器开发JS引擎的。

也因此说，为什么有时候相同的JavaScript代码在不同的浏览器显示的效果不同

当然，现在市面上浏览器的JS引擎也就那么几种(因为开发JS的引擎实在是太难了，而且也有大公司开源了它们的JS引擎,，于是就用它们的JS引擎了)

|   浏览器    |                          JS引擎                          |
| :---------: | :------------------------------------------------------: |
|   chrome    | [V8](https://github.com/v8/v8)（Nodejs的JS引擎也是这个） |
|   Firefox   |                       JagerMonkey                        |
|   Safari    |                   SquirrelFish Extreme                   |
| Opera12.16+ |                         Carakan                          |



## DOM的基本介绍

​	DOM是JavaScript中一个非常重要的部分，全称为Document Object Model，该模型是争对HTML和XML文档的一个API。我们开发人员可以通过该API来操作HTML标签。

​	DOM目前经历了以下版本

1. DOM1(制定了最基本的节点操作，增删改查，主要定义了HTML 和 XML 文档的底层结构)
2. DOM2，DOM3(对DOM1进行扩展，增加了更多的交互操作和错误检测机制，方便开发人员与HTML和XML的交互)

目前基本所有的浏览器对DOM1的支持度都是十分完善的，而对DOM2和DOM3的标准的各个浏览器支持的程度不同，详细情况可以查看以下资料

网站：https://www.w3.org/2003/02/06-dom-support.html

## JavaScript  节点的基本介绍

​	我认为**节点**这个概念是DOM中是最重要的概念，只有深刻理解**节点概念**才能使用好JavaScript的DOM

​	在我们看一份HTML代码时，我们可以轻易发现这份HTML代码是由各种各样的标签组成的，而且标签中是可以嵌套标签的，并且是可以无限嵌套的。

​	我们发现一份HTML代码肯定只有一个html标签，而该HTML标签中再嵌套**一个**head标签和**一个**body标签，而head标签中又可以嵌套标签，body标签也一样。

​	现在我们规定以下规则

1. 一个标签当作一棵树的一个节点
2. 而HTML标签作为这棵树的根节点
3. 假如一个标签是被嵌套在另一个标签，则该标签则是另一个标签的子节点

这样，我们就可以将一份HTML代码转化成一个树，如下面的例子所示

```html
<!-- 告诉浏览器使用HTML5标准解析该HTML代码 -->
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Web Page</title>
</head>

<body>
    <h1>Hello World</h1>
    <div>
        <span>DOM Tests</span>
    </div>
    <h2>web page!</h2>
</body>

</html>
```

而该HTML转化的树如下图所示

<img :src="$withBase('/JavaScript/JavaScript DOM的基本介绍01.png')" alt="mixureSecure">
![JavaScript DOM的基本介绍01](../images/JavaScript DOM的基本介绍01-1582717126540.png)

而这棵树的每一个节点就对应DOM上的节点

在DOM1中定义了一个Node接口，该接口将会有DOM中的所有节点类型实现（即DOM中所有节点都继承于这个Node接口）

而节点的类型共有12种，这里对节点的每一种类型就不作具体的介绍。

常见的节点类型如下表所示

|        常量描述         |   节点类型   |                             描述                             |
| :---------------------: | :----------: | :----------------------------------------------------------: |
|    Node.ELEMENT_NODE    |   元素节点   |                        例如p和标签div标签                        |
|     Node.TEXT_NODE      |   文本节点   |               元素节点或者属性节点中实际的文字               |
|    Node.COMMENT_NODE    |   注释节点   |                         代码中的注释                         |
|   Node.DOCUMENT_NODE    |   文档节点   |                         一个HTML文件                         |
| Node.DOCUMENT_TYPE_NODE | 文档描述节点 |           用来描述HTML代码的，例如<!DOCTYPE html>            |
|   Node.ATTRIBUTE_NODE   |   属性节点   | 标签上的属性描述（在 DOM4 规范里Node 接口将不再实现这个元素属性） |



