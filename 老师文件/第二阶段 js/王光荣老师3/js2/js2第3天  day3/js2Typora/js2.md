# 1.事件

## 1.1、事件三要素

​	(1)事件源(this获取), 任何元素对象都可以当作事件源

​	(2)事件：

​	(3)事件处理函数

## 1.2、加入事件

(1)<div onclick="处理函数">

(2)事件源对象.onclick=事件处理函数

​		事件源的获取，就是事件处理函中的this

​		

```js
let mydiv = document.getElementById("mydiv");
mydiv.onclick = function() {
    //this就是事件源对象
    console.log(this);//其中被打印的this就是mydiv
}
```

(3)事件源对象.addEventListener(事件，处理函数，是否捕获方式(可省boolean))

```js
let mydiv = document.getElementById("mydiv");
mydiv.addEventListener("click", function(){
	//this是就事件源mydiv
	this.innerHTML = "我被点了";
});

mydiv.addEventListener("click", function(){
	//this是就事件源mydiv
	this.innerHTML = "我被点了";
}, false);
```

第3个参数可省, 值是true或false, 当省掉，默认认为是false

当第3个参数为false时，则是冒泡传递

当第3个参数为true时，则是捕获传递

## 1.3、事件传递：

> 4.1、冒泡传递

（1）被点击的目标元素最先发生事件，然后事件转递给目标元素的父元素，一直传递后顶层根元素才结束

（2）只有使用addEventListener(事件，处理函数，true/false)

（3）只有把第3个参数设置为true才是捕获，否则都冒泡

> 4.2、捕获传递

点击目标元素之后，最先发生事件的是目标元素的顶层元素，然后再传递给子元素，直到传给目标元素才结束

> 4.3 阻止事件传递

(1).event.stopPropagation()阻止事件继续传递

(2).event.stopImmediatePropagation()阻止事件继承传递，并且阻止当前事件源的其它处理函数的执行

> 4.4事件三阶段的概念

> 1.捕获
>
> 2.冒泡
>
> 3.目标

## 1.4、获取事件信息

## 1.5、事件

![img](img\wps1.jpg) 

![img](img\wps2.jpg) 

window.onload=functioin(){}

window.onscroll=function(){}

> 练习：同时按A键和S键，打印"OK"
>
> 小练习：放大镜

窗体操作类(window上的事件)

1、scroll、load

​	a) scroll：网易严选 fixed定位

​	b) load：等待网页资源下载完毕再执行

解除事件

# 2.innerHTML和innerText

# 3.DOM结构树

 	![img](img\aa.png) 

# 4.获取节点的常用方式

> **DOM结构树上定义的属性和方法：**
>
> a) getElementById方法定义在Document.prototype上
>
> b) getElementsByName方法定义在HTMLDocument.prototype上
>
> d) HTMLDocument.prototype定义了一些常用的属性body、head
>
> e) Document.prototype上定义了documentElement属性，指代文档的根元素；在HTML文档中，它总是指代<html>元素对象。
>
> f) getElementsByClassName、querySelectorAll、querySelector定义在Document.prototype和Element.prototype上。
>
> 注：得到document对象，实计上document是HTMLDocument类的对象

```js
console.log(document instanceof HTMLDocument)//true
```

1.得到head元素节点. document.head、得到body元素节点. document.body

```html
<html>
    <head>
        <title>你</title>
    </head>
    <body>
        <script>
             var head = document.head;
             head.innerHTML="<title>xxxx</title>"
        </script>
        <div id="mydiv"></div><h1>ss</h1>
        <h1>kujggjgjh</h1>
    </body>
</html>
```

```html
<html>
    <head>
        <title>你</title>
    </head>
    <body style="color: yellow; background-color: blue;">
        <script>
             var body = document.body;
             body.style.color="red";
             body.style.backgroundColor="green";
        </script>
        <div id="mydiv"></div><h1>ss</h1>
         <h1>kujggjgjh</h1>
    </body>
</html>
```

2.得到html文档节点 document.documentElement

html节点是HTMLHtmlElement类的对象

```js

			let html = document.documentElement;
			console.log(html instanceof Node);//true
			console.log(html instanceof Element);//true
			console.log(html instanceof HTMLElement);//true
			console.log(html instanceof HTMLHtmlElement);//true
```

> 总结
>
> 继承结构 Node-->Document--->HTMLDocument 
>
> HTMLDocument.prototype.head
>
> HTMLDocument.prototype.body
>
> Document.prototype.documentElement  这是HTML元素对象
>
> 所以HTMLDocument类的对象document可以访问head,body,documentElement
>
> 

3.document.getElementById(id);得到元素节点

4.getElementsByClassName(className); 

getElementsByClassName方法同时定义在Documnet和Element类中

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>getElementsByClassName</title>
		<script type="text/javascript">
			//getElementsByClassName方法同时定义在Documnet和Element类中
			window.onload = function() {
				//得到当前文档中所有class值为myspan的元素组成的数组
				//这里得到span1, span2,span3,span4,span5,span6;
				let spanArray = document.getElementsByClassName("myspan");
				for(let i = 0; i<spanArray.length; i++) {
					console.log(spanArray[i].innerHTML)
				}
				
				console.log("======================");
				let mydiv1 = document.getElementById("mydiv1");
				//得到mydiv1中所有class值为myspan的元素组成的数组
				//这是得到span4, span5,span6
				let spanArray2 = mydiv1.getElementsByClassName("myspan");
				for(let i = 0; i<spanArray2.length; i++) {
					console.log(spanArray2[i].innerHTML)
				}
			}
		</script>
	</head>
	<body>
		<div>
			<span class="myspan">span1</span>
			<span class="myspan">span2</span>
			<span class="myspan">span3</span>
		</div>
		<div id="mydiv1">
			<span class="myspan">span4</span>
			<span class="myspan">span5</span>
			<span class="myspan">span6</span>
		</div>
	</body>
</html>
```

5.document.getElementsByName(name);得到当前文档中所有标签名字的元素

所有的标签都可以加一个name属性

```html
<!DOCTYPE html>\
<html>
    <head>
        <meta charset="UTF-8">
        <title>你</title>
        <script type="text/javascript">
            function test() {
                var a = document.getElementsByName("showRed");
                a[0].align="center";
                a[1].style.color="red";
            }
        </script>
    </head>
    <body>
         <h1 name="showRed">居中</h1>
         <div name="showRed" id="mydiv">内容</div>
         <button onclick="test();">测试</button>
    </body>
</html>

```

6.querySelector("css选择器");

querySelector定义在Document.prototype和Element.prototype上

得到第1个元素节点

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script type="text/javascript">
			window.onload = function() {
				//querySelector定义在Document中
				//得到当前文档中第1个class值为myspan的元素, 这里是得到span1
				let span1 = document.querySelector(".myspan");
				console.log(span1.innerHTML);//span1
				
				let mydiv1 = document.getElementById("mydiv1");
				//因为querySelector同时也定义在Element中
				//得到mydiv1的内部嵌套的并且class值为myspqn的第1个元素,这里是得到span4
				let span4 = mydiv1.querySelector(".myspan");
				console.log(span4.innerHTML)//span4
			}
		</script>
	</head>
	<body>
		<div>
			<span class="myspan">span1</span>
			<span class="myspan">span2</span>
			<span class="myspan">span3</span>
		</div>
		<div id="mydiv1">
			<span class="myspan">span4</span>
			<span class="myspan">span5</span>
			<span class="myspan">span6</span>
		</div>
	</body>
</html>

```



7. querySelectorAll("css选择器");

   querySelectorAll("css选择器");同时定义在Document和Element中

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script type="text/javascript">
			window.onload = function() {
				//querySelectorAll("css选择器");同时定义在Document和Element中
				//得到当前文档中所有类名为myspan的元素组成的数组
				//这里数组中的元素分别为span1, span2,span3,span4,span5,span6
				let a = document.querySelectorAll(".myspan");
				for(let i=0; i<a.length; i++) {
					let span = a[i];
					console.log(span.innerHTML);
				}
				console.log("=====================================")
				let mydiv1 = document.getElementById("mydiv1");
				//得到mydiv1中所有类名为myspan的元素组成的数组
				//这里数组中的元素分别为span4,span5,span6
				let spanArray = mydiv1.querySelectorAll(".myspan");
				for(let i=0; i<spanArray.length; i++) {
					let span = spanArray[i];
					console.log(span.innerHTML);
				}
			}
		</script>
	</head>
	<body>
		<div>
			<span class="myspan">span1</span>
			<span class="myspan">span2</span>
			<span class="myspan">span3</span>
		</div>
		<div id="mydiv1">
			<span class="myspan">span4</span>
			<span class="myspan">span5</span>
			<span class="myspan">span6</span>
		</div>
	</body>
</html>

```

8.getElementsByTagName得标签名指定的元素数组,

同时定义在Document类和Element类中

.getElementsByTagName("div")

.getElementsByTagName("*")

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script type="text/javascript">
			//getElementsByTagName("标签名")同时定义在类Document和Element中
			function show(obj, color) {
				let a = obj.getElementsByTagName("span");
				for(let i=0; i<a.length; i++) {
					a[i].style.color=color;
				}
			}
			function showAll() {
				//得到当前文档中所有的元素
				//let a = document.getElementsByTagName("*");
				//得到body中所有的元素
				//let a = document.body.getElementsByTagName("*");
				//得以mydiv1中所有的元素
				let mydiv1 = document.getElementById("mydiv1");
				let a = mydiv1.getElementsByTagName("*");
				for(let i=0; i<a.length; i++) {
					console.log(a[i].nodeName);
				}
			}
		</script>
	</head>
	<body >
		<button  onclick="show(document, 'red')">document</button>
		<button   onclick="show(document.getElementById('mydiv1'), 'green')">document</button>
		<button onclick="showAll()">得到</button>
		<div  >
			<span  class="myspan">span1</span>
			<span class="myspan">span2</span>
			<span  class="myspan">span3</span>
		</div>
		<div  id="mydiv1">
			<span class="myspan">span4</span>
			<span   class="myspan">span5</span>
			<span   class="myspan">span6</span>
		</div>
	</body>
</html>
```



# 6.节点属性

节点的三个属性nodeName, nodeValue, nodeType

## 6.1.nodeName

属性含有某个节点的名称

对于元素节点，nodeName=标签名（返回的名称是大写的）

对于文本节点，nodeName=#text

对于属性节点，nodeName=属性名

## 6.2.nodeValue

对于元素节点，因为本身不直接包含文本，所以nodeValue是不可用的。当然你也可以在示例中自己写试试看有什么结果出现。

对于文本节点，nodeValue=文本值

对于属性节点，nodeValue=属性值

## 6.3.nodeType             

**对于元素节点，nodeType=1**

对于文本节点，nodeType=3

对于属性节点，nodeType=2

另外提一下：

对于注释节点，nodeType=8

对于文档节点(document)，nodeType=9

# 7.节点的遍历

## 7.1.contains方法

判断节点是否有参数指定的子节点

```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <ul>
        <li></li>
    </ul>
    <ul>
        <li id="myli"></li>
    </ul>
    <script type="text/javascript">
        var ul = document.querySelector('ul');
        var li = document.querySelector('li');
        var check = ul.contains(li);//判断li是否在ul中
        alert(check);   //因为存在，所有返回 true
        
        var myli = document.getElementById("myli");
        var check2 = ul.contains(myli);//false
    </script>
</body>
</html>
```

## 7.2节点用于遍历的属性

ownerDocument得到document节点 

parentNode得到父节点

**parentElement得到父元素节点**

childNodes得到子节点数组

**children得到子元素节点数组**

firstChild得到子节点中的第一个节点

**firstElementChild得到子元素节点中的第一个元素节点**

lastChild得到子节点中的最后一个节点

**lastElementChild得到子元素节点中的最后一个元素节点**

previousSibling得到同级前一个节点

**previousElementSibling得到同级前一个元素节点**

nextSibling得到同级后一个节点

**nextElementSibling得到后一个元素节点**

> 练习:分析下面代码的作用, 提示元素节点的类名为"Element"

```js
			Element.prototype.myChildren=function(){
				var childs=this.childNodes,
					length=childs.length,
					arr=[];
					
				for(var i=0;i<length;i++){
					if(childs[i].nodeType===1){
						arr.push(childs[i])
					}
				}				
				return arr;
			}
			var p=document.getElementsByTagName("p")[0];
			p.myChildren();
```

> 练习：
>
> 1.递归遍历指定节点的所有子孙节点
>
> 2.递归遍历指定节点的所有元素节点

> 练习:
>
> 1、 遍历元素节点树（在原型链上编程Element.prototype.traverseNode）
>
> 2、封装函数，返回元素e的第n层祖先元素节点
>
> 3、封装函数，返回元素e的第n个兄弟元素节点，n为正，返回后面的兄弟元素节点；n为负，返回前面的；n为0，返回自己。

# 8.节点的修改

## 8.1删除节点（删 )

HTMLElement.property.remove(); 删除节点自身 

HTMLElement.property.removeChild(节点对象):删除指定的子节点

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			#box {
				width: 300px;
				height: 200px;
				border: 1px solid red;
			}
		</style>
	</head>
	<body>
		<div id="box">
			<p>段落1</p>
			<p>段落2</p>
			<p>段落3</p>
		</div>
		<button onclick="delBox()">删除Box</button>
		<br />
		<button onclick="delChild()">删除指定的子节点</button>
	</body>
	<script type="text/javascript">
		function delBox() {
			let box = document.getElementById("box");
			box.remove();//删除box  自销毁
		}
		function delChild() { 
			let box = document.getElementById("box");
			let pes = box.children;
			if(pes.length>=1) {
				//得到box子元数节点的第一个节点
				let first = pes[0];
				//删除指定的子节点
				box.removeChild(first); 
			}
		}
	</script>
</html>

```



## 8.2创建节点并加入(增)

document.createElement("标签名");

document.createTextNode("文件内容");

HTMLElement.property.appendChild(node)

HTMLElement.property.insertBefore(index,node)

## 8.3节点替换(删增)

HTMLElement.property.replaceChild(新子节点，旧子节点)

## 8.4节点修改

#### 8.4.1获取或修改内容：

A， innerHTML：包括html标签，修改符：= 和 += ；

B， innerText：没有html标签，赋值要小心；

#### 8.4.2修改类名：

> 获取封类元素类名的对象*classList*

```js
HTMLElement.property.classList;
```

> 遍历classList中所有的类名

```js
 for(let i=0; i<list.length; i++) {
	console.log(list[i]);
 }
```

> 往classList中增加类名		

```js
classList.add("styleName")
```

> 移除指定的类名

```js
classList.remove("styleName");
```

> 用一个类替换classList中的所有值

```
HTMLElement.property.className="styleName";
```

> 检查是否存在指定的class

```
classList.contains("styleName");
```



#### 8.4.3 获取和修改属性值：  

class  style

> ​	标准属性:   element.attribute

```html
<h1 align="center" data-girl>ss</div>
<script type="text/javascript">
	let h1 = document.querySelector("h1");
	h1.align="right";
	console.log(h1.align)
</script>
```

> ​	标准的自定义属性:

```html
标准的w3c自定义属性使用"data-"：data-myattr = ‘value’
<h1 align="center" data-girl="sss">ss</div>
<script type="text/javascript">
	let h1 = document.querySelector("h1");
	h1.dataset.girl="女";//修改
	console.log(h1.dataset.girl)//获取
</script>
```

> ​	任意的属性:

```html
<script type="text/javascript">
	let h1 = document.querySelector("h1");
	h1.setAttribute("align", "center"); //set
	console.log(h1.getAttribute("align"))//get
</script>
```

> 操作属性的通用方式,即可以操作任何属性的方式为
>
> 元素.setAttribute("属性名", 值)
>
> 元素.getAttribute("属性名");
>
> 元素.hasAttribute("属性名")：检查一个属性是否存在;
>
> 元素.removeAttribute("属性名")：删除指定的属性;

> 练习1：
>
> 给body的子标签元素统一设置一个”this-name”的属性，属性值为这些元素自己的标签名nodeName

> 练习2
>
> 请编写一段JavaScript脚本生成下面这段DOM结构。要求--使用标准的DOM方法或属性。

```html
<div class="example">
    <p class="slogan" align="center" id="5" data_max="300">
        xxx,你最帅
    </p>
</div> 
```

> 练习3：
>
> 将目标节点内部的节点顺序逆序reverse()。

```html
<div>
    <a></a>
    <em></em>
</div>
变为下面的
<div> 
	<em></em> 
    <a><a> 
</div>
```

# 9.盒子模型--基本操作

### 0、让滚动条滚动

> window上有三个方法
>
> 0.1 scroll(x,y)
>
> 0.2 scrollTo(x,y);   滚动到指定位置，其中（x,y）是指定位置的坐标
>
> 0.3 scrollBy(x,y);  追加滚动。具体效果看实例，(x.y)不是坐标，而是追加的滚动的长度。
>
> 滚动条：横向滚动（y=0）、纵向滚动（x=0）。

示例1：使用scrollTo实现展开收启

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>
			scrollTo的效果
		</title>
		<style type="text/css">
			* {
				width: 300px;
			}
			.list>li {
				background: pink;
			}
			.list>li>ul>li {
				background: #FFA500;
			}
			.list ul {
				display: none;
			}
		</style>
	</head>
	<body>

		<ul class="list">
			<li>1我国古代著名数学家祖冲之用大衍求一法计算了太初历的上元甲子的起始点）</li>
			<li>2：发现上元甲子至宋大明七年癸卯（西元463年）已经过了五万一千九百三十九年。当代学者，扬州大学数学科学学院的左铨如等人，在国家自然科学基金数学天元基金资助项目(A0224013)中，用秦-左表求乘率，用现代数学方法，改进了大衍求一术的古法，通过解不定方程组，再次证明了该结论[2]。东汉皇甫谧《帝王世纪》有云：“太昊（即‘伏羲’）在位一百一十年，子孙五十九，传世五万余岁”。南宋谢守灏所撰《太上混元老子史略》中也说：“伏羲木德，初造历，……子孙相承四万五千六百年”。皆与数理计算的结果相差不多。当代学者阎朝科通过考古与文物研究，也证明了这一时间点的可考性。（参见《连山神农炎帝故里八铁证》。</li>
			<li>3：发现上元甲子至宋大明七年癸卯（西元463年）已经过了五万一千九百三十九年。当代学者，扬州大学数学科学学院的左铨如等人，在国家自然科学基金数学天元基金资助项目(A0224013)中，用秦-左表求乘率，用现代数学方法，改进了大衍求一术的古法，通过解不定方程组，再次证明了该结论[2]。东汉皇甫谧《帝王世纪》有云：“太昊（即‘伏羲’）在位一百一十年，子孙五十九，传世五万余岁”。南宋谢守灏所撰《太上混元老子史略》中也说：“伏羲木德，初造历，……子孙相承四万五千六百年”。皆与数理计算的结果相差不多。当代学者阎朝科通过考古与文物研究，也证明了这一时间点的可考性。（参见《连山神农炎帝故里八铁证》。</li>
			<li>4：发现上元甲子至宋大明七年癸卯（西元463年）已经过了五万一千九百三十九年。当代学者，扬州大学数学科学学院的左铨如等人，在国家自然科学基金数学天元基金资助项目(A0224013)中，用秦-左表求乘率，用现代数学方法，改进了大衍求一术的古法，通过解不定方程组，再次证明了该结论[2]。东汉皇甫谧《帝王世纪》有云：“太昊（即‘伏羲’）在位一百一十年，子孙五十九，传世五万余岁”。南宋谢守灏所撰《太上混元老子史略》中也说：“伏羲木德，初造历，……子孙相承四万五千六百年”。皆与数理计算的结果相差不多。当代学者阎朝科通过考古与文物研究，也证明了这一时间点的可考性。（参见《连山神农炎帝故里八铁证》。</li>
			<li>
				<ul>
					<li>5：发现上元甲子至宋大明七年癸卯（西元463年）已经过了五万一千九百三十九年。当代学者，扬州大学数学科学学院的左铨如等人，在国家自然科学基金数学天元基金资助项目(A0224013)中，用秦-左表求乘率，用现代数学方法，改进了大衍求一术的古法，通过解不定方程组，再次证明了该结论[2]。东汉皇甫谧《帝王世纪》有云：“太昊（即‘伏羲’）在位一百一十年，子孙五十九，传世五万余岁”。南宋谢守灏所撰《太上混元老子史略》中也说：“伏羲木德，初造历，……子孙相承四万五千六百年”。皆与数理计算的结果相差不多。当代学者阎朝科通过考古与文物研究，也证明了这一时间点的可考性。（参见《连山神农炎帝故里八铁证》。</li>
					<li>6：发现上元甲子至宋大明七年癸卯（西元463年）已经过了五万一千九百三十九年。当代学者，扬州大学数学科学学院的左铨如等人，在国家自然科学基金数学天元基金资助项目(A0224013)中，用秦-左表求乘率，用现代数学方法，改进了大衍求一术的古法，通过解不定方程组，再次证明了该结论[2]。东汉皇甫谧《帝王世纪》有云：“太昊（即‘伏羲’）在位一百一十年，子孙五十九，传世五万余岁”。南宋谢守灏所撰《太上混元老子史略》中也说：“伏羲木德，初造历，……子孙相承四万五千六百年”。皆与数理计算的结果相差不多。当代学者阎朝科通过考古与文物研究，也证明了这一时间点的可考性。（参见《连山神农炎帝故里八铁证》。li>
					<li>7：发现上元甲子至宋大明七年癸卯（西元463年）已经过了五万一千九百三十九年。当代学者，扬州大学数学科学学院的左铨如等人，在国家自然科学基金数学天元基金资助项目(A0224013)中，用秦-左表求乘率，用现代数学方法，改进了大衍求一术的古法，通过解不定方程组，再次证明了该结论[2]。东汉皇甫谧《帝王世纪》有云：“太昊（即‘伏羲’）在位一百一十年，子孙五十九，传世五万余岁”。南宋谢守灏所撰《太上混元老子史略》中也说：“伏羲木德，初造历，……子孙相承四万五千六百年”。皆与数理计算的结果相差不多。当代学者阎朝科通过考古与文物研究，也证明了这一时间点的可考性。（参见《连山神农炎帝故里八铁证》。</li>
					<li>8：发现上元甲子至宋大明七年癸卯（西元463年）已经过了五万一千九百三十九年。当代学者，扬州大学数学科学学院的左铨如等人，在国家自然科学基金数学天元基金资助项目(A0224013)中，用秦-左表求乘率，用现代数学方法，改进了大衍求一术的古法，通过解不定方程组，再次证明了该结论[2]。东汉皇甫谧《帝王世纪》有云：“太昊（即‘伏羲’）在位一百一十年，子孙五十九，传世五万余岁”。南宋谢守灏所撰《太上混元老子史略》中也说：“伏羲木德，初造历，……子孙相承四万五千六百年”。皆与数理计算的结果相差不多。当代学者阎朝科通过考古与文物研究，也证明了这一时间点的可考性。（参见《连山神农炎帝故里八铁证》。</li>
					<li>9：发现上元甲子至宋大明七年癸卯（西元463年）已经过了五万一千九百三十九年。当代学者，扬州大学数学科学学院的左铨如等人，在国家自然科学基金数学天元基金资助项目(A0224013)中，用秦-左表求乘率，用现代数学方法，改进了大衍求一术的古法，通过解不定方程组，再次证明了该结论[2]。东汉皇甫谧《帝王世纪》有云：“太昊（即‘伏羲’）在位一百一十年，子孙五十九，传世五万余岁”。南宋谢守灏所撰《太上混元老子史略》中也说：“伏羲木德，初造历，……子孙相承四万五千六百年”。皆与数理计算的结果相差不多。当代学者阎朝科通过考古与文物研究，也证明了这一时间点的可考性。（参见《连山神农炎帝故里八铁证》。</li>
				</ul>
				<button href="#">查看更多</button>
			</li>
		</ul>

		<script type="text/javascript">
			var button = document.getElementsByTagName("button")[0];
			var scrollY = 0;
			button.onclick = function() {
				if (this.innerHTML == "查看更多") {
					scrollY = window.pageYOffset; //记录此时滚动了多少距离
					this.previousElementSibling.style.display = "block";
					this.innerHTML = "点击收起";
				} else {
					//收起来:元素隐藏,文字要改变,滚动的距离
					console.log(scrollY)
					window.scrollTo(0, scrollY);
					this.previousElementSibling.style.display = "none";
					this.innerHTML = "查看更多";
				}
			}
		</script>
	</body>
</html>

```



### 1、滚动轮滚动的距离

1.1 以屏幕左上角为坐标原点,有两种方式可以获取

方式1：  bom操作，IE8及IE8以下不兼容

​		x方向：window.pageXOffset（可以看出pageXOffset方法是定义在window里面的）

​		y方向：window.pageYOffset

方式2:	

​		x方向：document.body.scrollLeft+documentElement.scrollLeft   ===  window.pageXOffset

​		y方向：document.body.scrollTop+documentElement.scrollTop   ===  window.pageYOffset     

1.2 封装兼容性方法，求滚动轮滚动距离getScrollOffset()



```js
			function getScrollOffset(){
				var pageScroll={
					x:0,
					y:0
				}
				if(window.pageXOffset){   //测试当前浏览器中有没有pageXOffset这个方法，若有则兼容，布尔值为true，就执行{}中的代码块；若没有则不兼容，布尔值为false，执行else内的代码块。有if~else这样的布局完成了浏览器对使用方法pageXOffset的兼容测试，不仅规避出现代码无效（没有出现效果）的问题，还解决了浏览器兼容问题。
					pageScroll.x=window.pageXOffset;
					pageScroll.y=window.pageYOffset;
				}else {
					pageScroll.x=document.body.scrollLeft+document.documentElement.scrollLeft;
					pageScroll.y=document.body.scrollTop+document.documentElement.scrollTop;
				}
				return pageScroll;
			}

			//let pageScroll = getScrollOffset();
             pageScroll.y;  pageScroll.x   
```

###### 重点：浏览器兼容问题解决办法

当浏览器对某些方法或函数不支持，就说浏览器对这些函数或方法不兼容。解决办法就是：1.使用跟这些函数或方法的实现效果相同的该浏览器支持的其他函数或方法；2.更换浏览器。这样就可以解决浏览器兼容性问题。

1.3 监听滚动轮滚动事件

```js
window.onscroll = function(e) {
	 ......
}
注：任何监听函数里面都可以加一个e，e表示事件信息
```

### 2、窗口的可视区域尺寸

2.1查看视口的尺寸(会受窗口缩放影响),  有三种方式：

方式1：bom操作，IE8及IE8以下不兼容

window.innerWidth

window.innerHeight

方式2：标准模式下(<!DOCTYPE html>,渲染模式)，任意浏览器都兼容

document.documentElement.clientWidth

document.documentElement.clientHeight

方式3：//适用于怪异/混杂模式下的浏览器，即语法向后兼容

document.body.clientWidth

document.body.clientHeight

2.2 封装兼容性方法，返回浏览器视口尺寸getViewportOffset()；提示：document. compatMode可区分标准模式与否。

```js
			function getViewportOffset(){
				var viewPort={
					w:0,
					h:0
				}
				if(window.innerWidth){
					viewPort.w=window.innerWidth;
					viewPort.h=window.innerHeight;
				}else{
					if(document.compatMode==="BackCompat"){
						viewPort.w=document.body.clientWidth;
						viewPort.h=document.body.clientHeight;
					}else{
						viewPort.w=document.documentElement.clientWidth;
						viewPort.h=document.documentElement.clientHeight;
					}
				}
				return viewPort;
			}
```

###### 重点：采用这样的方式可以解决所有的浏览器兼容问题

### 3、元素的位置与尺寸

> 获取元素的位置与尺寸方式有两种

> 方式1： Element.prototype.getBoundingClientRect();返回的DOMRect对象,该对象的属性为

> 1. bottom:元素底部离窗口顶部的距离
> 2. top:元素顶部离窗口顶部的距离
> 3. left:元素左边离窗口左边的距离
> 4. right:元素右边离窗口右边的距离
> 5. width:元素宽
> 6. height:元素高
> 7. x:元素左上角x坐标 
> 8. y:元素左上角y坐标

> 重要提示:都是以窗口为参照;元素包括边框在内

> 方式2：使用元素属性代

> Element.prototype.offsetWidth
>
> Element.prototype.offsetHeight
>
> Element.prototype.clientWidth
>
> Element.prototype.clientHeight
>
> Element.prototype.offsetLeft
>
> Element.prototype.offsetTop
>
> 重要提示：全是只读属性

![1573197575681](img\1573197575681.png)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>获取窗口的可视化区域大小</title>
		<style type="text/css">
			* {
				border: 0;
				margin: 0;
				padding: 0;
			}

			div {
				margin: 100px;
				border: 10px solid red;
				width: 50px;
				height: 50px;
			}
		</style>
	</head>
	<body>
		<div>

		</div>
		<script type="text/javascript">
			let mydiv = document.querySelector("div");
			let dOMRect = mydiv.getBoundingClientRect();
			console.log(dOMRect);
			// {
			// 	bottom: 170
			// 	height: 70
			// 	left: 100
			// 	right: 170
			// 	top: 100
			// 	width: 70
			// }
			console.log(mydiv.offsetWidth); //70
			console.log(mydiv.offsetHeight); //70
			console.log(mydiv.clientWidth); //50
			console.log(mydiv.clientHeight); //50
			console.log(mydiv.offsetLeft);//100
			console.log(mydiv.offsetTop)//100
		</script>
	</body>
</html>
```

### 5、让滚动条滚动

> window上有三个方法
>
> 0.1 scroll(x,y);展开收起
>
> 0.2 scrollTo(x,y)；展开收起，实计上与scroll(x,y)相同，兼容性不如scroll
>
> 0.3 scrollBy(x,y);  自动阅读

> 示例1：使用scrollTo实现展开收起

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>
			scrollTo的效果
		</title>
		<style type="text/css">
			* {
				width: 300px;
			}

			.box {
				background: aliceblue;
			}

			#moreDiv {
				display: none;
			}
		</style>
	</head>
	<body>

		<div class="box">
			<div>
				<p>我国古ddddd代著名数学家祖冲之用大衍求一法计算了太初历的上元甲子的起始点）</li>
				</P>
				<p>我国古ddddd代著名数学家祖冲之用大衍求一法计算了太初历的上元甲子的起始点）</li>
				</P>
				<p>我国古ddddd代著名数学家祖冲之用大衍求一法计算了太初历的上元甲子的起始点）</li>
				</P>
				<p>我国古ddddd代著名数学家祖冲之用大衍求一法计算了太初历的上元甲子的起始点）</li>
				</P>
				<p>我国古ddddd代著名数学家祖冲之用大衍求一法计算了太初历的上元甲子的起始点）</li>
				</P>
				<p>我国古ddddd代著名数学家祖冲之用大衍求一法计算了太初历的上元甲子的起始点）</li>
				</P>
				<p>我国古ddddd代著名数学家祖冲之用大衍求一法计算了太初历的上元甲子的起始点）</li>
				</P>
			</div>
			<div id="moreDiv">
				<p>2我国古ddddd代著名数学家祖冲之用大衍求一法计算了太初历的上元甲子的起始点）</li>
				</P>
				</P>
				<p>2我国古ddddd代著名数学家祖冲之用大衍求一法计算了太初历的上元甲子的起始点）</li>
				</P>
				<p>2我国古ddddd代著名数学家祖冲之用大衍求一法计算了太初历的上元甲子的起始点）</li>
				</P>
				<p>2我国古ddddd代著名数学家祖冲之用大衍求一法计算了太初历的上元甲子的起始点）</li>
				</P>
				<p>2我国古ddddd代著名数学家祖冲之用大衍求一法计算了太初历的上元甲子的起始点）</li>
				</P>
			</div>
			<button href="#">查看更多</button>
			<script type="text/javascript">
				var button = document.getElementsByTagName("button")[0];
				var scrollY = 0;
				button.onclick = function() {
					if (this.innerHTML == "查看更多") {
						scrollY = window.pageYOffset; //记录此时滚动了多少距离
						document.getElementById("moreDiv").style.display = "block";
						button.innerHTML = "点击收起";
					} else {
						//收起来:元素隐藏,文字要改变,滚动的距离
						window.scrollTo(0, scrollY);
						document.getElementById("moreDiv").style.display = "none";
						this.innerHTML = "查看更多";
					}
				}
			</script>
	</body>
</html>
```

### 6、让元素在视口中可见

>  element.scrollIntoView(flag);
>
> flag为true，将元素和视口的上边缘对齐; 
>
> flag为false，则将元素的下边缘和视口的下边缘对齐；

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>让元素滚动到视口</title>
		<style type="text/css">
			.menu {
				position: fixed;
				top: 0px;
			}
			.menu a {
				height: 40px;
				line-height: 40px;
				width: 70px;
				display: inline-block;
				margin-right: 5px;
				background-color: blue;
				color: white;
				font-size: 14px;
				text-align: center;
			}
			.kongbai {
				height: 500px;
				padding-top: 50px;
			}
			.info {
				background-color: red;
			}
			.products {
				background-color: orange;
			}
			.contact {
				background-color: purple;
			}
			.hr {
				background-color: pink;
			}
		</style>
	</head>
	<body>
		<div class="menu">
				<a href="###" goto="info">公司简介</a>|
				<a href="###" goto="products">产品信息</a>|
				<a href="###" goto="contact">联系方式</a>|
				<a href="###" goto="hr">招聘信息</a>
		</div>
		<div class="info kongbai">公司简介</div>
		<div class="products kongbai">产品信息</div>
		<div class="contact kongbai">联系方式</div>
		<div class="hr kongbai">招聘信息</div>
		<div class="kongbai">占地区域</div>		
		<script type="text/javascript">
			var anchors=document.querySelectorAll(".menu a");
			for(var i=0;i<anchors.length;i++){
				anchors[i].onclick=function(){
				  //获取a标签对应的div元素
				  var div=document.querySelector("."+this.getAttribute("goto"))
				  //将元素移动到视口区域
				  div.scrollIntoView(false);
				}
			}
		</script>
	</body>
</html>
```

# 10.样式操作：

> 10.1、读写元素css属性：
>
> element.style.property 
>
> 复合属性必需拆解，组合单词必须变成小驼峰式写法
>
> 写入的值必须是字符串格式

# 11.表单操作：

### 11.1、获取表单和表单元素

> 1) document.forms：返回页面中所有表单元素；
>
> 2) 表单和表单元素可以用标准的节点获取方式来获取；

```js
    //获取id是myform表单下所有的复选按钮
    document.querySelector('#myform input[type="checkbox"]');
    //获取id是myform表单下所有的name是newsid的复选按钮
    document.querySelector('#myform input[type="checkbox"][name="newsid"]');
```

### 11.2、表单和元素的属性和方法

1) 表单.submit()：表单提交； 

2) 表单.reset()：表单重置；

3) 元素.type：只读，表单元素类型；

4) 元素.form：只读，包含该元素的form表单对象，不存在返回null；

5) 元素.name：只读，元素的名称；

6) 元素.value：可读可写，简单理解就是输入框的值；

### 11.3、开关按钮：

1) 单选按钮和复选框定义了checked属性，可读可写；

2) 选中时为true，你也可以把他设置为true表示选中；

//radio[1].checked=false/true

### 11.4、表单和元素的事件处理程序：

1) 表单.onsubmit：监听表单提交事件，表单提交到服务器前，先执行该事件；

该事件由 input_submit/ button_submit按钮触发,多用于数据提交前的验证

如果事件处理程序返回false，则表单提交取消，数据不会提交到服务器处理；

需要注意，表单.submit()方法不会触发onsubmit事件；

2) 表单.onreset：监听表单重置事件，处理过程和onsubmit大致相似；

表单.reset ()方法可以触发onreset事件，多用于获取用户确认confirm



### 11.5、select元素一些常用操作

1) select节点.options：返回其所有option选项，类数组的HTMLOptionsCollection；

 可通过selectNode[index]访问option元素

2) select节点.selectedIndex：可读可写，被选中的选项索引，下边从0开始；

通过修改selectedIndex的值设置默认选中选项；

3) select节点.value：得到选中的option值；

4) option节点.text：得到选项的文本信息，也就是用户看到的选项文字；

5) option节点.value：得到的是选项的值，和SELECT选中的值有区别；

// 小练习：实现联动菜单，下拉框之间有关联的；

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml71920\wps2.png) 

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>实现联动选项菜单</title>
	</head>
	<body>

		<form action="">
			户籍所在地：
			<select class="p">
				<option value="0">==请选择所在省份==</option>
			</select>
			<select class="c">
				<option value="0">==请选择所在城市==</option>
			</select>
		</form>
		<script type="text/javascript">
			var menu = [
				{
					name: '四川',
					pid: 20,
					children: [{
							name: '成都',
							cid: 20001
						}, {
							name: '德阳',
							cid: 20002
						}, {
							name: '绵阳',
							cid: 20003
						},
						{
							name: '乐山',
							cid: 20004
						}, {
							name: '广元',
							cid: 20005
						}
					]
				},
				{
					name: '河南',
					pid: 10,
					children: [{
							name: '郑州',
							cid: 10001
						}, {
							name: '开封',
							cid: 10002
						}, {
							name: '洛阳',
							cid: 10003
						},
						{
							name: '信阳',
							cid: 10004
						}, {
							name: '安阳',
							cid: 10005
						}
					]
				}
			];
			var p=document.getElementsByClassName("p")[0];
			var c=document.getElementsByClassName("c")[0];
			for(var i=0;i<menu.length;i++){				
				var option=document.createElement("option");
				option.text=menu[i].name;
				option.value=menu[i].pid;
				p.appendChild(option)
			}
			//选项框的值发生变化的时候触发
			p.onchange=function(){
				var pid=p.value;
				for(var i=0;i<menu.length;i++){
					if(menu[i].pid==pid){
						for(var j=0;j<menu[i].children.length;j++){
							var option=document.createElement("option");
							option.text=menu[i].children[j].name;
							option.value=menu[i].children[j].cid;
							c.appendChild(option)
						}
					}
				}
			}
		</script>
	</body>
</html>
```

​	 

**（五）获取选中的文字****window.getSelection().toString()****：**

​	是鼠标松开的时候，可以获取到选中的文字信息；

//小练习，用户选取界面的文字后，询问用户“要去百度搜索？”；提示：询问用户前判断用户选择的文本是否为空

 

 

**（六）让内容可编辑**

可编辑的元素内容，这是要做编辑器的节奏吗？

1. contenteditable：该属性使得元素具有可编辑功能，属性值设置为false显示关闭可编辑；

​                    < div class="mydiv" contenteditable="true">

​                        请编辑这里的内容

​                    < /div>

2. spellcheck：该属性给元素开启拼写检查，属性值设置为false关闭拼写检查；

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml71920\wps3.jpg) 

3. 浏览器定义了多项文本编辑命令（eg：copy/selectAll等），使用document. execCommand()来执行这些命令，但是兼容性堪忧；

API：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand

 