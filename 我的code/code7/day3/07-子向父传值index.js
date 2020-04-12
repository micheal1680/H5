const express=require("express");
const mysql=require("mysql");
const bodyParser=require("body-parser")

var mydb=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"123456",
    database:"my"
});
mydb.connect()

// 创建服务
const app=express();
// 处理跨域
app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","content-type");
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

// 开辟路由
app.get("/getData",function(req,res){//4、开辟路由
	console.log("接收到前端发起的/getData 请求");
	res.json({
		data:"请求成功"
	})
})
app.get("/getEmployees",function(req,res){
    console.log("接收到起前端发起的/getEmployees 请求");
    console.log(req.query.employName);
    // 注意此处，sql语句最后1后面要加一个空格，否组加上下面的sql语句之后得到的是
    // select * from employee where 1and name like '%詹%'，是错误的
    var sql="select * from employee where 1 ";

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
app.post("/userLogin",function(req,res){
    var sql=`select * from user where username='${req.body.username}'`;
    mydb.query(sql,function(err,result){
        if(err)return;
        if(result.length==0){
            res.json({
                status:2,
                msg:"用户名输入有错"
            })
        }else{
            // result默认得到是数组
            if(result[0].username==req.body.username&&result[0].password==req.body.password){
                res.json({
                    status:0,
                    msg:"登录成功"
                })
               
            }else{
                res.json({
                    status:1,
                    msg:"密码输入错误"
                })
            }
        }
    })
})
app.get("/getInter",function(req,res){
    var sql="select * from a_country where 1 "

    if(req.query.name){
        sql+=`and name like '%${req.query.name}%'`
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
app.get("/getPerson",function(req,res){
    var sql="select * from a_president where 1 "
    if(req.query.keyWord){
        sql+=`and name like '%${req.query.keyWord}%'`
    }
    sql+="limit 2";
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
