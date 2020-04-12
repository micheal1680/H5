const express=require("express");//1、安装和引入
const mysql=require("mysql");//5、引入 mysql

//6、mysql 连接对象
var mydb=mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"root",
	password:"root",
	database:"h5db"
})
mydb.connect();//7、发起数据库连接


var app=express();//2、创建
//9、处理跨域
app.use(function(req,res,next){
	res.setHeader("Access-Control-Allow-Origin","*");
	next();
})

//8、创建路由
app.get("/getData",function(req,res){//4、开辟路由
	console.log("接收到前端发起的/getData 请求");
	res.json({
		data:"请求成功"
	})
})

app.get("/getEmployees",function(req,res){
	console.log("接收到前端发起的/getEmployees 请求");
	console.log(req.query.employName);
	var sql="select * from employee where 1 ";
	
	if(req.query.employName){
		sql+=`and name like '%${req.query.employName}%'`
	}
	
	mydb.query(sql,function(err,result){
		if(err){
			console.log(err);return;
		}
		console.log(sql,result)
		res.json(result)
	})
	
})


//3、监听服务
app.listen(8888,function(){
	console.log("服务开启，监听端口8888……")
})