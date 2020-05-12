---
title: 原型&原型链
---
## 基本认识

​	原型对象：无论什么时候，只要创建一个新的函数，就会根据一组特定的规则为该函数创建一个prototype属性，这个属性就指向函数的原型对象	

​	原型链：任何一个实例对象都有一个`__proto__`的属性，该属性是指向该实现对象的构造函数的原型对象。

​	而构造函数的原型对象也有一个`__proto__`的属性，指向它的构造函数的原型对象。这样一层一层就形成了一条原型链。而一般来说，原型链的最顶部是Object的原型对象

```js
// 创建测试构造函数 Person
function Person(name,age){
    this.name = name;
    this.age = age;
}
// 创建测试实例对象 p
var p = new Person("Jack",20);
// true
// 说明实例对象p的__proto__属性指向构造函数Person的原型对象
console.log(p.__proto__ == Person.prototype);

// 获取构造函数Person的原型对象
var pPerson = Person.prototype;
// pPerson的__proto__属性指向Object的原型对象
console.log(pPerson.__proto__ == Object.prototype);
```

## 对象的属性访问

​	我们对于对象的属性（方法）访问就是通过原型链进行访问的。

1. 当我们开始访问对象的某个属性时，首先先看被访问对象本身有没有该属性，有就访问该属性，没有就去访问该对象的原型对象
2. 然后，再看该对象的原型对象有没有该属性，有就返回该属性，没有就继续访问该对象的原型对象的原型对象。
3. 再进行步骤2的操作
4. 直至访问到原型链的顶部。如果还没有找到该属性，即就返回undefined

```js
// 创建测试构造函数 Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// 给构造函数的原型对象上添加一个属性TAG
Person.prototype.TAG = "PERSON";
// 创建一个测试实例对象p
var p = new Person("Jack",29);
// 访问实例对象上的属性name
// Jack
// 实例对象上有name的属性，就直接返回
console.log(p.name);
// 访问实例对象上的属性TAG
// PERSON
// 实例对象上没有TAG的属性，就去找其构造函数的原型对象上是否有该属性
// 有，就直接返回
console.log(p.TAG);
```

我们可以根据原型链实现同名属性值的"重写"，这个叫做**属性屏蔽**

```js
// 创建测试构造函数 Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// 给构造函数的原型对象上添加一个属性TAG
Person.prototype.TAG = "PERSON";
// 创建一个测试实例对象p
var p = new Person("Jack",29);
// 在实例对象上添加一个属性TAG，
p.TAG = "PERSON instanceof p";
// 访问实例对象上的属性name
// Jack
// 实例对象上有name的属性，就直接返回
console.log(p.name);
// 访问实例对象上的属性TAG
// PERSON instanceof p
// 在这里就返回实例对象上的TAG属性，而不返回构造函数的原型对象上的TAG属性
// 这样就实现了同名属性值重写的效果
// 因为在实例对象上找到了TAG这个属性，这样就直接返回该属性，而不会继续向原型链向上去找
console.log(p.TAG);
```

## 原型链的使用

基于原型链的原型，我们就可以实现OO编程中常见的两个概念：构造函数和继承

#### 1. 根据原型链原理实现类的构造函数

实现构造函数的方法很多，这里就说应用最广的组合使用**构造函数**和**原型模式**实现OO编程的构造函数

```js
// 创建测试构造函数 Person
function Person(name, age) {
    // 这里所初始化的每一个属性都是每一个实例对象都有的
    this.name = name;
    this.age = age;
}
// 在构造函数的原型上定义公共属性和方法
// 类似于Java中的那些static变量和方法
Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    }
}
// 创建测试实例对象p1
var p1 = new Person("zhangsan",20);
// 创建测试实例对象p2
var p2 = new Person("lisi",24);
// Person {name: "zhangsan", age: 20}
console.log(p1);
// Person {name: "lisi", age: 24}
console.log(p2);
// zhangsan
p1.sayName();
// lisi
p2.sayName();
// true
// 这个结果说明p1的sayName方法和p2.sayName方法都指向同一个方法
console.log(p1.sayName === p2.sayName);
```

#### 2. 根据原型链原理实现类的继承

实现继承的方法很多，这里讲一种实现继承的方法：**组合继承**

```js
// 创建父类的构造函数 Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// 添加公共方法和公共变量
Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    }
};

// 创建子类的构造函数 Boy
function Boy(name, age, wife) {
    Person.call(this, name, age);
    this.wife = wife;
}
// 首先将Boy构造函数的原型对象指向Person函数的原型对象，
// 用于获取Person函数上的方法
Boy.prototype = Person.prototype;
// 再将constructor属性指向自己
Boy.prototype.constructor = Boy;
// 再添加自己原型对象的方法
Boy.prototype.sayWife = function () {
    console.log(this.wife);
}
// 创建测试对象 b
var b = new Boy("Jack", 29, "Alice");
// 输出对象b
// Boy {name: "Jack", age: 29, wife: "Alice"}
console.log(b);
// 调用父类方法，Jack
b.sayName();
// 调用自己类的方法，Alice
b.sayWife();
```

