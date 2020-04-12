const express = require("express");
const app = express();



// 在浏览器中输入地址访问时，默认是get请求，浏览器如果需要发送post请求，需要装post插件
// get方法的三种响应方法
// 以下处理不同的请求，且请求之间相互独立
// 1.用http框架响应
app.get("/", (req, res) => {
    console.log("get请求");
    res.writeHead(200, {"content-type":"text/html;charset=utf-8"});
    res.write("http响应数据");
    res.end(); //结束请求
})
// 2.用send（）方法响应
app.get("/one", (req, res) => {
    res.send("express send响应数据"); //响应字符串
})
// 3.用json（）方法响应
app.get("/two", (req, res) => {
    res.json({"r": "ok"}); //响应一个json数据
})

app.post("/", (req, res) => {
    console.log("post请求")
})



app.listen(8080, () => {
    console.log("server run at 8080....")
})