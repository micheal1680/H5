// 引入mysql模块
const mysql = require("mysql");

// 创建与数据库的链接
var con = mysql.createConnection({
    host: "localhost",   //MySQL的主机名称
    port: "3306",   //MySQL的端口号
    user: "root",   //用户名
    password: "123456", //密码
    database: "mydb" //要使用的数据库
 });

// 与数据库连接成功
 con.connect();

 //定义sql语句
var sql = "select * from employee;"

// 执行sql语句，参数2是一个函数，表示执行结果，err表示执行失败，result表示执行成功后的结果
// query:执行，查询
con.query(sql, function(err, result) {
    if(err) {
        // return,即返回，不再查询
        return;
    }
    // 查询具体某个数据
    console.log(result[9].name);
})

//定义sql语句
var sql2 = "insert into stu(name, sex, score, type) values('亚索', '男', 85.5, 'LOL');";
con.query(sql2, function(err, result) {
    if(err) {
        return;
    }
    // 查看整张表
    console.log(result);
})

// 在终端的操作是：
// 首先：npm install(简写为i) mysql  (npm i mysql 即用npm在本地下载mysql)
// 然后：nodemon app.js (执行app.js文件，其中nodemon作用是自动重新启动执行该文件)
