

var express=require("express");
var mysql=require("mysql")
var bodyParser=require("body-parser");

var app=express();
var mydb=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    port:'3306',
    database:"myh5db"
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


// 登录验证
app.get("/user",function(req,res){
    var username=req.query.username;
    var password=req.query.password;
    console.log(username,password);
    var sql=`select * from admin where username='${username}'`
    mydb.query(sql,function(err,result){
        if(err){
            console.log("错误查询="+err);
            return;
        }
        if(result.length!=0){
            if(result[0].password==password){
                res.send({
                    status:0,
                    msg:"登陆成功"
                })
            }else{
                res.send({
                    status:1,
                    msg:"密码错误"
                })
            }
        }else{
            res.send({
                status:1,
                msg:"该用户不存在"
            })
        }
    })
})

// 注册
app.post("/regist",function(req,res){
    var username=req.body.username;
    var password=req.body.password;

	//注册:1\检查用户名是否已经存在
	//	   2(1)\查--有-->已存在
	//	   2(2)\查-没有-->添加insert
	//	   3\insertsql
	
    var sql=`select * from admin where username='${username}' `;

    mydb.query(sql,function(err,result){
        if(err){
            console.log("错误查询="+err);
            return;
        }
        if(result.length!=0){
            res.send({
                status: 1,
                msg: "用户名已存在，请重新输入！"
            })
        }else{
            var sql=`insert into admin(username,password) value('${username}','${password}')`;
            mydb.query(sql,function(err,result){
                if(err){
                    console.log("错误查询="+err);
                    return;
                }
                res.send({
                    status: 0,
                    msg:"恭喜你，注册成功!"
                })
            })
            
        }
    })
})

// 所有用户列表展示
app.get("/list",function(req,res){
    var sql=`select * from admin`;
    mydb.query(sql,function(err,result){
        if(err){
            console.log("错误查询="+err);
            return;
        }
        // if(result.length!=0){
            console.log('result----'+result)
            res.send(result)
        // }
    })
})


// 删除用户
app.get("/delete",function(req,res){
    var userId=req.query.ID;
    var sql=`delete from admin where id = ${userId} `
    mydb.query(sql,function(err,result){
        if(err){
            console.log("错误查询="+err);
            return;
        }
        if(result.length!=0){
            res.send({
                status:0,
                msg:"删除成功！"
            })
        }else{
            res.send({
                status:1,
                msg:"删除失败！"
            })
        }
    })
})

// 修改用户信息
app.post("/modify",function(req,res){
    var id=req.body.userId;
    var username=req.body.username;
    var password=req.body.password;
	
	//1/ 拿到前端传递的参数:id,修改之后的username/password
	//2/ update 修改mysql 里的数据
    var sql=`update admin set username ='${username}' ,password = '${password}' where id = ${id}`;
    mydb.query(sql,function(err,result){
        if(err){
            console.log("错误查询="+err);
            return;
        }
        if(result.length!=0){
            res.send({
                status:0,
                msg:"修改成功！"
            })
        }else{
            res.send({
                status:1,
                msg:"修改失败！"
            })
        }
    })

})


app.listen(8888,function(){
    console.log("监听8888端口中....")
})