const express = require("express");//导入express
const app = express();
app.use(express.static(__dirname+"/public"));//静态文件存放目录 
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

const path = require('path');//不需要下载, path是属于node.js的内置模块
const upload = require("./multerUtil.js")//用于文件上传

//过滤器, 
app.use("/*", function(req, res, next){
		//设置跨域时，客户端域名
		// res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		res.setHeader("Access-Control-Allow-Origin", "*");
		next();//往下走
})


//文件上传
app.post('/profile.do', upload.single('fileData'), function(req, res, next) {
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	//向客户端响应一个网络访问上传文件的URL: http://192.168.7.130:4000/uploads/243213243.png 
	let url = 'http://localhost:4000/uploads/' + path.basename(req.file.path);//
	res.json({filePath: url});
});

//响应string
app.post("/getSimpleData.do", function(req, res){
	// res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	//接收post请求的参数
	console.log(req.body.id,req.body.name);
	res.json("这是服务器的数据");
});
 
//响应对象数组
app.post("/getObjArray.do", function(req, res){
	// res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	let a = [
		{id:12, name:'曾士强', sex:'男'},
		{id:13, name:'老良', sex:'男'},
		{id:14, name:'张召钟', sex:'男'}
	];
	res.json(a);
})

var server = app.listen(4000, function () {
  console.log("服务器4000端口");
})



