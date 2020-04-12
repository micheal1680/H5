###  一，React 安装

```
1.安装create-react-app
npm install -g create-react-app
2.命令自动创建项目， 项目的名字为my-app,可以任意
create-react-app my-app
3.命令窗口中进入项目目录
cd my-app
4.启动项目测试
npm start
5.编译项目
在package.json里添加 "homepage":"./"
命令  npm run build
这会在项目根目录下产生一个build文件目录，该文件目录即其目录下的所有内容就是最终产品，本地可以直接打开的
6.把编译之后的项目托管到node.js服务器上去
```

## 二，目录结构

#### 1，package.json

​        管理下载的依赖包,在项目中经常用到的是"react"库，“react-dom” ，最重要的命令是“start”启动项目，"bulid"的作用就是将项目打包。 

#### 2，public文件夹

###### （1）index.html

​         项目的入口文件，可以引用第三方类库，还可以引入csdn。root是项目的总容器，所有的内容存储在这个容器中。

###### （2）manifest.json

​        当web页面被用于Android主页面使用时的配置文件 。

#### 3，src文件

###### （1）index.js

​       存放的是这个项目的核心内容，也就是我们的主要工作区域。其中，index.js文件是和index.html进行关联的文件的唯一接口 

###### （2）App.js

App类是继承react提供的component ，需要使用render进行渲染 ，return的内容是 jsx 。在这个文件中，只能用一个div容器，如果在div的同级目录添加别的内容，便会报错。 

(3) App.js

## 二、项目简化成最简形式

## 三、自动生成的项目的项目代码介绍

index.html中内容

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
	  注 : 这里的favicon必须是16*16或者32*32的，必须是8位色或者24位色的，
      		格式必须是png或者ico或者gif。
    <meta name="viewport" content="width=device-width, initial-scale=1" />
	 注: 可视区哉的宽度为设备总宽度，缩放取值1.0则页面按实际尺寸显示，无任何缩放
    <meta name="theme-color" content="#000000" />
	 注 :实际上是适配安卓版Chrome状态栏的主题色声明
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
	  注 :这个是实现PWA的配置文件，可以在桌面生成图标，方便下次访问，
      		也可以在断网的情况下继续浏览之前浏览的内容
    <title>React App</title>
  </head>
```

中果是做网页开发，上面head中的内容建议第2和第3个meta



index.js中的内容

其中

import * as serviceWorker from './serviceWorker';

serviceWorker.unregister();

也是为了PWA，可省，但是不提昌