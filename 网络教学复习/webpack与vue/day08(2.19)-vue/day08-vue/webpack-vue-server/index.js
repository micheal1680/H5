

var express=require("express");
var mysql=require("mysql")
var bodyParser=require("body-parser");

var app=express();
var mydb=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    port:'3306',
    database:"h5db"
})

mydb.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

//设置跨域访问
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
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


//根据用户关键词--名字,显示对应的员工信息
app.get("/getEmployee",function(req,res){
	console.log(req.query.keyWord);
	
	var sql=`select * from employee where 1 `;
	if(req.query.keyWord){
		sql+=`and name like '%${req.query.keyWord}%'`
	}
	mydb.query(sql,function(error,result){
		if(error){
			console.log(error);return ;
		}
		console.log(sql);
		res.send(result)
	})
	
})


app.listen(8888,function(){
    console.log("监听8888端口中....")
})