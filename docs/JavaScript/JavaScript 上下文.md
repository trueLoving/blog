---
title: Context
---

## 前言
如果我们想要称为一名合格的JavaScript开发者，那么我们就必须JavaScript内部执行代码的机制   

清楚执行上下文和执行栈会对我们去理解JavaScript中的其他概念(例如hoisting,scope,closures)有很大的帮助   

接下来，就是阐述JavaScript中的execution context的相关内容

## 基本认识

context，上下文，在JavaScript中，是指当前执行代码所处的一个`环境变量`，该变量存储是已经被声明和被赋值的变量和函数，当前代码读取变量就是通过context环境变量来读取内存中的变量  

而context环境变量又可以分为以下三种
1. **Global Execution Context(全局执行上下文)**
2. **Function Execution Context(函数执行上下文)**
3. **Eval Function Execution Context(eval函数执行上下文)**

当JavaScript引擎在第一行开始执行代码时就会创建Global Execution Context。在这个阶段，主要会做以下两件事情 
  
1. 创建一个全局变量(在浏览器是window对象，在Node是Global对象)
2. 会将this值指向该全局变量(非严格模式下)

当完成全局执行上下文创建时，就开始继续执行代码，当遇到函数执行时就会创建一个函数执行上下文，并且在当前上下文所声明创建的变量会存储到该上下文中  

而当执行eval函数就会创建一个eval函数执行上下文，因为eval函数的特殊性，所以会为它单独创建一个特殊的函数执行上下文


## Execution Context创建过程

context主要可以分为以下两步
1. 创建编译(主要包括当前的词法环境和变量环境的创建)
2. 执行编译(变量的初始化赋值)

#### 词法环境(Lexical Environment)
词法环境，是一种特定的类型，基于ECMAScript代码的词法嵌套结构，用于关联已经定义的变量和函数

词法环境也可以看作是一个变量，一般由以下三部分组成
1. **EnvironmentRecord**: 环境记录（用于记录当前已经声明的变量和函数，主要是记录用let/const/class声明的变量）
2. **outer**: 外部context变量的引用(就是因为这个，所以才会产生闭包)
3. **ThisBinding**: 当前this的绑定

#### 环境变量(VariableEnvironment)

变量环境，跟词法环境差不多，主要的区别就在于对环境记录的操作不同，也是由三部分组成，如下
1. **EnvironmentRecord**: 环境记录（用于记录当前已经声明的变量和函数，主要是记录用var声明的变量）
2. **outer**: 外部context变量的引用(就是因为这个，所以才会产生闭包)
3. **ThisBinding**: 当前this的绑定


## 例子说明
测试代码如下
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
#### 第一阶段
当上述代码开始执行时，全局执行上下文就会开始创建  

在创建阶段，context环境变量如下
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
然后，在执行阶段，完成相应变量的赋值初始化，context环境变量如下
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
#### 第二阶段
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
#### 第三阶段

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

#### 第四阶段

当所有代码执行完成后，GlobalExecutionContext也被销毁，代码执行结束
