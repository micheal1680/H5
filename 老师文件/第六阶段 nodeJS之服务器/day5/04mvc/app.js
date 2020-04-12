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

//当访问地址中有/user时，启动子路由
app.use("/user", require("./Controller/UserController"));


//静态资源托管
app.use(express.static("public"));


app.listen(3000, () => {
    console.log("server run at 3000...")
})