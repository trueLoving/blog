---
title: Array常用方法的实现
---

### 1. Array.prototype.indexOf

1. 该方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1

2. 语法

```js
arr.indexOf(searchElement,[fromIndex])

// 1. searchElement：要查找的元素
// 2. fromIndex：[可选] 开始查找的位置
```

3. 实现代码

```js
Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
    // 获取当前使用该函数数组
    let _this = this;
    // 获取当前使用该函数数组的长度
    let length = _this.length;
// 如果第二个参数为负值，则从后面数fromIndex个位置开始向后查找
    // 例如-2,则从倒数第2个开始查询
    if (fromIndex < 0) {
        fromIndex += length-1;
    }
// 开始查询
    for (let i = fromIndex; i < length; i++) {
        // 若查询到要查询的元素，则返回该元素的下标
        if (_this[i] === searchElement) {
               return i;
        }
    }
// 若查询不到则返回-1
    return -1;
}
// 定义测试数组a
var a = [1,2,3,4,5];
// 打印2
a.myIndexOf(3,1);
```

### 2. Array.prototype.forEach

1. 该方法对数组的每个元素执行一次提供的函数
2. 语法
```js
arr.forEach(cb(currentValue,[index],[array]),[thisArg])

/**
 * 
 *  1. cb为数组中每个元素执行的函数。该函数接收3个参数
 *     1. currentValue：数组中正在处理的当前元素
 *     2. index：可选，数组中正在处理的当前元素的索引
 *     3. array：可选，forEach() 方法正在操作的数组
 *  2. thisArg：可选，当执行回调函数 callback 时，用作 this 的值。
 *  3. 返回值：undefined
 * /
```
4. 实现代码

```js
Array.prototype.myForEach = function (fn) {
    // 当前使用该函数的数组实例
    let _this = this;
    // 当前使用该函数的数组实例的数组长度
    let length = _this.length;
    // 如果没有为fn函数指定this值，则默认使用全局变量window对象
    let fnThis = arguments[1] || window;
    // 为数组中的每一个元素执行fn回调函数
    for (let i = 0; i < length; i++) {
       fn.call(fnThis, _this[i], i, _this);
    }
}
// 创建测试样例
var a = [1, 2, 3, 4, 5];
// 执行结果
// 1 0 (5) [1, 2, 3, 4, 5]
// 2 1 (5) [1, 2, 3, 4, 5]
// 3 2 (5) [1, 2, 3, 4, 5]
// 4 3 (5) [1, 2, 3, 4, 5]
// 5 4 (5) [1, 2, 3, 4, 5]
a.myForEach((item, index, array) => {
    console.log(item, index, array);
})
```

### 3. Array.prototype.splice

1. 该方法通过删除或者替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。**此方法会改变原数组**

2. 语法

```js
array.splice(start,[,deleteCount[,item[,item2...]]])

/**
 *   1. start：指定修改的开始位置
 *   2. deleteCount：可选 整数，表示要移除的数组元素的个数
 *   3. item1,item2...：可选 要添加到数组的元素。从start位置开始 
 * /
```
 
3. 实现代码

```js
Array.prototype.mySplice = function (start, deleteCount, addArr) {
    // 当前使用该函数的数组实例
    let _this = this;
    // 当前使用该函数的数组实例的数组长度
    let length = _this.length;
    // 如果start>=length,则表示要在原数组后面添加新的元素
    if (start >= length) {
        this.concat(addArr);
        return addArr;
    }
    // 如果start<length，则代表要删除元素
    // 如果deleteCount小于等于0，则表示不删除元素。
    if (deleteCount <= 0) {
        this.concat(addArr);
        return addArr;
    }
    let deleteArr = [];
    // 开始删除元素
    for (let i = start; i < start + deleteCount; i++) {
        deleteArr.push(_this[i]);
        _this[i] = _this[i + deleteCount];
    }
    _this.length = length - deleteCount;
    // 返回被删除的元素
    return deleteArr;
}
// 创建测试样例
var a = [1, 2, 3, 4, 5];
// 输出结果
// 数组 [2,3]
// 数组 [1,4,5]
console.log(a.mySplice(1, 2), a);
```

### 4. Array.prototype.sort

1. 该方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序时在将元素转换为字符串，然后比较他们的UTF-16代码单元值序列时构建的。**此方法会修改原数组**

2. 语法
```js
arr.sort([compareFunction])

/**
 *  1. compareFunction：可选 用来指定按某种顺序进行排列的函数
 *  2. firstEl：第一个用于比较的元素
 *  3. secondEl：第二个用于比较的元素
 * /
```
3. 实现代码
```js
Array.prototype.mySort = function (fn = (el1, el2) => el2 - el1) {
    // 当前使用该函数的数组实例
    let _this = this;
    // 当前使用该函数的数组实例的数组长度
    let length = _this.length;
    // 执行操作
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            let number = fn(_this[i], _this[j]);
            //number>0, _this[i]排列在_this[j]之前
            //number<0, _this[i]排列在_this[j]之后    
            //number=0 _this[i]和_this[j]相对位置不变  
            if (number < 0) {
                let temp = _this[i];
                _this[i] = _this[j];
                _this[j] = temp;
            }
        }
    }
    // 返回数组本身
    return _this;
}
// 创建测试用例1
var a = [3, 2, 1, 4, 5];
// 调用函数
a.mySort()
// [1,2,3,4,5]
console.log(a);
// 创建测试用例2
var b = [3, 2, 1, 4, 5];
// 调用函数
b.mySort((el1, el2) => el1 - el2);
// [5,4,3,2,1]
console.log(b);
```

### 5. Array.prototype.filter

1. 该方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素。**此方法不会修改原数组**

2. 语法

```js
var newArr = arr.filter(cb(el,index,array),[thisArg])

/**
 * 
 *  1. cb：用来测试数组的每个元素的函数。返回true则表示该元素通过测试，会将该元素添加到* 最后返回新的数组中
 *     1. el：数组中当前正在处理的元素
 *     2. index：可选 正在处理的元素在数组中的索引
 *     3. array：可选 调用了 `filter` 的数组本身
 *  2. thisArg：可选 执行 `callback` 时，用于 `this` 的值
 *  3. 返回值：一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返* 回空数组
 * 
 * /
```

3. 实现代码

```js
Array.prototype.myFilter = function (fn) {
    // 当前使用该函数的数组实例
    let _this = this;
    // 当前使用该函数的数组实例的数组长度
    let length = _this.length;
    // 如果没有为fn函数指定this值，则默认使用全局变量window对象
    let fnThis = arguments[1] || window;
    // 创建符合回调函数条件的新数组容器
    let result = [];
    // 开始操作
    for (let i = 0; i < length; i++) {
       // 调用回到函数fn
       if (fn.call(fnThis, _this[i], i, _this)) {
           // 将符合条件的元素放入到新的数组result中
           result.push(_this[i]);
       }
    }
    // 返回操作后的结果
    return result;
}
// 创建测试用例
var a = [1, 2, 3, 4, 5];
// 调用函数
var b = a.myFilter((item) => item > 3);
// 打印结果
// [4,5]
// [1,2,3,4,5]
console.log(b,a);
```

### 6. Array.prototype.map

1. 该方法创建一个新数组，其结果是该数组中的每一个元素都调用一个提供的函数后所返回的结果。**此方法不会修改原数组**

2. 语法

```js
var newArr = arr.map(cb(el,[index],[arr]),[thisArg])

/**
 * 
 * 1. cb：用来测试数组的每个元素的函数。返回true则表示该元素通过测试，会将该元素添加到* 最后返回新的数组中
 *      1. el：数组中当前正在处理的元素
 *      2. index：可选 正在处理的元素在数组中的索引
 *      3. array：可选 调用了 map的数组本身
 *   2. thisArg：可选 执行 `callback` 时，用于 `this` 的值
 *   3. 返回值：由回调函数的结果组成了的一个新数组。
 * 
 * /
```

3. 代码实现

```js
Array.prototype.myMap = function (fn) {
    // 当前使用该函数的数组实例
    let _this = this;
    // 当前使用该函数的数组实例的数组长度
    let length = _this.length;
    // 如果没有为fn函数指定this值，则默认使用全局变量window对象
    let fnThis = arguments[1] || window;
    // 创建符合回调函数条件的新数组容器
    let result = [];
    // 开始操作
    for(let i=0;i<length;i++){
        // 将fn函数执行后返回的结果放入到result数组中
        result.push(fn.call(fnThis,_this[i],i,_this));
    }
    // 返回结果
    return result;
}
// 创建测试用例
var a = [1,2,3,4,5];
// 执行函数
var b = a.map((item)=>2*item);
// 打印结果
// [1,2,3,4,5]
// [2,4,6,8,10]
console.log(a,b);
```

### 7. Array.prototype.some

1. 该方法测数组中是不是至少有1个元素通过了被提供的函数测试。该测试函数返回的是一个Boolean类型的值。**此方法不会修改原数组**

2. 语法

```js
arr.some(cb(el,[index],[array]),[thisArg])

/**
 * 
 * 1. cb：用来测试数组的每个元素的函数。返回true则表示该元素通过测试，会将该元素添加到* 最后返回新的数组中
 *     1. el：数组中当前正在处理的元素
 *     2. index：可选 正在处理的元素在数组中的索引
 *     3. array：可选 调用了 some的数组本身
 *  2. thisArg：可选 执行 `callback` 时，用于 `this` 的值
 *  3. 返回值：数组中有至少一个元素通过回调函数的测试就会返回true；所有元素都没有通过回* 调函数的测试返回值才会为false。
 * 
 * /
```

3. 代码实现

```js
Array.prototype.mySome = function (fn) {
   // 当前使用该函数的数组实例
   let _this = this;
   // 当前使用该函数的数组实例的数组长度
   let length = _this.length;
   // 如果没有为fn函数指定this值，则默认使用全局变量window对象
   let fnThis = arguments[1] || window;
   // 开始操作
   for(let i=0;i<length;i++){
       if(fn.call(fnThis,_this[i],i,_this)){
           return true;
       }
   }
   return false;
}
// 创建测试样例
var a = [1,2,3,4,5];
// true
console.log(a.mySome((item)=>item<3));
// false
console.log(a.mySome((item)=>item<0));
```

### 8. Array.prototype.every

1. 该方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。该测试函数返回一个布尔值。**此方法不会修改原数组**

2. 语法

```js
arr.every(cb(el,[index],[array]),[thisArg])

/**
 * 
 *  1. cb：用来测试数组的每个元素的函数。返回true则表示该元素通过测试，会将该元素添加到* 最后返回新的数组中
 *     1. el：数组中当前正在处理的元素
 *     2. index：可选 正在处理的元素在数组中的索引
 *     3. array：可选 调用了 some的数组本身
 *  2. thisArg：可选 执行 `callback` 时，用于 `this` 的值
 *  3. 返回值：数组中所有元素通过回调函数的测试才会返回true；否则就返回false。
 * 
 * /
```

3. 代码实现

```js
Array.prototype.myEvery = function (fn) {
   // 当前使用该函数的数组实例
   let _this = this;
   // 当前使用该函数的数组实例的数组长度
   let length = _this.length;
   // 如果没有为fn函数指定this值，则默认使用全局变量window对象
   let fnThis = arguments[1] || window;
   // 开始操作
   for(let i=0;i<length;i++){
       if(!fn.call(fnThis,_this[i],i,_this)){
           return false;
       }
   }
   return true;
}
// 创建测试样例
var a = [1,2,3,4,5];
// true
console.log(a.myEvery((item)=>item>0));
// false
console.log(a.myEvery((item)=>item>2));
```

### 9. Array.prototype.reduce

1. 该方法对数组中的每一个元素执行一个自定义的reducer函数（升序执行），将其结果汇总为单个返回值。**此方法不会修改原数组**

2. 语法

```js
arr.reduce(cb(accumulator,el,[index],[array]),[initialValue])

/**
 * 
 * 1. cb：用来测试数组的每个元素的函数。返回true则表示该元素通过测试，会将该元素添加到* 最后返回新的数组中
 *   1. accumulator：累计器累计回调的返回值 它是上一次调用回调时返回的累积值或* initialValue（见于下方）。
 *   2. el：数组中当前正在处理的元素
 *   3. index：可选 正在处理的元素在数组中的索引
 *   4. array：可选 调用了 some的数组本身
 * 2. initialValue：可选 作为第一次调用 cb函数时的第一个参数的值。 如果没有提供初始* 值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错
 *
 * 
```

3. 代码实现

```js
Array.prototype.myReduce = function (fn) {
   // 当前使用该函数的数组实例
   let _this = this;
   // 当前使用该函数的数组实例的数组长度
   let length = _this.length;
   // 如果传入initialValue值，则将该值作为fn函数的初始值
   // 否则就用数组的第一个元素作为fn函数的初始值
   let result = arguments[1] || _this[0];
   // 开始操作
   // 针对argument[1]是否存在进行不同的操作
   // todo 看看代码是否可以优化一下
   if (arguments[1]) {
       for (let i = 0; i < length; i++) {
           result = fn.call(null, result, _this[i], i, _this);
       }
   } else {
       for (let i = 1; i < length; i++) {
           result = fn.call(null, result, _this[i], i, _this);
       }
   }
   // 返回结果
   return result;
}
// 创建测试样例
var a = [1, 2, 3, 4, 5];
// 打印15
console.log(a.myReduce((result, item) => result + item));
// 打印25
console.log(a.myReduce((result, item) => result + item, 10));
``` 