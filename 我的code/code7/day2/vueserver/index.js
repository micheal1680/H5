const express=require("express");
const mysql=require("mysql");

var mydb=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"123456",
    database:"mycloth"
});
mydb.connect()

// 创建服务
const app=express();
// 处理跨域
app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    next();
})

// 开辟路由
app.get("/getData",function(req,res){//4、开辟路由
	console.log("接收到前端发起的/getData 请求");
	res.json({
		data:"请求成功"
	})
})
app.get("./getEmployees",function(req,res){
    console.log("接收到起前端发起的/getEmployees 请求");
    console.log(req.query.employName);
    var sql="select * from employee where 1";

    if(req.query.employName){
        sql+=`and name like '%${req.query.employName}%'`
    }

    mydb.query(sql,function(err,result){
        if(err){
            console.log(err);
            return;
        }
        console.log(sql,result);
        res.json(result)
    })
})

app.listen(8888,function(){
    console.log("启动服务器，监听端口号8888")
})
