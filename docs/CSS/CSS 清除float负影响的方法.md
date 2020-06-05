---
title: 瀑布流布局
categories:
 - 前端
tags:
 - css
date: 2020-06-05
---


:::tip

浮动布局是常见的布局方式,通过使用float属性来实现

浮动布局可以实现文字环绕图片周围的效果,也可以使浮动的元素具有块元素的一些特点,例如设置宽高

但是浮动布局会造成高度塌陷问题(即子元素脱离文本流,无法撑开父元素的高度)

:::

<!-- more -->


由于浮动布局有优点,但是也有一些缺点,因此我们需要采用一些方法来消除浮动带来的负影响

## 1. 可以添加额外标签,让该标签使用clear属性来消除浮动影响

```html
<div class="parent">
    //添加额外标签并且添加clear属性
    <div style="clear:both"></div>
    //也可以加一个br标签
</div>
```

## 2. 通过给父元素添加overflow:hidden属性,以此来触发bfc规则属性
```html
<div class="parent" style="overflow:hidden">//auto 也可以
    //将父元素的overflow设置为hidden
    <div class="f"></div>
</div>
```

## 3. 若父元素高度固定,则可以直接暴力设置父元素高度
```html
<div class="parent" style="height:300px">
    //设置父元素的高度为固定值
    <div class="f"></div>
</div>
```

## 4. 通过使用父元素的伪类来消除浮动负影响
```html
<div class="parent" style="height:300px">
    //设置父元素的高度为固定值
    <div class="f"></div>
</div>
```

```css
.parent:after{
    /* 设置添加子元素的内容是空 */
      content: '';  
      /* 设置添加子元素为块级元素 */
      display: block;
      /* 设置添加的子元素的高度0 */
      height: 0;
      /* 设置添加子元素看不见 */
      visibility: hidden;
      /* 设置clear：both */
      clear: both;
}
```

