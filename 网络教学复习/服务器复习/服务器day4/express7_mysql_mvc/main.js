const express = require("express");//导入express
const app = express();
app.use(express.static(__dirname+"/public"));//静态文件存放目录 
//设置处理post请求参数
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

const ClazzController = require("./controller/ClazzController.js");
const clazzController = new ClazzController();
const StuController = require("./controller/StuController.js");
const stuController = new StuController();

app.post("/Clazz.do",function(req, res){
	let method = req.body.method;
	if(method=="queryAll") {
		clazzController.queryAll(req,res)
	}else if(method=="delById") {
		clazzController.deleteById(req,res)
	}else if(method=="updateClazz") {
		clazzController.updateClazz(req,res)
	}else if(method=="addClazz") {
		clazzController.addClazz(req,res)
	}
})
app.post("/Stu.do", function(req, res){
	let method = req.body.method;
	if(method=="queryStuByClazzId") {
		stuController.showStuByClazzId(req,res);
	}
})

 
var server = app.listen(3000, function () {
  console.log("服务器正在监听客户端的请求3000端口");
})