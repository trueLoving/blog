---
title: Position属性
---

## 基本认识

css `position`属性用于指定一个元素在文档中的定位方式（参考谁定位，怎么进行定位）

通过定位我们可以将元素摆放到我们想要摆放的页面位置

使用方法：position:属性值

属性值的可选值：

1. static（默认值）
2. relative
3. absolute
4. fixed
5. sticky

该属性可使用于**所有元素**。且**不可被继承**

## static

static是元素position属性的默认值，即不开启定位.

## relative(相对定位)

当我们为元素的position属性设置值relative时，那么就会开启元素的相对定位

在这里，我们可以分别设置以下值来移动开启该定位的元素

1. top                        相对于参照物向**下**移动多少距离
2. bottom    g           相对于参照物向**上**移动多少距离
3. left                        相对于参照物向**右**移动多少距离
4. right                     相对于参照物向**左**移动多少距离

在这里，元素移动的参照物是元素在未开启定位的元素原来的位置

当一个元素开启了相对定位后，会具有以下特点

```txt
1. 如果我们不为元素设置topright,bottom,left,那么元素的位置是不会发生任何变化的
2. 元素移动时的参考物是元素本身
3. 开启相对定位的元素不会脱离文档流
```

#### 例子说明（代码形式）

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>position:relative</title>
    <style>
        .outer {
            width: 200px;
            height: 200px;
            background: rebeccapurple;
        }

        .inner {
            width: 100px;
            height: 100px;
            background: red;
            /* 开启该元素的position属性为relative;
            向右移动30px,向下移动20px; */
            position: relative;
            top: 20px;
            left: 30px;
        }
    </style>
</head>

<body>
    <div class="outer">
        <div class="inner"></div>
    </div>
</body>

</html>
```

## absolute(绝对定位)

当我们为元素的absolute属性设置值relative时，那么就会开启元素的绝对定位

在这里，我们可以分别设置以下值来移动开启该定位的元素

1. top                        相对于参照物向**下**移动多少距离
2. bottom    g            相对于参照物向**上**移动多少距离
3. left                        相对于参照物向**右**移动多少距离
4. right                     相对于参照物向**左**移动多少距离

然而，在这里，元素移动时的参照物不是元素本身，而是被开启定位的元素的最近的**非 static 定位**的**祖先块元素**

当一个元素开启绝对定位时，会具有以下特点

```
1. 如果我们不为元素设置topright,bottom,left,那么元素的位置是不会发生任何变化的
2. 绝对定位会改变元素的性质，行内变块，块的宽度被内容撑开
3. 开启相对定位的元素会脱离文档流
```

#### 例子说明（代码形式）

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>position:absolute</title>
    <style>
        .outer1 {
            width: 200px;
            height: 200px;
            background: rebeccapurple;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .outer2 {
            width: 100px;
            height: 100px;
            background: red;
            /* position: relative; */
        }

        .inner {
            width: 50px;
            height: 50px;
            background: green;
            /* 开启该元素的position属性为absolute
            此时该元素会相对与其最近的开启定位祖先块元素进行一定
            在这里是outer2 */
            position: absolute;
            top: 20px;
            left: 20px;
        }
    </style>
</head>

<body>
    <div class="outer1">
        <div class="outer2">
            <div class="inner"></div>
        </div>
    </div>
</body>

</html>
```

## fixed(固定定位)

当我们为元素的position属性设置值fixed时，那么就会开启元素的固定定位

在这里，我们可以分别设置以下值来移动开启该定位的元素

1. top                        相对于参照物向**下**移动多少距离
2. bottom    g             相对于参照物向**上**移动多少距离
3. left                        相对于参照物向**右**移动多少距离
4. right                     相对于参照物向**左**移动多少距离

此时，元素移动时的参考物是当前浏览器的窗口，从左上角开始

当一个元素开启绝对定位时，会具有以下特点

```txt
1. 元素的位置不会随着滚动条而移动
2. 元素脱离文档流
3. 其他特点跟开启相对定位的元素差不多
```

#### 例子说明（代码形式）

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>position:absolute</title>
    <style>
        .outer {
            width: 1200px;
            height: 1200px;
        }

        .inner {
            width: 200px;
            height: 200px;
            background: blue;
            /* 开启该元素的position属性为fixed
            此时该元素会相对与浏览器窗口进行定位
            且该元素脱离文本流 
            滚动滚动条就可以看到效果
            */
            position: fixed;
            top: 20px;
            left: 320px;
        }
    </style>
</head>

<body>
    <div class="outer">
        <div class="inner"></div>
        <p style="font-size: 34px;">This is formal text</p>
    </div>
    
</body>

</html>
```



## sticky(粘滞定位)

该属性值是新出的属性值

当我们为元素的position属性设置值sticky时，那么就会开启元素的粘滞定位

```txt
粘滞定位 = 相对定位 + 固定定位
当元素的位置还在滚动条范围内（就是没用发生滚动行为），则是以相对定位的方式移动该元素
当元素的位置不在滚动条范围内（就是开始进行滚动行为），则是以固定定位的方式移动元素
```

同样，我们可以设置以下值来确定元素的位置

1. top                        相对于参照物向**下**移动多少距离
2. bottom    g             相对于参照物向**上**移动多少距离
3. left                        相对于参照物向**右**移动多少距离
4. right                     相对于参照物向**左**移动多少距离

在不同阶段，元素移动的参照物不同

1. 在发生滚动行为之前，元素移动的参照物是元素自身
2. 在发生滚动行为之后，元素移动的参照物是当前浏览器的视口

开启粘滞定位后的元素特点基本一致，不同的是粘滞定位可以在元素到达某个位置时元素会被固定

#### 例子说明（代码形式）

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>position:absolute</title>
    <style>

        body{
            height: 2000px;
        }

        .outer {
            border:1px solid red;
            height: 500px;
        }

        .inner {
            width: 200px;
            height: 200px;
            background: blue;
            /* 开启该元素的position属性为fixed
            元素在跨越特定阈值前为相对定位，之后为固定定位
            效果滚动滚动条可见
            */
            position: sticky;
            top: 50px; 
        }
    </style>
</head>

<body>
    <div class="outer">
        <div class="inner"></div>
        <p style="font-size: 34px;">This is formal text</p>
    </div>
    
</body>

</html>
```

