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
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', "*");
	next();
})

//创建路由
app.get("/login", function (req, res) {

	var mysql = `select * from admin where username='${req.query.username}'`
	mydb.query(mysql, function (err, result) {
		if (err) {
			console.log(err); return;
		}
		if (result.length == 0) {
			res.send({
				code: 1,//登陆失败的状态码
				msg: "用户名不存在"
			})
		} else {
			if (req.query.passwd != result[0].password) {
				res.send({
					code: 1,
					msg: "密码错误"
				})
			} else {
				res.send({
					code: 0,
					msg: "恭喜您,登陆成功"
				})
			}
		}
	})
})

app.get("/Reg", function (req, res) {
	var selsql = `select * from admin where username='${req.query.username}' `;
	mydb.query(selsql, function (err, result) {
		if (err) {
			console.log(err); return;
		}
		if (result.length != 0) {
			res.send({
				code: -2,//登陆失败的状态码
				msg: "用户名已存在"
			})
		} else {
			var regsql = `insert into admin(username,passwd) value('${req.query.username}','${req.query.passwd}')`;
			mydb.query(regsql, function (err, result) {
				if (err) {
					console.log(err);
					return;
				}
				res.send({
					code: 2,
					msg: "恭喜你，注册成功!"
				})
			})
		}
	})
});

//查询展示
// 所有用户列表展示
app.get("/list",function(req,res){
    var listsql=`select * from admin`;
    mydb.query(listsql,function(err,result){
        if(err){
            console.log(err);
            return;
        }
        if(result.length!=0){
            console.log('result----'+result)
            res.send(result)
        }
    })
})

//根据用户关键词--名字,显示对应的员工信息
app.get("/getData",function(req,res){
	console.log(req.query.keyword);
	console.log(req.query.deptid)
	
	var sql=`select * from employee where 1 `;
	if(req.query.keyword){
		sql+=`and name like '%${req.query.keyword}%' `
	}
	if(req.query.deptid){
		sql+=`and deptid=${req.query.deptid}`
	}
	mydb.query(sql,function(error,result){
		if(error){
			console.log(error);return ;
		}
		console.log(sql);
		res.send(result)
	})
	
})

//分页获取

app.get("/getlimit",function(req,res){
	var pagenum=10;
	var n=req.query.n;
	var start= (n-1)*pagenum;
	var end=pagenum;
	var sql="select * from e limit ?,?"
	var sql_p=[start,end]
    mydb.query(sql,sql_p,function(err,result){
        if(err){
            console.log(err);
            return;
        }
       res.send(result);
    })
})
//删除
app.get("/del",function(req,res){
    var delsql=`delete from admin where aid = ${req.query.id} `
    
    mydb.query(delsql,function(err,result){
        if(err){
            console.log(err);
            return;
        }
        if(result.length!=0){
            res.send({
                code:0,
                msg:"删除成功！"
            })
        }else{
            res.send({
                code:1,
                msg:"删除失败！"
            })
        }
    })
})

//更新

// // 修改用户信息
// app.post("/update",function(req,res){

//     var updatesql=`update admin set username ='${res.query.username}' ,passwd = '${res.query.passwd}' where aid = ${res.query.id}`;
 
//     mydb.query(updatesql,function(err,result){
//         if(err){
//             console.log(err);
//             return;
//         }
//         if(result.length!=0){
//             res.send({
//                 code:0,
//                 msg:"修改成功！"
//             })
//         }else{
//             res.send({
//                 code:1,
//                 msg:"修改失败！"
//             })
//         }
//     })

// })


app.listen(8081, function () {
	console.log("后端服务已经开启,8081端口……")
})
