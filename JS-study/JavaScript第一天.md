#JavaScript入门
* JavaScript 是一种轻量级的脚本语言。所谓“脚本语言”（script language），指的是它不具备开发操作系统的能力，而是只用来编写控制其他大型应用程序（比如浏览器）的“脚本”。

* JavaScript 也是一种嵌入式（embedded）语言。它本身提供的核心语法不算很多，只能用来做一些数学和逻辑运算。JavaScript 本身不提供任何与 I/O（输入/输出）相关的 API，都要靠宿主环境（host）提供，所以 JavaScript 只合适嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API。

> 目前，已经嵌入 JavaScript 的宿主环境有多种，最常见的环境就是浏览器，另外还有服务器环境，也就是 Node 项目。

* 从语法角度看，JavaScript 语言是一种“对象模型”语言。各种宿主环境通过这个模型，描述自己的功能和操作接口，从而通过 JavaScript 控制这些功能。但是，JavaScript 并不是纯粹的“面向对象语言”，还支持其他编程范式（比如函数式编程）。这导致几乎任何一个问题，JavaScript 都有多种解决方法。阅读本书的过程中，你会诧异于 JavaScript 语法的灵活性。

* JavaScript 的核心语法部分相当精简，只包括两个部分：基本的语法构造（比如操作符、控制结构、语句）和标准库（就是一系列具有各种功能的对象比如Array、Date、Math等）。除此之外，各种宿主环境提供额外的 API（即只能在该环境使用的接口），以便 JavaScript 调用。以浏览器为例，它提供的额外 API 可以分成三大类。

浏览器控制类：操作浏览器
DOM 类：操作网页的各种元素
Web 类：实现互联网的各种功能
如果宿主环境是服务器，则会提供各种操作系统的 API，比如文件操作 API、网络通信 API等等。这些你都可以在 Node 环境中找到。

>可以分成以下四大部分。

a.基本语法
b.标准库
c.浏览器 API
d.DOM

## JavaScript 与 Java 的关系
> 是两种不一样的语言，但是彼此存在联系。

JavaScript 的基本语法和对象体系，是模仿 Java 而设计的。但是，JavaScript 没有采用 Java 的静态类型。正是因为 JavaScript 与 Java 有很大的相似性，所以这门语言才从一开始的 LiveScript 改名为 JavaScript。基本上，JavaScript 这个名字的原意是“很像Java的脚本语言”。

JavaScript 语言的函数是一种独立的数据类型，以及采用基于原型对象（prototype）的继承链。这是它与 Java 语法最大的两点区别。JavaScript 语法要比 Java 自由得多。

另外，Java 语言需要编译，而 JavaScript 语言则是运行时由解释器直接执行。

总之，JavaScript 的原始设计目标是一种小型的、简单的动态语言，与 Java 有足够的相似性，使得使用者（尤其是 Java 程序员）可以快速上手。

#JavaScript 的基本语法
* JavaScript 程序的执行单位为行（line），也就是一行一行地执行。一般情况下，每一行就是一个语句。
* JavaScript 的变量名区分大小写，A和a是两个不同的变量。
* 如果只是声明变量而没有赋值，则该变量的值是undefined。undefined是一个特殊的值，表示“无定义”。
* 如果变量赋值的时候，忘了写var命令，这条语句也是有效的。
> var a = 1;// 基本等同
> a = 1;
* 但是，不写var的做法，不利于表达意图，而且容易不知不觉地创建全局变量，所以建议总是使用var命令声明变量。
* 如果一个变量没有声明就直接使用，JavaScript 会报错，告诉你变量未定义。
* JavaScript 是一种动态类型语言，也就是说，变量的类型没有限制，变量可以随时更改类型。
>> var a = 1;
>> a = 'hello';
* 如果使用var重新声明一个已经存在的变量，是无效的。但是，如果第二次声明的时候还进行了赋值，则会覆盖掉前面的值。

* JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升。
>> console.log(a);
>> var a = 1;
>> 上面代码首先使用console.log方法，在控制台（console）显示变量a的值。这时变量a还没有声明和赋值，所以这是一种错误的做法，但是实际上不会报错。因为存在变量提升，真正运行的是下面的代码。
>> var a;
>> console.log(a);
>> a = 1;

#数据类型
* JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript 的数据类型，共有六种。
>> 数值（number）：整数和小数（比如1和3.14）
>> 字符串（string）：文本（比如Hello World）。
>> 布尔值（boolean）：表示真伪的两个特殊值，即true（真）和false（假）
>> undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
>> null：表示空值，即此处的值为空。
>> 对象（object）：各种值组成的集合。
> 通常，数值、字符串、布尔值这三种类型，合称为原始类型（primitive type）的值，即它们是最基本的数据类型，不能再细分了。对象则称为合成类型（complex type）的值，因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器。至于undefined和null，一般将它们看成两个特殊值。
## typeof 运算符
* JavaScript 有三种方法，可以确定一个值到底是什么类型。
>> typeof运算符
>> instanceof运算符
>> Object.prototype.toString方法
* typeof运算符可以返回一个值的数据类型。
>> 数值、字符串、布尔值分别返回number、string、boolean。
>> 函数返回function。
>> undefined返回undefined。利用这一点，typeof可以用来检查一个没有声明的变量，而不报错。
    >>>// 错误的写法
if (v) {
  // ...
}
// ReferenceError: v is not defined

   >>>// 正确的写法
if (typeof v === "undefined") {
  // ...
}
>> 对象返回object。
* 空数组（[]）的类型也是object，这表示在 JavaScript 内部，数组本质上只是一种特殊的对象。PS:instanceof运算符可以区分数组和对象。
>> var o = {};
>> var a = [];
>> 
>> o instanceof Array // false
>> a instanceof Array // true
* null返回object。
>> typeof null // "object"

## null 和 undefined
* null与undefined都可以表示“没有”，含义非常相似。将一个变量赋值为undefined或null，老实说，语法效果几乎没区别。在if语句中，它们都会被自动转为false，相等运算符（==）甚至直接报告两者相等。
*null是一个表示“空”的对象，转为数值时为0*
>>> Number(null) //0 
*undefined是一个表示"此处无定义"的原始值，转为数值时为NaN。*
* undefined表示“未定义”，下面是返回undefined的典型场景。
>> 变量声明了，但没有赋值
>> 调用函数时，应该提供的参数没有提供，该参数等于 undefined
>> 对象没有赋值的属性
>> 函数没有返回值时，默认返回 undefined

## 布尔值
* 如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为false，其他值都视为true。
>> undefined
>> null
>> false
>> 0
>> NaN
>> ""或''（空字符串）
* 注意，空数组（[]）和空对象（{}）对应的布尔值，都是true。

## 数值
* NaN
>> NaN是 JavaScript 的特殊值，表示“非数字”（Not a Number），主要出现在将字符串解析成数字出错的场合。
>> ps:NaN不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于Number，使用typeof运算符可以看得很清楚。
>> typeof NaN // 'number'
* NaN不等于任何值，包括它本身。NaN在布尔运算时被当作false。NaN与任何数（包括它自己）的运算，得到的都是NaN。

### parseInt()
* parseInt方法用于将字符串转为整数。如果字符串头部有空格，空格会被自动去除。
>> parseInt('123') // 123
>> parseInt('   81') // 81
* 如果parseInt的参数不是字符串，则会先转为字符串再转换。
>> parseInt(1.23) // 1
>> // 等同于
>> parseInt('1.23') // 1
* 字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分。
>> arseInt('8a') // 8
>> parseInt('12**') // 12
>> parseInt('12.34') // 12
>> parseInt('15e2') // 15
>> pparseInt('15px') // 15
* 如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回NaN。
>> parseInt('abc') // NaN
>> parseInt('.3') // NaN
>> parseInt('') // NaN
>> parseInt('+') // NaN
>> parseInt('+1') // 1
* 所以，parseInt的返回值只有两种可能，要么是一个十进制整数，要么是NaN。
#### parseInt进制转换
* parseInt方法还可以接受第二个参数（2到36之间），表示被解析的值的进制，返回该值对应的十进制数。默认情况下，parseInt的第二个参数为10，即默认是十进制转十进制。
>> parseInt('1000') // 1000
>> // 等同于
>> parseInt('1000', 10) // 1000
* 其他进制
>> parseInt('1000', 2) // 8
>> parseInt('1000', 6) // 216
>> parseInt('1000', 8) // 512
* 如果第二个参数不是数值，会被自动转为一个整数。这个整数只有在2到36之间，才能得到有意义的结果，超出这个范围，则返回NaN。如果第二个参数是0、undefined和null，则直接忽略。
>> parseInt('10', 37) // NaN
>> parseInt('10', 1) // NaN
>> parseInt('10', 0) // 10
>> parseInt('10', null) // 10
>> parseInt('10', undefined) // 10

* 如果字符串包含对于指定进制无意义的字符，则从最高位开始，只返回可以转换的数值。如果最高位无法转换，则直接返回NaN。
>> parseInt('1546', 2) // 1
>> parseInt('546', 2) // NaN
* 这种处理方式，对于八进制的前缀0，尤其需要注意。

>> parseInt(011, 2) // NaN
>> // 等同于
>> parseInt(String(011), 2)
>> // 等同于
>> parseInt(String(9), 2)

>>> 上面代码中，第一行的011会被先转为字符串9，因为9不是二进制的有效字符，所以返回NaN。如果直接计算parseInt('011', 2)，011则是会被当作二进制处理，返回3。

### parseFloat()
* parseFloat方法用于将一个字符串转为浮点数。
>> parseFloat('3.14') // 3.14
* 如果字符串包含不能转为浮点数的字符，则不再进行往后转换，返回已经转好的部分。
>> parseFloat('3.14more non-digit characters') // 3.14
* parseFloat方法会自动过滤字符串前导的空格。
>> parseFloat('\t\v\r12.34\n ') // 12.34
* 如果参数不是字符串，或者字符串的第一个字符不能转化为浮点数，则返回NaN。
* 与number的区别
>> parseFloat(true)  // NaN
>> Number(true) // 1
>> 
>> parseFloat(null) // NaN
>> Number(null) // 0
>> 
>> parseFloat('') // NaN
>> Number('') // 0
>> 
>> parseFloat('123.45#') // 123.45
>> Number('123.45#') // NaN

### isNaN() 
* isNaN方法可以用来判断一个值是否为NaN。
>> isNaN(NaN) // true
>> isNaN(123) // false
* 但是，isNaN只对数值有效，如果传入其他值，会被先转成数值。比如，传入字符串的时候，字符串会被先转成NaN，所以最后返回true，这一点要特别引起注意。也就是说，isNaN为true的值，有可能不是NaN，而是一个字符串。
* 出于同样的原因，对于对象和数组，isNaN也返回true。
>> isNaN({}) // true
>> // 等同于
>> isNaN(Number({})) // true
>> 
>> isNaN(['xzy']) // true
>> // 等同于
>> isNaN(Number(['xzy'])) // true
* 但是，对于空数组和只有一个数值成员的数组，isNaN返回false。
>> isNaN([]) // false
>> isNaN([123]) // false
>> isNaN(['123']) // false
* 判断NaN更可靠的方法是，利用NaN为唯一不等于自身的值的这个特点，进行判断。

## 字符串
* 字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。
>> 'abc'
>> "abc"
* 如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。双引号字符串内部使用双引号，也是如此。
>> 'Did she say \'Hello\'?'
>> // "Did she say 'Hello'?"

>> "Did she say \"Hello\"?"
>> // "Did she say "Hello"?"
* 字符串默认只能写在一行内，分成多行将会报错。
* 如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠。
>> var longString = 'Long \
>> long \
>> long \
>> string';
>> 
>> longString
>> // "Long long long string"

### 转义
* 反斜杠（\）在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。
>> \0 ：null（\u0000）
>> \b ：后退键（\u0008）
>> \f ：换页符（\u000C）
>> \n ：换行符（\u000A）
>> \r ：回车键（\u000D）
>> \t ：制表符（\u0009）
>> \v ：垂直制表符（\u000B）
>> \' ：单引号（\u0027）
>> \" ：双引号（\u0022）
>> \\ ：反斜杠（\u005C）

### 字符串与数组 
* 字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从0开始）。
>> var s = 'hello';
>> s[0] // "h"
>> s[1] // "e"
>> s[4] // "o"
>> 
>> // 直接对字符串使用方括号运算符
>> 'hello'[1] // "e"
* 如果方括号中的数字超过字符串的长度，或者方括号中根本不是数字，则返回undefined。
>> 'abc'[3] // undefined
>> 'abc'[-1] // undefined
>> 'abc'['x'] // undefined
* 但是，字符串与数组的相似性仅此而已。实际上，无法改变字符串之中的单个字符。
>> var s = 'hello';
>> 
>> delete s[0];
>> s // "hello"
>> 
>> s[1] = 'a';
>> s // "hello"
>> 
>> s[5] = '!';
>> s // "hello"
>> 上面代码表示，字符串内部的单个字符无法改变和增删，这些操作会默默地失败
* length属性返回字符串的长度，该属性也是无法改变的。