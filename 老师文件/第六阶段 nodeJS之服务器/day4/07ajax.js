// 思路：将需要用到的图片的网络地址做为一个字段在数据库中存储起来，且为图片命一个title值，其也作为一个字段。形成一张表。
// ajax服务器连接该表所在的数据库，以获取数据库中的数据，ajax.html是客户端，在网页上进行选图操作，客户端通过服务器获取数据库中的信息
const express = require("express");
const app = express();

const mysql = require("mysql");

let mydb = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: "root",
    password: '123456',
    database: 'mydb'
});

mydb.connect(); //数据库连接成功

// 跨域处理
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });

app.get("/index", (req, res) => {
    // 取出参数，根据参数查询结果，显示到页面
    let title = req.query.title;
    console.log(title);
    let sql = `select * from list where title like '%${title}%'`;
    mydb.query(sql, (err, data) => {
        if(err) {
            return;
        }
        console.log(data);
        res.json(data);
    })
})

app.listen(8888, () => {
    console.log("server run at 8888....")
})