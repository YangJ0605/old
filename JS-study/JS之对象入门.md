#second 
## 对象
* 对象（object）是 JavaScript 语言的核心概念，也是最重要的数据类型。
* 什么是对象？简单说，对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合。
>> var obj = {
>>  foo: 'Hello',
>>  bar: 'World'
>> }; 
* 对象的所有键名都是字符串（ES6 又引入了 Symbol 值也可以作为键名），所以加不加引号都可以。如果键名是数值，会被自动转为字符串。
* 如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），且也不是数字，则必须加上引号，否则会报错。
* 对象的每一个键名又称为“属性”（property），它的“键值”可以是任何数据类型。如果一个属性的值为函数，通常把这个属性称为“方法”，它可以像函数那样调用。
>> var obj = {
>>   p: function (x) {
>>     return 2 * x;
>>   }
>> };
>> 
>> obj.p(1) // 2
### 对象的引用
* 如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。
>> var o1 = {};
>> var o2 = o1;
>> 
>> o1.a = 1;
>> o2.a // 1
>> 
>> o2.b = 2;
>> o1.b // 2
>> 上面代码中，o1和o2指向同一个对象，因此为其中任何一个变量添加属性，另一个变量都可以读写该属性。

* 此时，如果取消某一个变量对于原对象的引用，不会影响到另一个变量。
>> var o1 = {};
>> var o2 = o1;
>> 
>> o1 = 1;
>> o2 // {}
>> 上面代码中，o1和o2指向同一个对象，然后o1的值变为1，这时不会对o2产生影响，o2还是指向原来的那个对象。
* 但是，这种引用只局限于对象，如果两个变量指向同一个原始类型的值。那么，变量这时都是值的拷贝。

>>var x = 1;
>>var y = x;
>>
>>x = 2;
>>y // 1
>>上面的代码中，当x的值发生变化后，y的值并不变，这就表示y和x并不是指向同一个内存地址。

### 属性
* 读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用方括号运算符。

>> var obj = {
>>   p: 'Hello World'
>> };
>> 
>> obj.p // "Hello World"
>> obj['p'] // "Hello World"
>> 上面代码分别采用点运算符和方括号运算符，读取属性p。
>> PS:请注意，如果使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理。
>>> var foo = 'bar';
>>> 
>>> var obj = {
>>>   foo: 1,
>>>   bar: 2
>>> };
>>> 
>>> obj.foo  // 1
>>> obj[foo]  // 2
>>> 上面代码中，引用对象obj的foo属性时，如果使用点运算符，foo就是字符串；如果使用方括号运算符，但是不使用引号，那么foo就是一个变量，指向字符串bar。
* 数字键可以不加引号，因为会自动转成字符串。
* 注意，数值键名不能使用点运算符（因为会被当成小数点），只能使用方括号运算符。
>> var obj = {
>>   123: 'hello world'
>> };
>> 
>> obj.123 // 报错
>> obj[123] // "hello world"
>> 上面代码的第一个表达式，对数值键名123使用点运算符，结果报错。第二个表达式使用方括号运算符，结果就是正确的。
* JavaScript 允许属性的“后绑定”，也就是说，你可以在任意时刻新增属性，没必要在定义对象的时候，就定义好属性。
* 查看一个对象本身的所有属性，可以使用Object.keys方法。
>> var obj = {
>>   key1: 1,
>>   key2: 2
>> };
>> 
>> Object.keys(obj);
>> // ['key1', 'key2']
#### 属性的删除：delete 命令
* delete命令用于删除对象的属性，删除成功后返回true。

>> var obj = { p: 1 };
>> Object.keys(obj) // ["p"]
>> 
>> delete obj.p // true
>> obj.p // undefined
>> Object.keys(obj) // []
* 注意，删除一个不存在的属性，delete不报错，而且返回true
* 另外，需要注意的是，delete命令只能删除*对象本身*的属性，无法删除继承的属性
>> var obj = {};
>> delete obj.toString // true
>> obj.toString // function toString() { [native code] }
>> 上面代码中，toString是对象obj继承的属性，虽然delete命令返回true，但该属性并没有被删除，依然存在。这个例子还说明，即使delete返回true，该属性依然可能读取到值
#### 属性是否存在：in 运算符
* in运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回true，否则返回false。它的左边是一个字符串，表示属性名，右边是一个对象。
>> var obj = { p: 1 };
>> 'p' in obj // true
>> 'toString' in obj // true
>>> in运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。就像上面代码中，对象obj本身并没有toString属性，但是in运算符会返回true，因为这个属性是继承的。
>>> 这时，可以使用对象的hasOwnProperty方法判断一下，是否为对象自身的属性。

>>> var obj = {};
>>> if ('toString' in obj) {
>>>   console.log(obj.hasOwnProperty('toString')) // false
>>> }

#### 属性的遍历：for...in 循环
* for...in循环用来遍历一个对象的全部属性。

>> var obj = {a: 1, b: 2, c: 3};
>> 
>> for (var i in obj) {
>>   console.log('键名：', i);
>>   console.log('键值：', obj[i]);
>> }
>> // 键名： a
>> // 键值： 1
>> // 键名： b
>> // 键值： 2
>> // 键名： c
>> // 键值： 3
#### with 语句
* 格式如下
>> with (对象) {
>>   语句;
>> }
* 它的作用是操作同一个对象的多个属性时，提供一些书写的方便。
>> // 例一
>> var obj = {
>>   p1: 1,
>>   p2: 2,
>> };
>> with (obj) {
>>   p1 = 4;
>>   p2 = 5;
>> }
>> // 等同于
>> obj.p1 = 4;
>> obj.p2 = 5;
>> 
>> // 例二
>> with (document.links[0]){
>>   console.log(href);
>>   console.log(title);
>>   console.log(style);
>> }
>> // 等同于
>> console.log(document.links[0].href);
>> console.log(document.links[0].title);
>> console.log(document.links[0].style);
* 注意，如果with区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量。
>> var obj = {};
>> with (obj) {
>>   p1 = 4;
>>   p2 = 5;
>> }
>> 
>> obj.p1 // undefined
>> p1 // 4