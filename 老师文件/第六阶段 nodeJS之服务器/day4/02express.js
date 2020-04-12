// 引入express模块   需要先下载模块到本地
const express = require("express");

// 应用express对象，用来处理各种请求
const app = express();

//get()用于处理get请求
// 处理以下两个请求。当访问localhost:9999时响应第一个请求；当访问localhost:9999/login时响应第二个请求
// 请求1
app.get("/", (req, res) => {
    // express照样能使用http内部的函数
    res.writeHead(200, {'content-type':'text/html;charset=utf-8'});
    res.write("express服务器");
    res.end();
})
// 请求2
app.get("/login", (req, res) => {
    // express单独封装了函数，用于响应客户端
    res.send("使用express中的函数");  //send（）的作用等于请求1中的三个res的作用
})


// listen表示监听端口
app.listen(9999, ()=> {
    console.log("server run at 9999....")
})