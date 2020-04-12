const express = require("express");
// const app = express();
// app.get()
const router = express.Router();

const mysql = require("mysql");
const mydb = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123456",
    database: "mydb"
});
mydb.connect();


router.get("/login", (req, res) => {
    let name = req.query.username;
    let pwd = req.query.password;
    // 定义sql语句
    let sql = `select * from user where username='${name}'`;
    // 执行sql语句
    mydb.query(sql, (err, data) => {
        if(err) { //查询出错
            console.log(err);
            return;
        }
        if(!data.length) { //没有查询到用户，data数组长度为0，取反为true
            res.send({code: -1, msg: "用户不存在"});
            return;
        }
        if(data[0].password != pwd)  { //密码错误  data是数组，若存在用户，那么可以得到一条记录，则data[0]表示得到的记录 
            res.send({code: 0, msg: "密码错误"});
            return;
        }
        // 查询成功：用户名、密码都正确
        res.send({code: 1, msg: "登录成功"});
    })
})

router.get("/register", (req, res) => {
    let userdata = req.query;
    console.log("userdata-----" + JSON.stringify(userdata));

    let sql =  `select * from user where username='${userdata.username}'`;
    mydb.query(sql, (err, data) => {
        if(err) {
            console.log("查询出错");
            return;
        }
        if(data.length) {
            res.send({code: -2, msg: "用户已存在"})
        } else {
            let sql = `insert into user(username, password) values(?,?)`;
            mydb.query(sql, [userdata.username, userdata.password], (err, data) => {
                if(err) {
                    console.log("插入数据失败")
                    return ;
                }
                console.log(data);
                if(data.affectedRows) {
                    res.send({code: 2, msg: "用户注册成功"})
                } else {
                    res.send({code: -3, msg: "注册失败"})
                }
            })
        }
    })

    // res.send({code: 1, msg: "注册成功"});
})

module.exports = router;

