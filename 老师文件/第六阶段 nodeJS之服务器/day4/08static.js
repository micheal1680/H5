const express = require("express");  //引入express模块
const app = express(); //将express方法封装为对象app

app.get("/", (req, res) => {
    res.send("ok")
})

// 静态资源托管
//当输入一个地址访问时(如下面的那个地址)，如果文件中没有对应的请求处理（如网址中的index处理），那么到静态资源目录中查找内容
//http://localhost:3000/index.html
app.use(express.static("html"));
app.use(express.static("public"));


// 监听在端口3000上
app.listen(3000, () => {
    console.log("server run at 3000");
})

// 255个字符（2K的大小） : get方法传送数据的空间大小
// get带参数，放在请求头里面；post不带参数，因为放在请求体里面
// response里面传送数据的send、json（可以直接传送数据）两种方法的区别
// 托管的作用
// 对静态资源的托管也是有顺序要求的