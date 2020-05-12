---
title: 事件冒泡&事件委托
---
## 认识事件冒泡

在我看来，事件冒泡，说的简单一点就是当我们触发一个元素的事件时，会触发其父元素及祖先元素的所有相同类型的事件

我们要知道事件冒泡有以下特性

1. 事件冒泡是默认开启的，但我们可以通过js代码来控制事件冒泡

```txt
当触发我们的事件函数时，事件函数其实会接收到一个event对象，该对象上的stopPropagation()可以阻止事件冒泡。
当我们在我们的事件函数中执行event.stopPropagation()方法，那么事件冒泡到此就结束了
```

2. 并不是所有类型的事件都支持事件冒泡

```txt
不支持事件冒泡的事件类型如下：
   focus
   blur
   mouseenter
   mouseleave
   load
   unload
   resize
其他我们平常遇到的事件都支持冒泡
```

   

3. 事件冒泡只会触发相同类型的事件函数



## 举个例子

概念太过空泛，接下来用实际例子说明

代码:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>事件冒泡</title>
    <style>
        .outer1,
        .outer2 {
            width: 200px;
            height: 200px;
            margin: 20px;
            position: relative;

        }

        .outer1 {
            background: red;

        }

        .outer2 {
            background: yellowgreen;
        }

        .inner1,
        .inner2 {
            width: 100px;
            height: 100px;
            position: absolute;
            top: 25%;
            left: 25%;
        }

        .inner1 {
            background: blue;
        }

        .inner2 {
            background: pink;
        }
    </style>
</head>

<body onclick="bodyF()">

    <div class="outer1" onclick="outer1F()" onchange="outer1CF()">
        <div class="inner1" onclick="inner1F()"></div>
    </div>

    <div class="outer2" onclick="outer1F()">
        <div class="inner2" onclick="inner2F(event)"></div>
    </div>

    <script>
        function bodyF(){
            console.log("body is clicked")
        }
        function outer1CF() {
            console.log("outer1 change event has been triggered")
        }
        function outer1F() {
            console.log("outer1 is clicked")
        }
        function inner1F() {
            console.log("inner1 is clicked")
        }
        function outer2F() {
            console.log("outer2 is clicked")
        }
        function inner2F(event) {
            // 阻止事件冒泡
            event.stopPropagation();
            console.log("inner2 is clicked")
        }
    </script>

</body>

</html>
```

效果图:

<img :src="$withBase('/JavaScript/JavaScript 事件冒泡01.png')" alt="mixureSecure">

ok，现在我们开始进行我们的实验

首先，我们点击**蓝色的div**，浏览器的执行效果如下

<img :src="$withBase('/JavaScript/JavaScript 事件冒泡02.png')" alt="mixureSecure">


**原因分析**

```txt
1. 首先，当我们点击蓝色的div时，会执行蓝色div所绑定的点击事件
2. 然后，开始事件冒泡，朝着蓝色div的父元素及祖先元素冒泡，如果其父元素及祖先元素也绑定相同类型的事件，则执行

在这里，蓝色的div的父元素是红色的div,其祖先元素就只有body元素
首先，执行蓝色div的点击事件函数
然后，再执行其父元素红色div的点击事件函数
最后，执行其祖先元素body的点击事件函数

因此，浏览器的执行效果如上图所示
```



接下来，我们点击粉色的div，浏览器的执行效果如下

<img :src="$withBase('/JavaScript/JavaScript 事件冒泡03.png')" alt="mixureSecure">

**原因分析**

```txt
1. 首先，我们点击粉色的div时，会触发粉色div的点击事件函数
2. 由于粉色div的点击事件函数中有event.stopPropagation()执行，则会使得事件冒泡到此就结束了

因此，浏览器的执行效果如上图所示
```



现在，我们做以下操作

1. 讲粉色div中点击fen事件函数的event.stopPropagation()方法放到绿色的div的点击事件函数；
2. 移除粉红色div的点击事件函数的event.stopPropagation()代码语句
3. 然后我们再次点击粉色的div

浏览器的执行效果如下图所示

<img :src="$withBase('/JavaScript/JavaScript 事件冒泡04.png')" alt="mixureSecure">


**原因分析**

```txt
1. 首先，点击了粉色的div,则触发粉色div的点击事件函数
2. 因为粉色div的点击事件函数并没有阻止事件冒泡，则事件冒泡到粉色div的父元素，绿色的div
3. 然后触发绿色的div点击事件函数
4. 因为绿色的div点击事件函数有执行event.stopPropagation()，即停止事件冒泡

因此，点击粉色的div,就执行了粉色div的点击事件和绿色div的点击事件
浏览器的执行效果如上图所示
```



点击**红色div**和**绿色div**，最后会触发它们自身和其父元素和祖先元素的点击事件函数。

原理类型，这里就不作过多阐述

## 事件委托

我们根据事件冒泡原理实现一种叫做“事件委托”的机制

```txt
为什么要提出“事件委托”这种机制
原因
1. 当我们为一个元素注册事件时是需要付出内存的代价的，当我们为元素的事件过多时会影响到页面的性能
2. 代码编写的方便，如果按照我们之前原来的写法，我们需要为每一个元素一个一个注册事件，这样太麻烦了。我们如果使用“事件委托”机制就可以为一系列标签注册事件，减少我们代码的编写
```

这里，用一个例子说明“事件委托”的使用

示例代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <ul onclick="handleClick(event)">
        <li>this is li one</li>
        <li>this is li two</li>
        <li>this is li three</li>
    </ul>
    <script>
        function handleClick(event) {
            alert(event.srcElement.innerHTML);
        }
    </script>

</body>

</html>
```

现在，我想实现点击相应的li就弹出相应li的内容

如果，按照原来的做法，就需要在每一个li元素注册点击事件

然后，我们如果使用“事件委托”机制，只要在它们的共同的父元素注册点击事件，统一处理就可以了。这样做就可以大量减少代码的编写

被触发的事件函数可以接收到一个关于当前被触发事件标签的相关信息event对象，我们可以根据这个知道真实被触发事件的标签对象

在这里，我们为这3个li的公共父元素ul注册了一个点击事件，并且接收到一个参数event

```txt
event对象上的srcElement的值是指被触发事件的标签（在这里是被点击的li标签）
```

然后，我们点击li标签就会显示相应的内容，效果如下所示

点击第1个li

<img :src="$withBase('/JavaScript/JavaScript 事件冒泡05.png')" alt="mixureSecure">


点击第2个li

<img :src="$withBase('/JavaScript/JavaScript 事件冒泡06.png')" alt="mixureSecure">


点击第3个li
<img :src="$withBase('/JavaScript/JavaScript 事件冒泡07.png')" alt="mixureSecure">