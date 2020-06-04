---
title: 瀑布流布局
categories:
 - 前端
tags:
 - css
date: 2020-06-04
---

:::tip

瀑布流布局学习

:::

<!-- more -->

## What

瀑布流布局是最常见的页面布局方式,视觉表现为参差不齐的多栏布局,随着页面滚动条向下滚动,这种页面还不断加载数据并附加到当前尾部

瀑布流布局要求被布置的元素等宽,然后计算元素的宽度和浏览器之比,得到需要布置的列数

了

## How

#### CSS3

我们可以使用以下3个属性来实现简单的瀑布流布局
1. column-count 描述了在多列布局页面下一行可以分几列
2. break-inside 描述了在多列布局页面下的内容盒子如何中断
3. column-gap   描述了在多列布局页面下列之间的间隔距离


具体可参考:[多栏布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Columns)


我们可以为父元素设置column-count:列数和column-gap:距离值来描述当前元素内部一行分几列以及列之间的距离

然后我们可以为父元素里面每一个盒子元素设置break-inside:avoid来避免盒子中断

```css

#parent{
    /* 一行分3列 */
    column-count:3;
    /* 列之间的距离为20px */
    column-gap:20px;
}

#son{
    break-inside:avoid
}

```

优点:代码简洁，不影响容器高度

缺点:每个item块从上往下先排第一列，然后排满第二列，第三列，当页面滚动，就出现第二列去的item块去第一列下面补齐。会出现闪屏效果

#### 2. JS(Jquery+CSS) 

实现瀑布流的核心思路

1. 找出图片高度最小的那一列,然后在那一列插入,然后继续寻找下一个高度最小的,一直循环知道插满图片为止
2. 计算出每一类距离浏览器整体的距离,也就是position里的left/right,当我们知道某一列的left的时候，相当于就知道了在它下面插入图片时，图片如何定位到这一列了，只要图片的left值和列是一样的，那么图片自然就插入到列里面

参考代码
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
    <title>瀑布流布局</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            border: none;
            break-inside: avoid;
        }

        body {
            background: #dddddd;
        }

        .wrap {
            width: auto;
            height: auto;
            position: relative;
            margin: 0 auto;
        }

        .item {
            float: left;
            width: 680px;
            height: auto;
            padding: 10px;
            margin: 10px;
            box-sizing: border-box;
        }

        .item img {
            display: block;
            width: 100%;
            border-radius: 10px;
            cursor: pointer;
        }

        .item img:hover {
            background-color: gray;
            opacity: 0.5;
        }
        
    </style>
</head>z

<body>
    
    <div id="wrap" class="wrap">
        <div class="item"> <img src="https://ae01.alicdn.com/kf/H3137199903e545088863b23a32bac75cd.jpg" alt=""> </div>
        <div class="item"> <img src="https://ae01.alicdn.com/kf/H3137199903e545088863b23a32bac75cd.jpg" alt=""> </div>
        <div class="item"> <img src="https://ae01.alicdn.com/kf/H5fca4fbc6efe4cabb9840908f54f091da.jpg" alt=""> </div>
        <div class="item"> <img src="https://ae01.alicdn.com/kf/Heca4a9627eb34f6b8099401eab7fb012Z.jpg" alt=""> </div>
        <div class="item"> <img src="https://ae01.alicdn.com/kf/Hadb437cad7a5482c96560470e28bf0ceO.jpg" alt=""> </div>
        <div class="item"> <img src="https://ae01.alicdn.com/kf/H046403451c8b4efabd9f0a794de68422a.jpg" alt=""> </div>
        <div class="item"> <img src="https://ae01.alicdn.com/kf/H046403451c8b4efabd9f0a794de68422a.jpg" alt=""> </div>
        <div class="item"> <img src="https://ae01.alicdn.com/kf/H3137199903e545088863b23a32bac75cd.jpg" alt=""> </div>
        <div class="item"> <img src="https://ae01.alicdn.com/kf/H3137199903e545088863b23a32bac75cd.jpg" alt=""> </div>
        <div class="item"> <img src="https://ae01.alicdn.com/kf/H5fca4fbc6efe4cabb9840908f54f091da.jpg" alt=""> </div>
    </div>

    <script>
        var data = [
            { src: 'https://ae01.alicdn.com/kf/H3137199903e545088863b23a32bac75cd.jpg' },
            { src: 'https://ae01.alicdn.com/kf/H3137199903e545088863b23a32bac75cd.jpg' },
            { src: 'https://ae01.alicdn.com/kf/H5fca4fbc6efe4cabb9840908f54f091da.jpg' },
            { src: 'https://ae01.alicdn.com/kf/Heca4a9627eb34f6b8099401eab7fb012Z.jpg' },
            { src: 'https://ae01.alicdn.com/kf/Hadb437cad7a5482c96560470e28bf0ceO.jpg' },
            { src: 'https://ae01.alicdn.com/kf/H046403451c8b4efabd9f0a794de68422a.jpg' },
            { src: 'https://ae01.alicdn.com/kf/H046403451c8b4efabd9f0a794de68422a.jpg' },
            { src: 'https://ae01.alicdn.com/kf/H3137199903e545088863b23a32bac75cd.jpg' },
            { src: 'https://ae01.alicdn.com/kf/H3137199903e545088863b23a32bac75cd.jpg' },
            { src: 'https://ae01.alicdn.com/kf/H5fca4fbc6efe4cabb9840908f54f091da.jpg' }
        ]


        $(function () {
            var wrap = $('#wrap');
            var boxes = wrap.children("div");
            waterfall(wrap, boxes);
            $(this).scroll(function (event) {
                appendBox(wrap, boxes)
            })
        })
        // 主要瀑布流布局函数
        function waterfall(wrap, boxes) {
            // 第一步:先获取能容纳的列数：窗口宽度/每列宽度
            // +20是外边距
            var boxswidth = boxes.eq(0).width() + 40;
            var windowwidth = $(window).width();
            var column = Math.floor(windowwidth / boxswidth);
            // 顺便计算得出容器的宽度，让盒子居中
            var wrapwidth = column * boxswidth;
            wrap.width(wrapwidth)
            // 第二步：定义一个数组存储每一列的高度
            var arr = new Array;
            // 遍历每一个盒子
            for (var i = 0; i < boxes.length; i++) {
                // 当i<column时，说明在第一行，把盒子的高度存入到数组里
                if (i < column) {
                    arr[i] = boxes.eq(i).height() + 40
                }
                // 否则就是第二行，开始按最小高度插入图片到列中
                else {
                    // 先获取最小高度列的索引
                    var minheight = Math.min.apply(null, arr)
                    var minindex = getMinIndex(minheight, arr)
                    // 这里的leftvalue，是指最小高度列距离窗口左边的距离，相当于间接定位了这一列接下来要插入图片时，position定位的left值是多少
                    var leftvalue = boxes.eq(minindex).position().left;
                    setStyle(boxes.eq(i), minheight, leftvalue, i)
                    // 到这里已经插入了一张图片在最低高度列，接下来要改变arr里的最低高度的值，让它继续下次遍历
                    arr[minindex] += boxes.eq(i).height() + 20
                }
            }
        }

        //设置追加盒子的样式  减少刷新量
        var getStartNumber = 0;
        var setStyle = function (box, top, left, index) {
            if (getStartNumber >= index) {
                return false;
            };
            box.css({
                'position': 'absolute',
                'top': top,
                'left': left,
                'opacity': '0'
            }).stop().animate({/*第二行慢慢出来的动画*/
                'opacity': '1'
            }, 1000);
            getStartNumber = index;
        };


        // 计算最小高度列的索引函数     
        function getMinIndex(minheight, arr) {
            var minindex = arr.indexOf(minheight)
            return minindex
        }

        // 判断是否在底部的函数
        function getBottom(wrap) {
            // 获取最后一列的高度和滚动的高度+窗口高度的和，如果长的一列的高度比窗口+滚动的高度要小，说明到底了需要追加
            var documentHeight = $(window).height();
            var scrollHeight = $(window).scrollTop();
            var boxes = wrap.children('div')
            var lastboxTop = boxes.eq(boxes.length - 1).offset().top;
            var lastboxHeight = boxes.eq(boxes.length - 1).height() + 20;
            var totalHeight = lastboxHeight + lastboxTop
            return documentHeight + scrollHeight >= totalHeight ? true : false;
        }

        // 追加瀑布流效果
        function appendBox(wrap, boxes) {
            // 先判断是否展示到了底部
            if (getBottom(wrap)) {
                for (i in data) {
                    var addstr = "<div class='item'> <img src='" + data[i].src + "' alt=''> </div>"
                    wrap.append(addstr)
                }
            } else {
                return false
            }
            waterfall(wrap, wrap.children('div'))
        }

    </script>

</body>

</html>

```