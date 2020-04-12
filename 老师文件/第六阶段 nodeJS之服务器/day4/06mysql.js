// 对于服务器、数据库、客户端这三者之间的操作。启动服务器；将数据库打开；用浏览器打开客户端网页。在客户端页面上进行操作。
// 因为服务器与数据库连接，可以实现客户端通过访问服务器获取数据库中的数据和往数据库中添加数据（这里的登录和注册）
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

let mydb = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: "root",
    password: '123456',
    database: 'mydb'
});

mydb.connect(); //数据库连接成功

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());




app.get("/", (req, res) => {
    res.send("get请求")
})

app.post("/login", (req, res) => {
    let name = req.body.username;
    let pwd = req.body.password;
    console.log(name, pwd);

    let sql = `select * from user where username='${name}'`;
    mydb.query(sql, function(err, data) {
        if(err) {
            console.log(err)
            return;
        }
        console.log(data.length);
        if(!data.length) { //0 --> false
            res.json({"r": "no"})
        } else {
            let sql = `select * from user where username='${name}' and password='${pwd}'`;
            mydb.query(sql, (err, data) => {
                if(err) {
                    return ;
                }
                res.json({"r": "ok"})
            })
        }
    })
})


app.post("/register", (req, res) => {
    let name = req.body.username;
    let pwd = req.body.password;

    let sql = `insert into user(username, password) values('${name}', '${pwd}')`;
    mydb.query(sql, (err, data) => {
        if(err) {
            return;
        }
        console.log(data);
        res.json({r: "ok"})
    })
})

app.post("/change", (req, res) => {
    let name = req.body.username;
    let pwd = req.body.password;

    let sql = `update user set password='${pwd}' where username='${name}'`;
    mydb.query(sql, (err, data) => {
        if(err) {
            return;
        }
        console.log(data);
        res.json({r: "ok"})
    })
})

app.post("/remove", (req, res) => {
    let name = req.body.username;

    let sql = `delete from user where username='${name}'`;
    mydb.query(sql, (err, data) => {
        if(err) {
            return;
        }
        console.log(data);
        res.json({r: "ok"})
    })
})

app.listen(8888, () => {
    console.log("server runing at 8888");
})