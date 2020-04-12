const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// 使用cookie 没有签名
app.use(cookieParser());
app.get("/", (req, res) => {
    // res.clearCookie("username"); //删除cookie
    console.log("cookie username---" + JSON.stringify(req.cookies)); //取出没有签名的cookie

    res.cookie("username", "Rose"); //以键值对的方式设置cookie
    res.send({r: "ok"});
})

app.listen(3000, () => {
    console.log("server runing at 3000")
})