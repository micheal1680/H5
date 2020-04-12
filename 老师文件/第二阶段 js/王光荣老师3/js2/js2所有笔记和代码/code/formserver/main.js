const express = require("express");
const ejs = require('ejs');
const app = express();
//设置ejs
app.set('view engine','html');
app.engine('.html', require('ejs').__express);
//设置视图
app.set('views', __dirname+"/views");
//设置静态资源
app.use(express.static(__dirname+"/public"));
//设置处理post请求参数
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

app.get("/regist.do", function(req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.json("得到数据");
});

app.get("/regist2.do", function(req, res) {
	console.log(req.query.name);
	console.log(req.query.pwd);
	console.log(req.query.sex);
	console.log(req.query.like);
	console.log(req.query.province);
	console.log(req.query.file);
	res.render("xxxx");
});

app.listen(9999, function() {
	console.log("服务器正在监听中");
});