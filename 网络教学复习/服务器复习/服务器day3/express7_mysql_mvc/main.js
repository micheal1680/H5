const express = require("express");//导入express
const app = express();
app.use(express.static(__dirname+"/public"));//静态文件存放目录 
//设置处理post请求参数
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

const ClazzController = require("./controller/ClazzController.js");
const clazzController = new ClazzController();
app.post("/Clazz.do",function(req, res){
	let method = req.body.method;
	if(method=="queryAll") {
		clazzController.queryAll(req,res)
	}else if(method="delete") {
		
	}
})

 
var server = app.listen(3000, function () {
  console.log("服务器正在监听客户端的请求3000端口");
})