---
title: 闭包
categories:
 - FrontEnd
tags:
 - javascript
date: 2019-07-11
---

## 认识

闭包描述的是一种现象,说的简单一点就是<b>外部作用域无法够访问内部作用域,但是内部作用域可以访问外部作用域</b>

还有一种描述就是`函数返回值结果是函数`

即如下所示
```js
function f(){
    var num = 1;
    return function(x){
        return x + num;
    }

}
```

闭包产生的原因主要是跟`作用域链`有关

当产生一个新的作用域时,该作用域会记录当前作用域的变量,同时会跟最近的外部作用域关联,最终形成一条作用域链

JS中变量的访问就是从访问当前遍历的作用域出发,沿着作用域链向上访问,访问到就返回结果,返回不到就抛出异常


我们可以使用闭包达到以下几个目的
#### 1. 变量的私有化,即当前变量只能被当前作用域访问,保护变量

有些变量,我们不想让外部访问到,而有些变量我们想外部访问到,这样我们就可以使用闭包来实现

#### 2. 内存开销的节省。
举个例子
假设:当我们需要调用某个函数很多次,并且在函数运行过程中会创建许多的变量

如果我们按照我们正常的写法去编写函数的话,那么函数的每一次运行都会重新创建一次变量,这样就会带来没有必要的开支
但是我们可以使用闭包来避免函数内部变量的重复创建

因为闭包函数所创建的变量并不会直接被回收掉,因为闭包函数返回的是一个函数,而函数可以看作是一个作用域,它会与外部作用域相关联。

因此闭包函数内部所创建的函数并不会直接被回收掉,而是暂存在内存中。

也正是因为这样,我们可以实现函数内部变量的”暂时持久化“

## 使用

#### 变量私有化
`demo`
```js
function f(){
    var value = 1;
    return function(){
        return value;
    }
}
//  ReferenceError: value is not defined
console.log(value);
// 1
console.log(f()());
```
在这里,我们直接从外部访问value是不可以的

但是,我们可以访问函数f来获取value

函数f的返回值函数在外部作用域和函数内部作用域构建起了相互沟通的桥梁

如下图所示


<img :src="$withBase('/JavaScript/JavaScript JavaScript闭包01.jpg')" alt="mixureSecure">



#### 节省内存

当我们需要一个函数多次,而且这个函数会创建许多变量,我们就可以使用闭包来避免变量的重复创建

`demo`
```js
function f1(){
    var a = 1;
    console.log(a);
}

function f2(){
    var a = 1;
    return function(){
        console.log(a);
    }
}


console.time();
for(let i=0;i<10000;i++){
    f1();
}
console.timeEnd();


console.time();
for(let i=0;i<10000;i++){
    f2()();
}
console.timeEnd();
```
这样我们就可以避免重复创建变量而实现内存的节省
