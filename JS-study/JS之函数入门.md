# 第三天函数
## 函数的声明
* function 命令
>> function命令声明的代码区块，就是一个函数。function命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里面。
>>> function print(s) {
>>>   console.log(s);
>>> }
>> 上面的代码命名了一个print函数，以后使用print()这种形式，就可以调用相应的代码。这叫做函数的声明
* 函数表达式
>> 除了用function命令声明函数，还可以采用变量赋值的写法。

>>> var print = function(s) {
>>>   console.log(s);
>>> };
>> 这种写法将一个匿名函数赋值给变量。这时，这个匿名函数又称函数表达式（Function Expression），因为赋值语句的等号右侧只能放表达式。
>> 采用函数表达式声明函数时，function命令后面不带有函数名。如果加上函数名，该函数名只在*函数体内部*有效，在函数体外部无效。
>>> var print = function x(){
>>>   console.log(typeof x);
>>> };
>>> 
>>> x
>>> // ReferenceError: x is not defined
>>> 
>>> print()
>>> // function
>> 上面代码在函数表达式中，加入了函数名x。这个x只在函数体内部可用，指代函数表达式本身，其他地方都不可用。这种写法的用处有两个，一是可以在函数体内部调用自身，二是方便除错（除错工具显示函数调用栈时，将显示函数名，而不再显示这里是一个匿名函数）。
* Function 构造函数
>>> var add = new Function(
>>>   'x',
>>>   'y',
>>>   'return x + y'
>>> );
>>> 
>>> // 等同于
>>> function add(x, y) {
>>>   return x + y;
>>> }
>> 上面代码中，Function构造函数接受三个参数，除了最后一个参数是add函数的“函数体”，其他参数都是add函数的参数。

>> 你可以传递任意数量的参数给Function构造函数，只有最后一个参数会被当做函数体，如果只有一个参数，该参数就是函数体。
>>> var foo = new Function(
>>>   'return "hello world";'
>>> );
>>> 
>>> // 等同于
>>> function foo() {
>>>   return 'hello world';
>>> }

## 函数的重复声明 
* 如果同一个函数被多次声明，后面的声明就会覆盖前面的声明。
>>> function f() {
>>>   console.log(1);
>>> }
>>> f() // 2
>>> 
>>> function f() {
>>>   console.log(2);
>>> }
>>> f() // 2
* 函数体内部的return语句，表示返回。JavaScript 引擎遇到return语句，就直接返回return后面的那个表达式的值，后面即使还有语句，也不会得到执行。也就是说，return语句所带的那个表达式，就是函数的返回值。return语句不是必需的，如果没有的话，该函数就不返回任何值，或者说返回undefined
* 函数可以调用自身，这就是递归（recursion）。下面就是通过递归，计算斐波那契数列的代码。

>>> function fib(num) {
>>>   if (num === 0) return 0;
>>>   if (num === 1) return 1;
>>>   return fib(num - 2) + fib(num - 1);
>>> }
>>> 
>>> fib(6) // 8

* 凡是可以使用值的地方，就能使用函数。
>>> function add(x, y) {
>>>   return x + y;
>>> }
>>> 
>>> // 将函数赋值给一个变量
>>> var operator = add;
>>> 
>>> // 将函数作为参数和返回值
>>> function a(op){
>>>   return op;
>>> }
>>> a(add)(1, 1)
>>> // 2
## 函数名的提升
* JavaScript 引擎将函数名视同变量名，所以采用function命令声明函数时，整个函数会像变量声明一样，被提升到代码头部。所以，下面的代码不会报错。

>>> f();

>>> function f() {}
>> 表面上，上面代码好像在声明之前就调用了函数f。但是实际上，由于“变量提升”，函数f被提升到了代码头部，也就是在调用之前已经声明了。但是，如果采用赋值语句定义函数，JavaScript 就会报错。

>>> f();
>>> var f = function (){};
>>> // TypeError: undefined is not a function
>> 上面的代码等同于下面的形式。

>>> var f;
>>> f();
>>> f = function () {};
>> 上面代码第二行，调用f的时候，f只是被声明了，还没有被赋值，等于undefined，所以会报错。因此，如果同时采用function命令和赋值语句声明同一个函数，最后总是采用赋值语句的定义。

>>> var f = function () {
>>>   console.log('1');
>>> }
>>> 
>>> function f() {
>>>   console.log('2');
>>> }
>>> 
>>> f() // 1

## name 属性 
* 函数的name属性返回函数的名字。

>>> function f1() {}
>>> f1.name // "f1"
>> 如果是通过变量赋值定义的函数，那么name属性返回变量名。

>>> var f2 = function () {};
>>> f2.name // "f2"
>> 但是，上面这种情况，只有在变量的值是一个匿名函数时才是如此。如果变量的值是一个具名函数，那么name属性返回function关键字之后的那个函数名。

>>> var f3 = function myName() {};
>>> f3.name // 'myName'

## length 属性
* 函数的length属性返回函数预期传入的参数个数，即函数定义之中的参数个数。(形参)
>>> function f(a, b) {}
>>> f.length // 2
>> 上面代码定义了空函数f，它的length属性就是定义时的参数个数。不管调用时输入了多少个参数，length属性始终等于2

## toString属性
* 函数的toString方法返回一个字符串，内容是函数的源码。
>>> function f() {
>>>   a();
>>>   b();
>>>   c();
>>> }
>>> 
>>> f.toString()
>>> // function f() {
>>> //  a();
>>> //  b();
>>> //  c();
>>> // }
* 对于那些原生的函数，toString()方法返回function (){[native code]}。
>>> Math.sqrt.toString()
>>> // "function sqrt() { [native code] }"
* 函数内部的注释也可以返回。

## 函数作用域
* 作用域（scope）指的是变量存在的范围。在 ES5 的规范中，JavaScript 只有两种作用域：一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。
* 对于顶层函数来说，函数外部声明的变量就是全局变量（global variable），它可以在函数内部读取。
>>> var v = 1;

>>> function f() {
>>>   console.log(v);
>>> }
>>> 
>>> f()
>>> // 1
>> 函数f内部可以读取全局变量v。
* 在函数内部定义的变量，外部无法读取，称为“局部变量”（local variable）
>>> function f(){
>>>   var v = 1;
>>> }
>>> 
>>> v // ReferenceError: v is not defined
* 函数内部定义的变量，会在该作用域内覆盖同名全局变量。
>>> var v = 1;
>>> 
>>> function f(){
>>>   var v = 2;
>>>   console.log(v);
>>> }
>>> 
>>> f() // 2
>>> v // 1
* 注意，对于var命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量。

>>> if (true) {
>>>   var x = 5;
>>> }
>>> console.log(x);  // 5
>> 上面代码中，变量x在条件判断区块之中声明，结果就是一个全局变量，可以在区块之外读取。

* 函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。
>>> var a = 1;
>>> var x = function () {
>>>   console.log(a);
>>> };
>>> 
>>> function f() {
>>>   var a = 2;
>>>   x();
>>> }
>>> 
>>> f() // 1
>> 上面代码中，函数x是在函数f的外部声明的，所以它的作用域绑定外层，内部变量a不会到函数f体内取值，所以输出1，而不是2
* 同样的，函数体内部声明的函数，作用域绑定函数体内部。

>>> function foo() {
>>>   var x = 1;
>>>   function bar() {
>>>     console.log(x);
>>>   }
>>>   return bar;
>>> }
>>> 
>>> var x = 2;
>>> var f = foo();
>>> f() // 1

*函数参数如果是原始类型的值（数值、字符串、布尔值），传递方式是传值传递*
>> var p = 2;
>> 
>> function f(p) {
>>   p = 3;
>> }
>> f(p);
>> 
>> p //
*但是，如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是传址传递（pass by reference）。也就是说，传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值。*
>> var obj = { p: 1 };
>> 
>> function f(o) {
>>   o.p = 2;
>> }
>> f(obj);
>> 
>> obj.p // 2
*注意，如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。*
>> var obj = [1, 2, 3];
>> 
>> function f(o) {
>>   o = [2, 3, 4];
>> }
>> f(obj);
>> 
>> obj // [1, 2, 3]
> 上面代码中，在函数f内部，参数对象obj被整个替换成另一个值。这时不会影响到原始值。这是因为，形式参数（o）的值实际是参数obj的地址，重新对o赋值导致o指向另一个地址，保存在原地址上的值当然不受影响。 
* 如果有同名的参数，则取最后出现的那个值
>> function f(a, a) {
>>   console.log(a);
>> }
>> 
>> f(1, 2) // 2
* 上面代码中，函数f有两个参数，且参数名都是a。取值的时候，以后面的a为准，即使后面的a没有值或被省略，也是以其为准。
>> function f(a, a) {
>>   console.log(a);
>> }
>> 
>> f(1) // undefined
> 调用函数f的时候，没有提供第二个参数，a的取值就变成了undefined。这时，如果要获得第一个a的值，可以使用arguments对象。

>> function f(a, a) {
>>   console.log(arguments[0]);
>> }
>> 
>> f(1) // 1
## arguments 对象
* 由于 JavaScript 允许函数有不定数目的参数，所以需要一种机制，可以在函数体内部读取所有参数。这就是arguments对象的由来。
* arguments对象包含了函数运行时的所有参数，arguments[0]就是第一个参数，arguments[1]就是第二个参数，以此类推。这个对象只有在函数体内部，才可以使用。
>> var f = function (one) {
>>   console.log(arguments[0]);
>>   console.log(arguments[1]);
>>   console.log(arguments[2]);
>> }
>> 
>> f(1, 2, 3)
>> // 1
>> // 2
>> // 3
* 正常模式下，arguments对象可以在运行时修改。
>> var f = function(a, b) {
>>   arguments[0] = 3;
>>   arguments[1] = 2;
>>   return a + b;
>> }
>> 
>> f(1, 1) // 5
* 严格模式下，arguments对象与函数参数不具有联动关系。也就是说，修改arguments对象不会影响到实际的函数参数。

>> var f = function(a, b) {
>>   'use strict'; // 开启严格模式
>>   arguments[0] = 3;
>>   arguments[1] = 2;
>>   return a + b;
>> }
>> 
>> f(1, 1) // 2
* 通过arguments对象的length属性，可以判断函数调用时到底带几个参数。

>> function f() {
>>   return arguments.length;
>> }
>> 
>> f(1, 2, 3) // 3
>> f(1) // 1
>> f() // 0
* arguments与数组的关系
> 需要注意的是，虽然arguments很像数组，但它是一个对象。数组专有的方法（比如slice和forEach），不能在arguments对象上直接使用。
> 如果要让arguments对象使用数组方法，真正的解决方法是将arguments转为真正的数组。下面是两种常用的转换方法：slice方法和逐一填入新数组。

>> var args = Array.prototype.slice.call(arguments);
>> 
>> // 或者
>> var args = [];
>> for (var i = 0; i < arguments.length; i++) {
>>   args.push(arguments[i]);
>> }
## 闭包
* 闭包（closure）是 JavaScript 语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。
* 需要得到函数内的局部变量。正常情况下，这是办不到的，只有通过变通方法才能实现。那就是在函数的内部，再定义一个函数。
>> function f1() {
>>   var n = 999;
>>   function f2() {
>> 　　console.log(n); // 999
>>   }
>> }
> 上面代码中，函数f2就在函数f1内部，这时f1内部的所有局部变量，对f2都是可见的。但是反过来就不行，f2内部的局部变量，对f1就是不可见的。这就是 JavaScript 语言特有的"链式作用域"结构（chain scope），子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。
> 既然f2可以读取f1的局部变量，那么只要把f2作为返回值，我们不就可以在f1外部读取它的内部变量了吗！

>> function f1() {
>>   var n = 999;
>>   function f2() {
>>     console.log(n);
>>   }
>>   return f2;
>> }
>> 
>> var result = f1();
>> result(); // 999
> 上面代码中，函数f1的返回值就是函数f2，由于f2可以读取f1的内部变量，所以就可以在外部获得f1的内部变量了。

> 闭包就是函数f2，即能够读取其他函数内部变量的函数。由于在 JavaScript 语言中，只有函数内部的子函数才能读取内部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”。闭包最大的特点，就是它可以“记住”诞生的环境，比如f2记住了它诞生的环境f1，所以从f2可以得到f1的内部变量。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

* 闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。请看下面的例子，闭包使得内部变量记住上一次调用时的运算结果。
>> function createIncrementor(start) {
>>   return function () {
>>     return start++;
>>   };
>> }
>> 
>> var inc = createIncrementor(5);
>> 
>> inc() // 5
>> inc() // 6
>> inc() // 7
> 上面代码中，start是函数createIncrementor的内部变量。通过闭包，start的状态被保留了，每一次调用都是在上一次调用的基础上进行计算。从中可以看到，闭包inc使得函数createIncrementor的内部环境，一直存在。所以，闭包可以看作是函数内部作用域的一个接口。
>> 为什么会这样呢？原因就在于inc始终在内存中，而inc的存在依赖于createIncrementor，因此也始终在内存中，不会在调用结束后，被垃圾回收机制回收。
* 闭包的另一个用处，是封装对象的私有属性和私有方法。

>> function Person(name) {
>>   var _age;
>>   function setAge(n) {
>>     _age = n;
>>   }
>>   function getAge() {
>>     return _age;
>>   }
>> 
>>   return {
>>     name: name,
>>     getAge: getAge,
>>     setAge: setAge
>>   };
>> }
>> 
>> var p1 = Person('张三');
>> p1.setAge(25);
>> p1.getAge() // 25
> 上面代码中，函数Person的内部变量_age，通过闭包getAge和setAge，变成了返回对象p1的私有变量。
* 注意，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题。

## 立即调用的函数表达式
* 在 JavaScript 中，圆括号()是一种运算符，跟在函数名之后，表示调用该函数。比如，print()就表示调用print函数。

* 有时，我们需要在定义函数之后，立即调用该函数。这时，你不能在函数的定义之后加上圆括号，这会产生语法错误。

>>(function(){ /* code */ }());
>>// 或者
>>(function(){ /* code */ })();
* 注意，上面两种写法最后的分号都是必须的。如果省略分号，遇到连着两个 IIFE，可能就会报错。
* 通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。它的目的有两个：一是不必为函数命名，避免了污染全局变量；二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。

>> // 写法一
>> var tmp = newData;
>> processData(tmp);
>> storeData(tmp);
>> 
>> // 写法二
>> (function () {
>>   var tmp = newData;
>>   processData(tmp);
>>   storeData(tmp);
>> }());
> 上面代码中，写法二比写法一更好，因为完全避免了污染全局变量。