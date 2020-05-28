---
title: 执行上下文&执行上下文栈
categories:
 - 前端
tags:
 - javascript
date: 2019-05-21
---

## 前言

如果我们想要称为一名合格的JavaScript开发者，那么我们就必须JavaScript内部执行代码的机制   

清楚执行上下文和执行栈会对我们去理解JavaScript中的其他概念(例如hoisting,scope,closures)有很大的帮助   

接下来，就是阐述JavaScript中的execution context的相关内容

## 执行上下文

执行上下文并不是真实存在的对象,只是为了能够让我们方便理解JavaScript代码运行机制而产生的虚拟对象(说白了我们无法在js代码中访问该变量)

在代码执行时,引擎会进行一些预操作,以此来提高代码的运行速度

执行上下文总共分为以下3类
1. **Global Execution Context(全局执行上下文)**
2. **Function Execution Context(函数执行上下文)**
3. **Eval Function Execution Context(eval函数执行上下文)**(因为很少用,因此可以不用管)

#### 全局执行上下文

当我们运行代码时,肯定会创建全局执行上下文,并且在代运行前会做以下工作

1. var声明的变量初始化值为undefined,并且将该属性作为全局对象的属性
2. function声明的函数func作为全局对象的方法
3. this的值为window对象

#### 函数执行上下文

当我们`调用`一个函数时,在执行函数体时.会先做以下工作

1. 形参赋值给实参,并作为函数执行上下文对象的属性
2. 类数组argument进行参数赋值,并作为函数执行上下文的属性
3. var声明的变量初始化值为undefined,并且将该属性作为函数执行上下文的属性
4. function声明的函数func作为函数执行上下文的方法
5. this的值为函数调用对象

## 创建过程

1. 创建编译(主要包括当前的词法环境和变量环境的创建)
2. 执行编译(变量的初始化赋值)


#### 词法环境(Lexical Environment)
词法环境，是一种特定的类型，基于ECMAScript代码的词法嵌套结构，用于关联已经定义的变量和函数

词法环境也可以看作是一个变量，一般由以下三部分组成
1. **EnvironmentRecord**: 环境记录（用于记录当前已经声明的变量和函数，主要是记录用let/const/class声明的变量）
2. **outer**: 外部context变量的引用(就是因为这个，所以才会产生闭包)
3. **ThisBinding**: 当前this的绑定

#### 变量环境(VariableEnvironment)

变量环境，跟词法环境差不多，主要的区别就在于对环境记录的操作不同，也是由三部分组成，如下
1. **EnvironmentRecord**: 环境记录（用于记录当前已经声明的变量和函数，主要是记录用var声明的变量）
2. **outer**: 外部context变量的引用(就是因为这个，所以才会产生闭包)
3. **ThisBinding**: 当前this的绑定

#### 例子说明
```js
// 默认代码运行环境为浏览器
let a = 20; 
const b = 30;
var c;

function multiply(e, f) {
    var g = 20;
    return e + f + g;
}

c = multiply(20, 30);
```

首先,全局执行上下文进行创建阶段的工作。在这里会做以下工作
1. 将c,multiply挂载到上下文的变量环境属性上,并进行相应初始化操作
2. 将a,b挂载在上下文的词法环境属性上,并进行相应的初始化
3. 此时context变量可以用下面来表示
```js
GlobalExecutionContext = {
    LexicalEnvironment:{
        EnvironmentRecord:{
            Type:'Object',
            a:'uninitialized',
            b:'uninitialized',
            multiply:'function'
        },
        outer:null,
        ThisBinding:window
    },
    VariableEnvironment:{
        EnvironmentRecord:{
            Type:'Object',
            c:undefined
        },
        outer:null,
        ThisBinding:window
    }
}
```
然后,开始执行代码,完成变量的初始化赋值。此时,context变量如下所示
```js
GlobalExecutionContext = {
    LexicalEnvironment:{
        EnvironmentRecord:{
            Type:'Object',
            a:20,
            b:30,
            multiply:'function'
        },
        outer:null,
        ThisBinding:window
    },
    VariableEnvironment:{
        EnvironmentRecord:{
            Type:'Object',
            c:undefined
        },
        outer:null,
        ThisBinding:window
    }
}
```
在测试代码中，我们调用了函数并执行，此时引擎会创建一个函数执行上下文  

在创建阶段，函数执行上下文变量如下
```js
FunctionExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Declarative',
            Arguments: { 0: 20, 1: 30, length: 2 }
        },
        outer: GlobalLexicalEnvironment,
        ThisBinding: window
    },
    VariableEnvironment: {
        EnvironmentRecord: {
            Type: 'Declarative',
            g: undefined
        },
        outer: GlobalLexicalEnvironment,
        ThisBinding: window
    }
}
```
然后，在执行阶段，函数执行上下文变量变成如下（完成内部变量的初始化和赋值）
```js
FunctionExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Declarative',
            Arguments: { 0: 20, 1: 30, length: 2 }
        },
        outer: GlobalLexicalEnvironment,
        ThisBinding: window
    },
    VariableEnvironment: {
        EnvironmentRecord: {
            Type: 'Declarative',
            g: 20
        },
        outer: GlobalLexicalEnvironment,
        ThisBinding: window
    }
}
```
当完成当前函数的执行时，此时这个函数相关的上下文变量会被销毁，然后返回到当前上下文所指向的outer的环境变量

在这里，当FunctionExecutionContext被销毁时，引擎会根据该变量的outer所指的环境变量返回到当前上下文  

在这里，当multiply执行完成后，就返回到GlobalExecutionContext  

此时,FunctionExecutionContext被销毁，并且c又被赋了新的值，GlobalExecutionContext变量就变成如下
```js
GlobalExectionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Object',
            a: 20,
            b: 30,
            multiply: 'function'
        },
        outer: null,
        ThisBinding: window
    },
    VariableEnvironment: {
        EnvironmentRecord: {
            Type: 'Object',
            c: 70
        },
        outer: null,
        ThisBinding: window
    }
}
```

当所有代码执行完成后，GlobalExecutionContext也被销毁，代码执行结束

## 执行上下文栈

执行上下文栈,其实是用栈(后进先出)的数据结构来管理执行上下文,并且有以下特点

1. `全局执行上下文`总是在栈的`最底部`
2. `当前执行上下文`总是在栈的`最顶部`

例子说明
```js
// 默认代码运行环境为浏览器
var bar = function(b){
    foo(b,10)
}

var foo = function(f){
    console.log()
}

bar(10)
```

在代码运行过程中,执行上下文栈如下图所示
<img :src="$withBase('/JavaScript/JavaScript 执行上下文&执行上下文栈01.jpg')" alt="mixureSecure">

当函数被调用时,会产生一个函数执行上下文。而当函数体执行完成后,该函数执行上下文就会被销毁,从内存中释放掉

当全局执行上下文从执行上下文栈中销毁掉,也就意味着js代码运行结束