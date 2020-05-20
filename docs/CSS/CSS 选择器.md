---
title: 选择器
categories:
 - FrontEnd
tags:
 - css
date: 2019-11-21
---
## 基本认识

css的选择器是css语法规则中非常重要的组成部分

我们通过css选择器来选中页面html中的元素，并在选中的元素中应用我们在选择器所定义域的样式，这样我嫩就可以改变页面中的元素的样式

```
元素的样式一般包括以下几个方面
1. 外观（比如字体的颜色，样式，大小，透明度......）
2. 位置（该元素是放在页面的哪个位置，通过布局来实现）
3. 一段时间内的行为（动画）
```

```
在我们的实际开发中，共有三种使用css来改变我们元素的样式
1. 直接在元素标签上写样式（在标签的style属性节点写样式） ---> 内联样式
<p style="color:red">hello world</p>
2. 在head标签中添加style标签，然后在style标签中修改元素的样式。通过选择器来选中元素，然后在相应的选择器写样式
3. 外部引入样式表(style.css)，link标签引入
```

选择器的语法如下

```css
选择器:{
    属性名:属性值
    ......
}
```

## 选择器的类型

在我们使用内联样式的方法来修改元素的样式时，我们是不需要选择器的。但是，为了我们代码的规范性，我们通常会将我们的dss代码单独写成一个文件，然后link标签引入到我们的html页面，这种引入就需要我们使用选择器来选取元素，并对选中的元素进行样式修改

选择器有很多种类型，由根据元素本身的属性（id,class,节点属性,状态属性）,根据元素的关系(兄弟关系，祖先和后代的关系)等来进行不同的使用。

常见的选择器如下

#### 基础选择器  

1. 标签选择器  elementname
2. 类选择器 .classname
3. ID选择器 #idname
4. 通配选择器 * 
5. 属性选择器 [attr=value]
6. 状态选择器 a:active,a:visited

#### 关系选择器

1. 邻近兄弟元素选择器 A+B
   
```
首先，当我们使用该选则器的选中的元素是B
什么样的B呢
1. B和A是属于同一个父元素的子元素
2. B紧跟着A
```
   
2. 兄弟元素选择器 A ~ B
   
```
选中的是元素B
什么样的B呢:与A属于同一个父元素的子元素，所有
```
   
3. 直接子元素选择器  A > B

```
选中的是元素B
什么样的B呢:属于A元素的直接后代
```
   
4. 后代选择器   A B
   
```
选中的是元素B
什么样的B呢:属于A元素的后代所有元素B(包括孙子)
```
   
#### 伪元素

```
就是指定元素的某些特征，例如选中元素A文本的最前面的内容
A::before{
    // 给开头添加内容 hello world
    content:"hello world"
}
```

#### 伪类

```
选中某一个元素的某一状态
就是在元素的某一状态修改样式，比如我们想鼠标移动到p标签后，p标签里的文字颜色显示成红色
我们可以这样做
p:hover{
    color:red
}
```

**简单的使用样例(代码形式)**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>选择器的使用</title>
    <!-- 在这里使用内嵌样式表 -->
    <style> 
        /* 选中类名为box的元素，并修改它的样式 */
        .box{
            border:1px solid red;
        }
        /* 伪元素的使用，在id名为s的标签前添加文本内容"before " */
        #s::before{
            content: "before ";
        }
        /* 选中与p标签同级的且跟在它后面的div标签 */
        p + div{
            background: red;
        }
        /* 选中与p标签同级的所有div标签 */
        p ~ div{
            color: palevioletred;
        }
        /* 将‘>’变为空格就可以看到效果 */
        .box > span{
            font-size: 24px;
            color: orange;
        }
        /* 伪类选中，被鼠标移动到的标签字体颜色会发生变化 */
        span:hover{
            color: aqua;
        }
    </style>
</head>

<body>
    <div class="box">
        <span id="s">hello world1</span>
        <span>hello world2
        </span>
        <p>This is a selector test</p>
        <div>
            don't forget what you want to do!  
            <div>
                study hard and hard
            </div>
            <span>hello world3</span>
        </div>
        <div>This is also a selector test</div>
    </div>
</body>

</html>
```

## 复合选择器

在我们编写样式的过程中，发现我们同一份css规则被不同的选择器使用，这种情况我们就可以将选择器同时应用于一个样式，或者一个css规则需要满足多个选择器的条件才能使用。在这种情况我们就可以使用复合选择器

复合选择器的类型如下

1. 交集选择器
   1. 选中同时复合多个条件的元素
   2. 选择器1选择器2选择器3
2. 并集选择器
   1. 同时选中多个选择器对应的元素
   2. 选择器1，选择器2，选择器3

**简单的使用样例(代码形式)**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>复合选择器</title>
    <style>
        /* 并集选择器 */
        .box1,
        .box2 {
            width: 200px;
            height: 200px;
            background: red;
            margin: 10px;
        }
        /* 先是属于.box1后代，然后又是标签p的直接后代的标签span */
        .box1 p>span{
            color: wheat;
        }
    </style>
</head>

<body>
    <div class="box1">
        <p class="p1">hello world1
            <span>hello world span</span>
        </p>  
    </div>

    <div class="box2">
        <p>hello world2</p>
    </div>
    <p>hello world3</p>
</body>

</html>
```

