const express = require("express");

const app = express();

// 跨域处理
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });

/*
user是公共的， login、register是子路由
    http://localhost:3000/user/login
    http://localhost:3000/user/register
*/
//当路由地址中有user路径时，使用UserController来处理内部的所有请求
app.use("/user", require("./Controller/UserController"))


app.listen(3000, () => {
    console.log("server run at 3000");
})