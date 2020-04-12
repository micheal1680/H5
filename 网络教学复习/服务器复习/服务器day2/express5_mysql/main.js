const express = require("express");//导入express
const app = express();
app.use(express.static(__dirname+"/public"));//静态文件存放目录 
//导入连接池对象pool, require中的路径是相对路径
const pool = require("./util/mysqlutil.js")

app.get("/showAllClazz.do", (req, res)=>{
	pool.getConnection((err, conn)=>{
		if(err) {//连接失败
			throw err;
		}else {//连接成功
			const sql = "select id, name, major, birth from clazz";
			conn.query(sql, [], (e, clazz)=>{
				if(e) {//执行sql失败
					throw e;
				}else {//执行sql成功
					res.json(clazz);//clazz是一个对象数组 [{id:1,name:'fasd',major:'df',birth='1920-....'},{...}]
				}
			})
		}
	}); 
});

// app.get("/showAllClazz.do", function(req, res){
// 	pool.getConnection(function(err, conn){
// 		if(err) {
// 			throw err;
// 		}else {
// 			const sql = "select id, name, major, birth from clazz";
// 			conn.query(sql, [], function(e, clazz){
// 				res.json(clazz);
// 			})
// 		}
// 	}); 
// });


// //查找clazz表中的所有记录
// function getAllClazz() {
// 	//conn就是连接对象
// 	pool.getConnection(function(err, conn){
// 		if(err) {//如果连接失败,则err的值不为null
// 			throw err;
// 		}else {//连接成功
// 			const sql = "select id, name, major, birth from clazz";//sql语句
// 			//执行sql语句
// 			conn.query(sql,[], function(e, clazz){
// 				console.log(clazz);//得到一个对象数组
// 			})
// 		}
// 	});
// 	console.log("执行.....");
// }
// //调用函数
// getAllClazz();

var server = app.listen(3000, function () {
  console.log("服务器正在监听客户端的请求3000端口");
})