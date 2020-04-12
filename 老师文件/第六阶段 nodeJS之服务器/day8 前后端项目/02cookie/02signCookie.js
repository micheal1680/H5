const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

let singed = "xxxxx"; //定义签名信息
// 使用cookie，并签名
app.use(cookieParser(singed)) //对cookie进行签名
app.get("/sign", (req, res) => {
    // 获取签名的cookie： req.signedCookies
    console.log(req.signedCookies.password);

    req.secret = singed; //对cookie签名
    // 参数1：cookie名称，参数2：cookie的值，参数3的配置：signed启用签名，maxAge有效时间
    res.cookie("password", "666", {signed: true, maxAge: 10000*60*60});
    res.send({r: "success"});
})

// cookie保存在本地
// 客户端第一次请求服务器时没有cookie
// 服务器响应客户端时发送cookie
// 客户端第二次请求会在请求头中携带cookie
// cookie限制大小是4k，所以签名会使cookie体积增加，重要的cookie才会使用签名

app.listen(3000, () => {
    console.log("server runing at 3000")
})