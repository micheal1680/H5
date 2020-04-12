# 一、介绍egg

node框架，习惯优先

# 二、创建项目

1.创建一个目录，当作项目名字

2.进入上一步创建的项目目录

```
$ npm init
$ npm i egg --save
$ npm i egg-bin --save-dev
```

3.项目创建后，会生成package.json文件，在文件的"scripts":{}中加入 "dev":"egg-bin dev"

```
{
  "name": "hellowolrd",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
	"dev": "egg-bin dev"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "egg": "^2.26.0",
    "egg-bin": "^4.14.0"
  }
}

```

4.在项目下创建config目录，在config目录下创建文件config.default.js

在config.default.js上加入内容

```
exports.keys = "dfbgffdsafddgfd";
```

该keys的值是任意的字符串，是必须是，它是cookie加密的盐

# 三、静态资源文件

1.在项目下创建app目录，在app目录下创建public目录.

public就是静态资源目录，该目录下可以放html，css, js, 图片等静态资源，启动项目后，访问静态资料的url为 http://localhost:7001/public/文件路径

2.示例:

![1576549792431](img\1576549792431.png)

3.启动项目:   

在命令窗口中进入项目目录，输入命令： npm run dev

4.在浏览器上输入网址: http://localhost:7001/public/hello.html

# 四、控制器及其路由

1.创建目录 /app/controller

2.创建js文件  /app/controller/hello.js； 创建js文件 /app/controller/stu.js

```js
const Controller = require('egg').Controller;
class HelloController extends Controller {
	async getHello() {
		this.ctx.response.body = "这是Hello!";
	}
}
module.exports = HelloController;
```

```js
const Controller = require('egg').Controller;
class StuController extends Controller {
	async show1() {
		this.ctx.response.body = "这是get得到的信息";
	}
	async show2() {
		this.ctx.response.body = "这是post得到的信息";
	}
}
module.exports = StuController;
```

3.创建路由app/router.js

router的get或post方法有两个参数，参数1是请求url,参数2为controller.文件名.方法名

```js
module.exports = app => {
  const { router, controller } = app;
  //get请求
  router.get('/hello', controller.hello.getHello);
  router.get('/show1', controller.stu.show1);
  //post请求
  router.post('/show2', controller.stu.show2);
};
```

4.在config/config.default.js中加入关闭安全验证的，否则post无法请求成功

```
exports.security = {
  csrf: false
};
```

# 五、得到上下文件对象

在Controller或Service中使用this.ctx即可获取到

六、获取请求参数

对于get请求，使用 ctx.request.query.key；

对于post请求，使用ctx.request.body.key;

示例:

```js
//app/controller/stu.js
const Controller = require('egg').Controller;
class StuController extends Controller {
	async show1() {
		//接收请求参数
		console.log(this.ctx.request.query.name, this.ctx.request.query.age);
		this.ctx.response.body = "这是get得到的信息";
	}
	async show2() {
		console.log(this.ctx.request.body.name, this.ctx.request.body.age);
		this.ctx.response.body = "这是post得到的信息";
	}
}
module.exports = StuController;
```

客户端发出ajax请求时，可以使用axios框架

```js
			function show1() {
				axios.get('/show1', {
						params: {
							name: '史湘云',
							age: 100
						}
					})
					.then(function(response) {
						dataDiv.innerHTML = response.data;
					})
					.catch(function(error) {
						dataDiv.innerHTML = "有错show1";
					})
			}

			function show2() {
				axios.post('/show2', {
						name: '秦可卿',
						age: 200
					})
					.then(function(response) {
						dataDiv.innerHTML = response.data;
					})
					.catch(function(error) {
						dataDiv.innerHTML = "有错show2";
					})
			}
```

# 六、Serivce业务层

Controller和Service都是egg的内置对象, 就像所有控制层必须放在app/controller目录中一样，所有的service层都必须放在app/service目录中，所以开发service层第一步就是在app中创建目录service

示例：

1.创建目录app/service

2.创建stu.js

```js
const Service = require('egg').Service;
class StuService extends Service {
  async getAllStu() {
    return [{id:1, name:"巧姐"},{id:2, name:'贾探春'}];
  }
}
module.exports = StuService;


```

3.创建app/controller/stu.js

```js
const Controller = require('egg').Controller;
class StuCon extends Controller {
	async showAllStu() {
         //ctx.service.文件名.方法名, 调用service方法时，前面一定要加上await
		let stuList = await this.ctx.service.stu.getAllStu();
		this.ctx.response.body = stuList;
	}
}
module.exports = StuCon;
```

# 七、获取请求参数

```js

```

# 八、内置对象有

egg内置对象有：

Application、Context、Request&Response、Controller、Service、Helper、Config、Logger

### 1.Context

获取：service或controller中使用this.ctx;

### 2.Application

2.1获取：ctx.app或this.app

2.2为Application对象加入对象属性和方法

在项目目录下创建app.js

```js
module.exports = app => {
	app.wgr = "王光荣";
	app.show = () => {
		console.log(app.wgr);
	};
	....
```

在service或context中可以使用
this.app.wgr或this.app.show()

### 3、Request & Response

1.获取
this.ctx.request
this.ctx.response
2.获取get请求参数
ctx.request.query.id 和 ctx.query.id 是等价的，
3.获取 POST 的请求参数
ctx.request.body.id，而不是 ctx.body.id。
4.获响应
ctx.response.body= 和 ctx.body= 是等价的

### 4、内置对象helper

1.获取 ctx.helper
2.自定义helper

```js
app/extend/helper.js
module.exports = {
  help() {
    return '这是调用了helper中的 方法';
  }
};
```

### 5、Config

1.获取
app.config
Controller, Service, Helper 中this.config。
2.config/config.default.js

```js
exports.keys = "fdsafdsafdsa";
exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i,
  ]
};
```

3.service或controller中
this.config.robot

### 6、Logger

框架内置了功能强大的[日志功能](https://eggjs.org/zh-cn/core/logger.html)，可以非常方便的打印各种级别的日志到对应的日志文件中，每一个 logger 对象都提供了 4 个级别的方法：

- `logger.debug()`
- `logger.info()`
- `logger.warn()`
- `logger.error()`

在框架中提供了多个 Logger 对象，下面我们简单的介绍一下各个 Logger 对象的获取方式和使用场景。

App Logger

我们可以通过 `app.logger` 来获取到它，如果我们想做一些应用级别的日志记录，如记录启动阶段的一些数据信息，记录一些业务上与请求无关的信息，都可以通过 App Logger 来完成。

App CoreLogger

我们可以通过 `app.coreLogger` 来获取到它，一般我们在开发应用时都不应该通过 CoreLogger 打印日志，而框架和插件则需要通过它来打印应用级别的日志，这样可以更清晰的区分应用和框架打印的日志，通过 CoreLogger 打印的日志会放到和 Logger 不同的文件中。

Context Logger

我们可以通过 `ctx.logger` 从 Context 实例上获取到它，从访问方式上我们可以看出来，Context Logger 一定是与请求相关的，它打印的日志都会在前面带上一些当前请求相关的信息（如 `[$userId/$ip/$traceId/${cost}ms $method $url]`），通过这些信息，我们可以从日志快速定位请求，并串联一次请求中的所有的日志。

CoreLogger

我们可以通过 `ctx.coreLogger` 获取到它，和 Context Logger 的区别是一般只有插件和框架会通过它来记录日志。

Controller Logger & Service Logger

我们可以在 Controller 和 Service 实例上通过 `this.logger` 获取到它们，它们本质上就是一个 Context Logger，不过在打印日志的时候还会额外的加上文件路径，方便定位日志的打印位置。

### 7、Controller

ctx - 当前请求的 Context 实例。this.ctx
app - 应用的 Application 实例。this.ctx.app
config - 应用的配置。this.config
service - 应用所有的 service。this.ctx.service
logger - 为当前 controller 封装的 logger 对象。



# 九、mysql操作:

```js
]1.$ npm i --save egg-mysql
]2.配置
//config/plugin.js
exports.mysql = {
	enable:true,
	package:'egg-mysql',
}
//config/config.default.js
exports.mysql = {
  client: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'node',
  },
};
3.service中使用
// app/service/news.js
const Service = require('egg').Service;
class StuService extends Service {
  async getAllStu() {
	// //获取配置数据
	let stuList = await this.ctx.app.mysql.query("select id, name, sex from stu where id>? and id<?", [0, 100]);
    return stuList;
  }
}
module.exports = StuService;
```

# 十、Cookie

ctx.cookies.set("key",value, {maxAge:1000, encrypt:true});

ctx.cookies.get("key",{encrypt:true});

ctx.cookies.set("key", null);

ctx.status=204

# 十一、session

let value = ctx.session.key;

ctx.session.key=value;

ctx.session=null;



session默认配置如下

```js
exports.session = {
  key: 'EGG_SESS',
  maxAge: 24 * 3600 * 1000, // 1 天
  httpOnly: true,
  encrypt: true,
};
```

我们在config/config.default.js中重新配置覆盖默认配置

还可以使用代码修改session的生效时间 `tx.session.maxAge=` 来实现。 

# 十二、文件ajax上传

> 0.预备知识点：
>
> 0.1
>
> __dirname:当前文件所在目录的字符串表示
>
> 0.2
>
> const path  = require("path");
>
> path.dirname("路径");表示获取路径中最后一段文件或目录所在的路径
>
> 示例:
>
> path.dirname("F:\app\controller"); 得到的值为"F:\app"
>
> path.dirname("F:\app\controller\stu.js");得到的值为"F:\app\controller"
>
> 0.3
>
> path.basename("路径");表示获取路径中最后一段目录和文件
>
> 示例：
>
> path.basename("F:\app\controller"); 得到的值为"F:\app"
>
> path.dirname("F:\app\controller\stu.js");得到的值为"F:\app\controller"
>
> ## basename()方法



1.加入配置

config/config.default.js

```js
exports.multipart = {
	mode: 'file',
};
//加上后post请求才能成功,文件上传才能成功 1
exports.security = {
	csrf: {
		enable: false,
		ignoreJSON: true
	} 
};
```

2.在public下创建upload，用于保存上传的文件，该目录的名字可以任意，不必一定启名了upload

3.控制器代码

```js
// app/controller/upload.js
const Controller = require('egg').Controller;
const fs = require('fs');
const path  = require("path");

module.exports = class extends Controller {
  async upload() {
    const { ctx } = this;
	/**
	 file对象的值为:
	{
	  field: 'file',
	  filename: 'aab.jpg',//被上传的文件名
	  encoding: '7bit',
	  mime: 'image/jpeg',
	  fieldname: 'file',
	  transferEncoding: '7bit',
	  mimeType: 'image/jpeg',
	  filepath: 'C:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\egg-multipart-tmp\\updatefile\\2019\\12\\18\\14\\e6fd6a98-b374-4
	  c3d-81bb-8da3319d42be.jpg'
	}
	 */
    const file = ctx.request.files[0];
	const toFileName = '/public/upload/'+Date.now()+file.filename;
	/**to的值为:  <路径>\项目名\app/public/upload/保存时的文件名字*/
	let to = path.dirname(__dirname)+toFileName;
	//file.filepath是上传的临时文件
	//把临时文件写入到文件to
	await fs.copyFileSync(file.filepath, to);
	//删除临时文件
	await fs.unlinkSync(file.filepath);
	//上传文件的网络访问 url
	const newUrl = "http://localhost:7001"+toFileName;
	//返回
    ctx.body = newUrl; 
  }
};
```

4.路由

```js
// app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.post('/upload', controller.uploadController.upload)
};
```

5.ajax上传的客户端 app/public/ajaxupload.html代码, 示例中分为jquery方式和axios方式

```js
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Title</title>
		<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js">
		</script>
		<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
		<script type="text/javascript">
			//jquery的ajax文件上传
			function jqueryupload() {
				let file = document.getElementById("choose").files[0];
				// 验证文件后缀名是否为图片,否则是可以上传任何文件
				// let finename = file["name"];
				// console.log(finename);
				// let patt=/.+(.JPEG|.jpeg|.JPG|.jpg|.PNG|.png)$/;
				// let result=patt.test(finename);
				// if(!result) {
				// 	alert("图片格式不对");
				// 	return;
				// }
				let formData = new FormData();
				formData.append("fileData", file);
				$.ajax({
					type: 'POST',
					url: '/upload',
					data: formData,
					async: false,
					cache: false,
					contentType: false,
					processData: false,
					success: function(data) {
						$(".newImg").attr("src", data);
					},
					error: function(err) {
						console.log(err.message);
					}
				})
			}
		</script>
		<script type="text/javascript">
			//axios的ajax上传
			function axiosupload() {
				let file = document.getElementById("choose").files[0];
				// 验证文件后缀名是否为图片,否则是可以上传任何文件
				// let finename = file["name"];
				// console.log(finename);
				// let patt=/.+(.JPEG|.jpeg|.JPG|.jpg|.PNG|.png)$/;
				// let result=patt.test(finename);
				// if(!result) {
				// 	alert("图片格式不对");
				// 	return;
				// }
				let formData = new FormData();
				formData.append("uploadFile", file, file.name);
				const config = {
					headers: {
						"Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
					}
				};
				axios
					.post("/upload", formData, config)
					.then(function(response) {
						document.getElementsByClassName("newImg")[0].src=response.data;
						console.log(response);
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		</script>
	</head>
	<body>
		<input type="file" id="choose" />
		<br />
		<button onclick="jqueryupload()">jquery上传</button>
		<br />
		<button onclick="axiosupload()">axios上传</button>
		<br />
		<img class="newImg" />
	</body>
</html>
```

6.表单上传的客户端  app/public/formupload.html

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<form method="POST" action="/upload" enctype="multipart/form-data">
		  file: <input name="file" type="file" /><button type="submit">Upload</button>
		</form>
	</body>
</html>
```



# 十三、跨域

1.修改默认的端口号

在config/config.default.js中配置

```js
exports.cluster = {
      listen: {
        port: 8000
      }
  };
```

2.三步搞定

(1)npm i egg-cors --save

(2)在app/config/plugin.js

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

(3)在app/config/config.default.js

exports.cors = {
	  origin:'*',
	  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',

};



如果是cookie跨域:

(1)npm i egg-cors --save

(2)在app/config/plugin.js

exports.cors = {
  	enable: true,
  	package: 'egg-cors',

   	domainWhiteList: ['http://127.0.0.1:7002'], 

};

(3)在app/config/config.default.js

exports.cors = {
	  origin:'http://127.0.0.1:7002',
	  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',

 	  // 该属性允许cookie跨域
  	 credentials: true

};

# 





