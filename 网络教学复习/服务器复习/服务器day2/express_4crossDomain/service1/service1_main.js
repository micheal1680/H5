const express = require("express");//导入express
const app = express();
app.use(express.static(__dirname+"/public"));//静态文件存放目录 
//设置处理post请求参数
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
 
//响应对象数组
app.post("/getObjArray.do", function(req, res){
	//可以让域为localhost:4000来访问
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000");
	let a = [
		{id:12, name:'曾士强', sex:'男'},
		{id:13, name:'老良', sex:'男'},
		{id:14, name:'张召钟', sex:'男'}
	];
	res.json(a);
})

var server = app.listen(3000, function () {
  console.log("服务器正在监听客户端的请求3000端口");
})