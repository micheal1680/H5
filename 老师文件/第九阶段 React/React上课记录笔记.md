###### React：

JSX：(JavaScript xmL)----标签化js语言

Vue与React（基于webpack和ES6）:

1.都是组件化开发的思想；

2.vue组件（模板+script+css）；

   react组件（是一个函数，其包裹的是JSX）；其中要在JSX中使用js语言，得用{ }括起来，浏览器无法直接识别JSX，因此需要babel（<script type="text/babel"><script>）将JSX转化为js语言。（JSX更加的快捷），比js更加方便。JSX仅仅是React使用，即React组件。

react往页面写东西用html标签语言即可，因为用JSX语言不同于js，不需再获取节点，再innerHtml，JSX可以直接用标签写。也用到css和js。

js用{ }括起来，包括其里面的注释也要用 { }括起来。因为注释也是属于js代码。

jsx内部的注释要加{ }，外部的注释不用加{ }。



控制台--react：

类似于elements，可以看网页结构，但对于react来说，更好用，更清晰。只适用于React。



React写组件，有 类定义（属于ES6）和函数定义 （属于ES5）2种方法。其中函数定义适用于小组件；类定义适用于大组件（东西比较多）。因此多采用类来构建组件。

props：n个属性的集合。



###### 类：使用组件

class   类名    extend   React.component {

​      render( ){

​                  return   (JSX元素)

​          }  

}

声明组件：

ReactDom.render（

​             <类名/>

​              document.getElementById(id)

）



在a标签中使用 target = "_blank" 属性，可以使跳转一个新窗口（即新页面打开）

super()：调用构造器去创建父类对象

JSX外不能加{ }

ReactDom render(值，元素)     即（渲染内容，渲染到哪里）







 

 

 