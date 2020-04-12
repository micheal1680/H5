const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("主页")
})

// 处理get请求
app.get("/index", (req, res) => {
    res.send("你好客户端");
})

// 处理post请求
app.post("/login", (req, res) => {
    res.send("post请求");
})

app.listen(8080, ()=> {
    console.log("server run at 8080....")
})