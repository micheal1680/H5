const express=require("express");//1、安装和引入
const mysql=require("mysql");//5、引入 mysql
const bodyPaser=require("body-parser");
const multer=require("multer");

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
	res.setHeader("Access-Control-Allow-Headers","content-type");
	next();
})
app.use(bodyPaser.json());//处理前端传递数据为json 格式
app.use(bodyPaser.urlencoded({
	extended:true	//让后端识别urlencoded ，gzip 文件格式
}))

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
		sql+=`and name like '%${req.query.employName}% '`
	}
	
	if(req.query.deptid){
		sql+=`and deptid=${req.query.deptid}`
	}
	
	mydb.query(sql,function(err,result){
		if(err){
			console.log(err);return;
		}
		console.log(sql,result)
		res.json(result)
	})
	
})

app.post("/userLogin",function(req,res){
	var sql=`select * from admin where username='${req.body.username}'`;
	mydb.query(sql,function(err,result){
		if(err)return;
		console.log(result)
		if(result.length==0){
			res.json({
				status:2,
				msg:"用户名输入错误"
			})
		}else{
			if(result[0].username==req.body.username&& result[0].password==req.body.password){
				res.json({
					status:0,
					msg:"登陆成功"
				})
			}else{
				res.json({
					status:1,
					msg:"用户密码输入错误"
				})
			}
		}
		
	})
})

app.get("/getInterView",function(req,res){
	var sql="select * from questions where 1 ";
	
	if(req.query.title){
		sql+=`and title like '%${req.query.title}%'`
	}
	mydb.query(sql,function(err,result){
		if(err){
			console.log(err);return;
		}
		res.json(result)
	})
	
})

app.get("/getProducts",function(req,res){
	var sql="select * from shop_goods where 1 ";
	if(req.query.keyWord){
		sql+=`and kw like '%${req.query.keyWord}%'`
	}
	sql+=" limit 15";
	mydb.query(sql,function(err,result){
		if(err){
			console.log(err);return;
		}
		res.json(result)
	})
})

//cnpm i --save multer
//const multer=require("multer")
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');//存放路径
    },
    filename: function (req, file, cb) {
        cb(null, 
            Date.now() + '_' + 
            Math.random().toString().substring(2, 8)+ '.' + 
            file.originalname.split('.').pop())
    }
});

var upload = multer({
    storage: storage
})

app.post('/imgUpload', upload.array('image'), (req, res) => {
     let imgdata = {"errno": 0};
     imgdata.data = [];
     console.log(req.files);
     // for (let ind = 0; ind < req.files.length; ind++) {
     //     let src = hostname + '/' + req.files[ind].destination + req.files[ind].filename;
		   // //返回给富文本编辑框图片的
     //     imgdata.data.push(src);
     // }
    // res.json(imgdata);
 });

//3、监听服务
app.listen(8888,function(){
	console.log("服务开启，监听端口8888……")
})