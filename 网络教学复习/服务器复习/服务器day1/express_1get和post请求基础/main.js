const express = require("express");//导入express
const ejs = require('ejs');//导入ejs
const app = express();
//设置网页的后缀名为html
app.set('view engine','html');
app.engine('.html', require('ejs').__express);
//调用html存放的目录
app.set('views', __dirname+"/views");

//使用 http://localhost:3000/fs/main 来访问main.html
app.get("/", function(req,res){
	res.render("main");//响应main.html
});
app.get("/stu", function(req, res){
	res.render("stu");//响应stu.html
})
//启动服务器
var server = app.listen(3000, function () {
  console.log("服务器正在监听客户端的请求3000端口");
})