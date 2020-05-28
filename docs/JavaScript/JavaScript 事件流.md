---
title: 事件流
categories:
 - 前端
tags:
 - javascript
date: 2019-06-21
---
## 认识事件流

事件流，说的简单点，就是描述页面中接收事件的顺序

当我们用户在触发一个标签的事件（例如鼠标点击，鼠标移动）时，浏览器就会一些响应

比如，我们为一个按钮的点击事件绑定了一个函数，则当我们点击该按钮时浏览器就会去寻找该按钮然后执行该按钮的点击事件。

从我们点击这个按钮到最终执行该按钮的点击事件所绑定的函数，一共经历了三个阶段

1. 事件捕获阶段

```
该阶段是浏览器在寻找被触发事件的元素对象
在这个阶段，是不会触发事件函数
```

2. 处于目标阶段

```
该阶段是浏览器找到了被触发事件的元素对象
在这个阶段，是会触发事件函数
```

3. 事件冒泡阶段

```
该阶段是浏览器从被触发事件的元素对象向上冒泡，直至到达document对象
在这个阶段，一般是会触发所经过的元素的相同类型的事件函数
```

## 举个例子说明

概念太过空泛，用一个实际例子来说明以上概念

代码

```html
<!DOCTYPE html>
<html lang="en" onclick="htmlF">

<head onclick="headF">
    <title>Event</title>
    <style>
        .outer1 {
            background: red;
            width: 200px;
            height: 200px;
            position: relative;
            margin: 0 auto;
            margin-top: 10px;
        }

        .outer2 {
            background: greenYellow;
            width: 200px;
            height: 200px;
            position: relative;
            margin: 0 auto;
            margin-top: 10px;
        }

        .inner {
            background: green;
            width: 100px;
            height: 100px;
            position: absolute;
            top: 50px;
            left: 50px;
        }

        .innerInner {
            background-color: blue;
            height: 50px;
            width: 50px;
            margin: 25px;
        }
    </style>
</head>

<body onclick="bodyF()">
    <div class="outer1" onclick="outer1F()" onresize="outerFResize">
        <div class="inner" onclick="innerF()">
            <div class="innerInner" onclick="innerInnerF()">
            </div>
        </div>
    </div>
    <div class="outer2" onclick="outer2F()">
    </div>
    <script>

        function htmlF() {
            console.log("html event is triggered")
        }
        function headF() {
            console.log("head event is triggered")
        }
        function bodyF() {
            console.log("body event is triggered")
        }

        function outer1F() {
            console.log("outer1 event is triggered");
        }
        function outer2F() {
            console.log("outer2 event is triggered");
        }
        function outerFResize() {
            console.log("outer outerFResize event is triggered");
        }

        function innerF() {
            console.log("inner event is triggered");
        }
        function innerInnerF() {
            console.log("innerInnerF event is triggered");
        }

    </script>
</body>

</html>
```

效果图

<img :src="$withBase('/JavaScript/JavaScript 事件流01.PNG')" alt="mixureSecure">


DOM树结构如下图所示

<img :src="$withBase('/JavaScript/JavaScript 事件流02.png')" alt="mixureSecure">


现在，在页面中有四个div，第一个最外层是红色，其次是绿色，最后是蓝色。而第二个最外层div为黄色。并且我们分别为这四个div注册了相关的点击事件。

我们也为body,head,html标签也注册了点击事件。在这里为第一个最外层的div注册了resize事件

ok，现在一切准备工作都已完成，开始我们的实验



首先，我们点击**蓝色的div**，浏览器的执行效果如下

<img :src="$withBase('/JavaScript/JavaScript 事件流03.png')" alt="mixureSecure">

**原因分析**

```
当我们点击蓝色的div时，浏览器就开始工作了
1. 首先，浏览器要找到当前被点击的对象。从最外层的document开始寻找， 一直沿着DOM树找到了被触发事件的对象。在这过程中是不会触发事件的(此阶段属于事件捕获过程)
2. 然后，浏览器找到被触发事件的对象，执行该对象相应的事件函数。在这里，浏览器找到了被点击的对象div.innerInner,然后执行该对象的点击事件函数(此阶段属于处于目标阶段)
3. 接下来，就以这个被触发的对象为起点，沿着DOM树向上冒泡，直到body元素为止。在过程中所遇到的元素都会触发它们相同类型的事件函数

在这里，浏览器找到了div.innerInner，执行该对象的点击事件函数
然后事件冒泡，沿着DOM树向上冒泡。
在冒泡过程中，遇到了div.inner,div.outer1.,body,于是就执行它们的点击事件函数

因为在这里的事件类型为点击事件，所以不会触发div.outer1的resize事件

因此，控制台输出的最终结果如上图所示
```



再以点击**绿色的div**为例，浏览器执行效果如下

<img :src="$withBase('/JavaScript/JavaScript 事件流04.png')" alt="mixureSecure">


**原因分析**

```
当我们点击绿色的div时，浏览器就开始工作了
1. 首先，浏览器要找到当前被点击的对象。从最外层的document开始寻找， 一直沿着DOM树找到了被触发事件的对象。在这过程中是不会触发事件的(此阶段属于事件捕获过程)
2. 然后，浏览器找到被触发事件的对象，执行该对象相应的事件函数。在这里，浏览器找到了被点击的对象div.inner,然后执行该对象的点击事件函数(此阶段属于处于目标阶段)
3. 接下来，就以这个被触发的对象为起点，沿着DOM树向上冒泡，直到body元素为止。在过程中所遇到的元素都会触发它们相同类型的事件函数

在这里，浏览器找到了div.inner，执行该对象的点击事件函数
然后事件冒泡，沿着DOM树向上冒泡。
在冒泡过程中，遇到了div.outer1.,body,于是就执行它们的点击事件函数

因为在这里的事件类型为点击事件，所以不会触发div.outer1的resize事件

因此，控制台输出的最终结果如上图所示
```



再以点击**黄色的div**为例，浏览器执行效果如下

<img :src="$withBase('/JavaScript/JavaScript 事件流05.png')" alt="mixureSecure">


**原因分析**

```
当我们点击绿色的div时，浏览器就开始工作了
1. 首先，浏览器要找到当前被点击的对象。从最外层的document开始寻找， 一直沿着DOM树找到了被触发事件的对象。在这过程中是不会触发事件的(此阶段属于事件捕获过程)
2. 然后，浏览器找到被触发事件的对象，执行该对象相应的事件函数。在这里，浏览器找到了被点击的对象div.outer2,然后执行该对象的点击事件函数(此阶段属于处于目标阶段)
3. 接下来，就以这个被触发的对象为起点，沿着DOM树向上冒泡，直到body元素为止。在过程中所遇到的元素都会触发它们相同类型的事件函数

在这里，浏览器找到了div.outer2，执行该对象的点击事件函数
然后事件冒泡，沿着DOM树向上冒泡。
在冒泡过程中，遇到了body,于是就执行body的点击事件函数

因此，控制台输出的最终结果如上图所示
```



其他的例如点击**红色的div**，**最外层的body**，原理类似，这里就不作过多阐述

