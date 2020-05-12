---
title: BFC
---

## 简单认识

BFC（Block formatting contexts）块格式上下文，指的是在该元素中排版的所有子元素和后代元素都按照正常流程按照块元素和内联布局规则进行布局

参与BFC的元素使用CSS盒模型概述的规则，遵守盒模型的规则

我们可以认为BFC是css元素中一个隐藏的属性。开启BFC的元素会有以下特点

1. 其内部元素的排版规则和正常规则相同，即按照块元素和内联元素的排版规则进行排版
2. 开启BFC的元素和其子元素不会发生外边距重叠问题
3. 开启BFC的元素可以包含浮动的子元素

```txt
在这里提一下，如果我们想让同级的元素，其中一个元素已经设置浮动，而我们不想让另外一个元素受其浮动的影响，则可以在当前元素设置clear属性。clear属性的作用就是清除浮动元素对当前元素所产生的影响

其原理是设置清除浮动以后，浏览器会自动为该元素添加一个上外边距，来使得其位置不会收到浮动元素的影响
```

## 开启元素的BFC属性方法

1. 设置父元素的overflow为非visiable值
```txt
但是我们这样做会带来以下问题
1. 会带来样式影响
2. 代码语义不清楚

但是这是我们常用的方法，通常会设置overflow:hidden以此来开启元素的BFC属性。从而消除浮动给我们其他元素的布局所带来的影响
```
2. 设置父元素的display:inline-block
3. 设置父元素的**display:flow-root**
```txt
按照官方文档来说，这是来开启元素BFC属性的最好方式，因为它对其他元素的影响比较低
```
4. 设置元素的position为absolute/fixed
5. ......


更多开启元素BFC属性的方法可参考该链接：https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context

## BFC属性的作用

#### 1. 消除浮动所带来的影响

```txt
一般我们为一个元素设置浮动，那么该元素就会脱离文档流，我们可以让该元素向左或者向右移动，从而实现水平布局
但是，这样做会造成“高度塌陷”的问题，影响页面的布局
如下图所示
```

<img :src="$withBase('/CSS/CSS BFC01.PNG')" alt="mixureSecure">

```txt
父元素中的子元素溢出，从而导致父元素同级的其他元素的布局发生变化
但是，只要我们为浮动元素的父元素开启BFC,就可以使得父元素包含浮动元素
在这里，我们设置父元素的属性overflow:hidden即可达到目的
效果如下图所示
```

<img :src="$withBase('/CSS/CSS BFC02.PNG')" alt="mixureSecure">

代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>使用BFC解决浮动的高度塌陷问题</title>
    <style>
        .box1 {
            background-color: rgb(224, 206, 247);
            border: 5px solid rebeccapurple;
            /* 开启该属性的BFC */
            overflow: hidden;
        }

        .box2 {
            float: left;
            width: 200px;
            height: 150px;
            background-color: white;
            border: 1px solid black;
            padding: 10px;
        }
    </style>
</head>

<body>
    <div class="box1">
        <div class="box2">This is float context</div>
        <p>This is formal context</p>
    </div>

</body>

</html>
```

#### 2. 消除外边距折叠的问题

```txt
外边距折叠的问题是指当父元素和子元素的左上角位于同一个点，当我们设置子元素的margin-top值，会导致移动整个父元素一起移动
```
测试代码如下
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>使用BFC解决外边距折叠问题</title>
    <style>
        .box1 {
            width: 200px;
            height: 200px;
            background-color: red;
            /* 开启元素的BFC属性 */
            display: flow-root;
        }

        .box2 {
            width: 100px;
            height: 100px;
            /* 设置该值时发现它会带动起父元素一起向下移动
            正常来说，应该是该元素相对于其父元素向下移动20px
            而这种情况就是外边距重叠问题
            而为了解决这种情况，我们可以为该元素的父元素开启BFC来解决该问题 */
            margin-top: 20px;
            background-color: blue;
        }
    </style>
</head>

<body>
    <div class="box1">
        <div class="box2"></div>
    </div>

</body>

</html>
```

**在为该元素的父元素开启BFC之前**

<img :src="$withBase('/CSS/CSS BFC03.PNG')" alt="mixureSecure">

**在为该元素的父元素开启BFC之后**

<img :src="$withBase('/CSS/CSS BFC04.PNG')" alt="mixureSecure">


```txt
当然，除了为该元素的父元素开启BFC属性，我们也可以将设置子元素的margin-top改为设置父元素的padding-top.这样也是可以达到相同的作用的
```

