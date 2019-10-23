##基础入门
1.文字的水平居中：text-align:center;
2.容器的水平居中：如
                    div#box{
                        width:100px;
                        marigin:0 auto;
                    }
3.文字的垂直居中
单行文字的垂直居中，只要将行高与容器的高度设置为相等即可。
div#box {
    height:30px;
    line-height:30px;
}
n行文字，将行高设为容器高度的n分之一。
4.容器的垂直居中：
    　<div id="big">
　　　　<div id="small">
　　　　</div>
　    </div>
首先，将大容器的定位为relative。
    div#big{
　　　　position:relative;
　　　　height:480px;
　　}
然后，将小容器定位为absolute，再将它的左上角沿y轴下移50%，最后将它margin-top上移本身高度的50%即可。
　　div#small {
　　　　position: absolute;
　　　　top: 50%;
　　　　height: 240px;
　　　　margin-top: -120px;
　　}
水平居中同理可知。
5. 图片宽度的自适应
如何使得较大的图片，能够自动适应小容器的宽度？CSS可以这样写：
　　img {max-width: 100%}
6.font属性的快捷写法
font: font-style font-variant(设置小型大写字母的字体显示文本) font-weight font-size line-height font-family; 
7.IE条件注释
　<!--[if IE]> 
　　　　<link rel="stylesheet" type="text/css" href="ie-stylesheet.css" /> 
　　< ![endif]-->
8.CSS的优先性
行内样式 > id样式 > class样式 > 标签名样式

 
