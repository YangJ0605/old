## CSS 入门

引入CSS的几种方式

1.行内样式
 通过style的属性来写CSS代码。
 每一个HTML元素，都有 style、class、id、name、title 属性。
 举例：<p style=“font-size:24px;”></p>
CSS的字体/文本属性
Font-size：文字大小
Font-weight：加粗
Font-style：斜体
Color：颜色
Line-height：行高
Text-indent：首行缩进
Text-align：水平对齐
Letter-spacing：字符间距
CSS列表
List-style-type：列表类型，取值：none、circle、 square
List-style-position：符号位置，取值：inside、outside
List-style-image：图片路径，举例：list-style-image:url(images/li01.gif);

2.外联式
通过<link>标记来引入外部的CSS文件(.css)。
格式：<link href=“CSS的URL” rel=“stylesheet” type=“text/css” />
注意：<link> 标记只能放在 <head> 中

3.内嵌式
通过<style></style>标签来书写CSS代码。
只能应用于当前网页，不能被其它网页共享。
注意：<style>标记可以放在网页的任何地方，但一般放在<head>。

4.@import URL（../)

CSS常用的可以继承的属性

1、字体系列属性
　　font-family：字体系列
　　font-weight：字体的粗细
　　font-size：字体的大小
　　font-style：字体的风格

　　2、文本系列属性
　  text-indent：文本缩进
　　text-align：文本水平对齐
　　line-height：行高
　　word-spacing：单词之间的间距
　　letter-spacing：中文或者字母之间的间距
　　text-transform：控制文本大小写（就是uppercase、lowercase、capitalize这三个）
　　color：文本颜色

　　3、元素可见性：
　　visibility：控制元素显示隐藏

　　4、列表布局属性：
　　list-style：列表风格，包括list-style-type、list-style-image等

　　5、光标属性：
　　cursor：光标显示为何种形态

一些小问题：
span与span元素直接存在空格无法去掉时，把两个span并列一排。
inherit 继承。


## CSS入门

1.关于上传markdown格式的文件乱码，解决方式为用记事本打开此文件后，另存为的时候选择UTF-8的格式。

2.给内联非替换元素设置宽高是无效的，设置margin时，左右有效，上下无效。设置padding时，左右有效，而上下padding比较奇葩，内联非替换元素的上下padding会在元素内容盒不动的情况下上下扩展(对比一下，块状元素设置margin或padding时，内容盒子会移动，内联元素设置左右margin和左右padding时，内容盒子也会移动)，设置背景色会看到效果，但是此元素下面的块状元素在计算边距时并不考虑这个上下padding，仍然以这个内联非替换元素的内容盒子的下边作为起点。
另外，如果对内联非替换元素(如span)使用了绝对定位(相对定位不可以)或者float，那么这个span元素就和块级元素一样可以设置宽高/margin/padding。

3.一个line boxes没有高度 那么是由内部最大的的inline box的 line－height 决定
line-height 默认值为nomal  chrome浏览器的为1.15

4.box-sizing属性border-box，content-box
content-box 正常盒模型是指：盒模型的大小包括content，padding，border，并且先做content.正常盒模型的大小会以内容优先自动扩展，内部子元素超过父元素给定的大小，会将父元素撑大。

border-box 怪异盒模型:先做盒。然后添加border，padding，最后做content。即保证盒模型优先，先做盒再放内容，不管内容是否放得下，一般手机上用的更多。俗的说，怪异盒模型中，父元素的盒模型确定，子元素是无法撑开父元素的盒模型，只能在盒模型剩余空间展示

5.position 
  a.position: relative;相对定位
  1> 不影响元素本身特性（无论区块元素还是内联元素会保留其原本特性）
  2> 不会使元素脱离文档流（元素原本位置会被保留，即改变位置也不会占用新位置）
  3> 没有定位偏移量时对元素无影响（相对于自身原本位置进行偏移）
  4>提升层级（用z-index样式的值可以改变一个定位元素的层级关系，从而改变元素的覆盖关系，值越大越在上面，z-index只能在position属性值为relative或absolute或fixed的元素上有效。） （两个都为定位元素，后面的会覆盖前面的定位）

  b.position: absolute;绝对定位
  1> 使元素完全脱离文档流（在文档流中不再占位）
  2> 使内联元素在设置宽高的时候支持宽高（改变内联元素的特性）3> 使区块元素在未设置宽度时由内容撑开宽度（改变区块元素的特性）
  4> 相对于最近一个有定位的父元素偏移（若其父元素没有定位则逐层上找，直到document——页面文档对象）
  5> 相对定位一般配合绝对定位使用（将父元素设置相对定位，使其相对于父元素偏移）
  6> 提升层级（同相对定位）
  
  c.position: fixed;固定定位
  fixed生成固定定位的元素，相对于浏览器窗口进行定位。
  如果一个div元素使用此定位，width默认的100%会变为auto，由内容决定。

  d.position:static：默认值

  e. position: sticky 粘性定位
   粘性定位，该定位基于用户滚动的位置。
   它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。

6.max-width 最大宽度  在布局时尽量不要设置高度。居中可以用padding来搞定。除了div默认的height和width为100%，其他为auto。

7.字体图标 icofont.cn  dl dt dd ｛floa：left width:50%｝
