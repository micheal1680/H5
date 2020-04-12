const express = require("express");//导入express
const app = express();
app.use(express.static(__dirname+"/public"));//静态文件存放目录 

//设置处理post请求参数
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));


//响应string
app.post("/getSimpleData.do", function(req, res){
	//接收post请求的参数
	console.log(req.body.id,req.body.name);
	res.json("这是服务器的数据");
});

//响应对象
app.get("/getObj.do", function(req,res){
	//接收get请求的参数
	console.log(req.query.id, req.query.name);
	let person = {
		id:12,
		name:'曾士强',
		sex:'男'
	}
	res.json(person);
});
//响应数组
app.post("/getArray.do", function(req, res){
	let a = ['小明', '探春', '大人'];
	res.json(a);
})
//响应对象数组
app.post("/getObjArray.do", function(req, res){
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