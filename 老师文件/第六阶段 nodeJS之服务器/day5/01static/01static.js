const express = require("express");   //引入express模块，其中require后面的（）里面写的是express模块的地址

const app = express();

app.get("/", (req, res) => {
    res.send("ok");   //对请求的响应
})

// 将public目录进行托管
//http://localhost:3000/index.html
app.use(express.static("public"))

// 当访问地址中有 /user 时，将对static目录进行托管
// http://localhost:3000/user/center.html
app.use("/user", express.static("static"));

//路径中使用反斜线时应该写两次，因为需要转义
// console.log(__dirname + "\\all");
app.use(express.static(__dirname + "/all"));   //__dirname：表当前文件所在的绝对路径

app.listen(3000, () => {
    console.log("server run at 3000....")
})