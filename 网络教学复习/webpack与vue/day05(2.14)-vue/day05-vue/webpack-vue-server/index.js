const express = require("express");
const mysql = require("mysql");

var mydb = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "root",
	database: "h5db"
});
mydb.connect();
var app = express(); //创建后端服务

//处理跨域
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', "*");
	next();
})

//创建路由
app.get("/login", function(req, res) {

	var mysql=`select * from admin where username='${req.query.username}'`
	mydb.query(mysql,function(err,result){
		if(err){
			console.log(err);return;
		}
		if(result.length==0){
			res.send({
				status:1,//登陆失败的状态码
				msg:"用户名不存在"
			})
		}else{
			if(req.query.password!=result[0].password){
				res.send({
					status:1,
					msg:"密码错误"
				})
			}else{
				res.send({
					status:0,
					msg:"恭喜您,登陆成功"
				})
			}
		}
	})
})


app.listen(8888, function() {
	console.log("后端服务已经开启,8888端口……")
})
