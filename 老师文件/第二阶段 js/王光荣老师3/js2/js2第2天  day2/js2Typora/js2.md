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

DOM树：左边是父类，右边是子类。js中常用的两个类是：Document（整个文档）和Element(文档中的元素)。Document既是Node的子类又是HTMLDocument的父类。

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
> f) getElementsByClassName、querySelectorAll、querySelector定义在Document.prototype和Element.prototype上。（即这些属性和方法同时定义在document和element上）
>
> 注：得到document对象，实际上document是HTMLDocument类的对象

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

可以用这个属性来判断选择相应的节点（比如：if(nodeType==1){ }来判断是否为元素节点，并对此作出相应的操作）         

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
        var ul = document.querySelector('ul');//选中的是第一个ul
        var li = document.querySelector('li');//选中的是第一个ul中的li
        var check = ul.contains(li);//判断li是否在ul中
        alert(check);   //因为存在，所有返回 true
        
        var myli = document.getElementById("myli");//选中的是第二个ul中的li
        var check2 = ul.contains(myli);//false     这里ul就指的是第一个ul，而该ul中没有myli,所以返回false
    </script>
</body>
</html>
```

## 7.2节点用于遍历的属性

由于基本上都是对元素节点进行操作，因此都是常用获取元素节点的方法（以下加粗的方法）

ownerDocument得到document节点 

parentNode得到父节点

**parentElement得到父元素节点**

childNodes得到子节点数组

**children得到所有子元素节点数组**（包括子子孙孙）

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
HTMLElement.property.contains("styleName");
```



#### 8.4.3 获取和修改属性值：

> ​	标准属性:

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
<h1 align="center" data-girl>ss</div>
<script type="text/javascript">
	let h1 = document.querySelector("h1");
	h1.dataset.girl="女";//修改
	console.log(mydiv.dataset.girl)//获取
</script>
```

> ​	任意的自定义属性:

```html
<script type="text/javascript">
	let h1 = document.querySelector("h1");
	h1.setAttribute("align", "center");
	console.log(h1.getAttribute("align"))//"center"
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
    <p class="slogan">
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

### 1、滚动轮滚动的距离

1、滚动轮滚动的距离

a) 查看滚动条的滚动距离：

​		window.pageXOffset/window.pageYOffset

​		//bom操作，IE8及IE8以下不兼容

​		document.body/documentElement.scrollLeft/scrollTop

​		// 兼容性比较混乱，同时取两个值相加，因为不可能存在两个同时有值

b) 封装兼容性方法，求滚动轮滚动距离getScrollOffset()

### 2、窗口的可视区域尺寸

### 3、元素的几何尺寸

### 4、元素的位置

### 5、让滚动条滚动

### 6、让元素在视口中可见

# （二）盒子模型

1、elementNode.getBoundingClientRect()：获取盒子的位置信息以及尺寸信息； 

2、盒子更多尺寸及位置信息：

offsetWidth：本身宽度[103]+边框线[3+3]+左右内边距[5+5]=119；-outerWidth()
offsetHeight：本身高度[104]+边框线[3+3]+上下内边距[4+4]=118；-outerHeight()
offsetTop：相对有定位属性的父节点上偏移量=50；
offsetLeft：相对有定位属性的父节点左偏移量=54；
clientWidth：本身的宽度[103]+左右内边距[5+5]=96;					-innerWidth()
clientHeight：本身的高度[104]+上下内边距[4+4]=95；				-innerHeight()
clientTop：上边框线的宽度=3；----border-top
clientLeft：左边框线的宽度=3；----border-left
scrollWidth：盒子的实际宽度(包括不可见部分，不包括边线) =174；	-innerWidth()
scrollHeight：盒子的实际高度(包括不可见部分，不包括边线)=167；	-innerHidth()
scrollTop：滚动条向下滚动的距离=50；
scrollLeft：滚动条向右滚动的距离=30；
window**.**innerHeight：浏览器窗口可见区域高度=695； 
window**.**innerWidth：浏览器窗口可见区域宽度=622;  

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml140188\wps1.jpg) 

 

# （三）样式操作：

1、读写元素css属性：

2、查询计算样式-bom操作

# （四）表单操作：

1、获取表单和表单元素

2、表单和元素的属性和方法

3、开关按钮：

4、表单和元素的事件处理程序：

5、select一些常用操作

# （五）获取选中的文字

# （六）让内容可编辑

 