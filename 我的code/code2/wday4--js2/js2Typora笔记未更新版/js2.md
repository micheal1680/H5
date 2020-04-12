# 0.事件

## 1、事件三要素

​	(1)事件源(this获取), 任何元素对象都可以当作事件源

​	(2)事件：

​	(3)事件处理函数

## 2、加入事件

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

## 3、事件传递：

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

## 4、获取事件信息

## 5、事件

![img](img\wps1.jpg) 

![img](img\wps2.jpg) 



> 练习：同时按两个A键和S时触发一个事件函数的执行

# 1.innerHTML和innerText

# 2.节点分类与继承

## 1.nodeType

1. 对于元素节点
2. 对于文本节点  <div>dddd</div>
3. 对于属性节点  <div align="left">
4. 对于注释节点  <!---->
5. 对于文档节点---document

## 2.节点的继承关系

> *节点*

1. ​    元素节点
2. ​    文本节点
3. ​    属性节点
4. ​    documnet节点
5. ​    注释节点

# 3.文档树

![img](img\clipboard.png) 

![img](img\clipboard2.png) 

# 4.节点获取常用方法

1.得到head元素节点. document.head

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

2.得到body元素节点. document.body

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

3.document.getElementById(id);得到元素节点

4.document.getElementsByClassName(className);得到元素节点数组

```html
<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>你</title>
        <script type="text/javascript">
            function test() {
                var a = document.getElementsByClassName("showRed");
                a[0].align="center";
                a[1].style.color="red";
            }
        </script>
    </head>
    <body>
         <h1 class="showRed">居中</h1>
        <div class="showRed" id="mydiv">内容</div>
         <button onclick="test();">测试</button>
    </body>
</html>

```

5.document.getElementsByName(name);得到元素节点数组

```html
<!DOCTYPE html>

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

6.document.querySelector("css选择器");

得到在文档中选择器选择的第1个元素节点

7.document.querySelectorAll("css选择器");

得到文档中选择器选择的所有元素节点数组

8.得到元素节点的css指定的子节点元素节点数组

元素节点.getElementsByTagName("div")

元素节点.getElementsByTagName("*");

# 5.节点属性

节点的三个属性nodeName, nodeValue, nodeType

## 5.1.nodeName

属性含有某个节点的名称

对于元素节点，nodeName=标签名（返回的名称是大写的）

对于文本节点，nodeName=#text

对于属性节点，nodeName=属性名

## 5.2.nodeValue

对于元素节点，因为本身不直接包含文本，所以nodeValue是不可用的。当然你也可以在示例中自己写试试看有什么结果出现。

对于文本节点，nodeValue=文本值

对于属性节点，nodeValue=属性值

## 5.3.nodeType             

对于元素节点，nodeType=1

对于文本节点，nodeType=3

对于属性节点，nodeType=2

另外提一下：

对于注释节点，nodeType=8

对于文档节点(document)，nodeType=9

# 6.节点的遍历

## 6.1.contains方法

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

    <script type="text/javascript">
        var ul = document.querySelector('ul');
        var li = document.querySelector('li');
        var check = ul.contains(li);
        alert(check);   //因为存在，所有返回 true
    </script>
</body>
</html>
```

## 6.2节点用于遍历的属性

*ownerDocument得到document节点* 

*parentNode得到父节点*

*parentElement得到父元素节点*

*childNodes得到子节点数组*

*children得到子元素节点数组*

*firstChild得到子节点中的第一个节点*

*firstElementChild得到子元素节点中的第一个元素节点*

*lastChild得到子节点中的最后一个节点*

*lastElementChild得到子元素节点中的最后一个元素节点*

*previousSibling得到同级前一个节点*

*previousElementSibling得到同级前一个元素节节点*

*nextSibling得到同级后一个节点*

*nextElementSibling得到同级后一个元素节点*

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

> 练习：
>
> 封装函数，返回元素e的第n个兄弟元素节点，n为正，返回后面的兄弟元素节点；n为负，返回前面的；n为0，返回自己。

# 7.节点的修改

节点.remove(); 删除节点自身 

节点.removeChild(节点对象)



document.createElement("标签名");

document.createTextNode("文件内容");

节点.appendChild(节点对象)



p.insertBefore(i,span)

replaceChild



