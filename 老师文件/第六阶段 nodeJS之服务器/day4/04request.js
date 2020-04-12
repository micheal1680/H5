const express = require("express");
const url = require("url");
const querystring = require("querystring");
const bodyParser = require("body-parser"); //用于解析post请求的参数

const app = express();

//使用bodyparser接收post过来的数据
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/index", (req, res) => {
    console.log(req.url)

    //http创建的服务器，通过url与去querystring来处理请求参数
    //username=张三&password=666
    // let params = url.parse(req.url).query;
    // let name = querystring.parse(params)["username"];
    // let pwd = querystring.parse(params).password
    // console.log(`用户名： ${name}, 密码： ${pwd}`);

    // 在express中，get请求的参数通过“req.query.键名”来获取
    let name = req.query.username;
    let pwd = req.query.password;
    console.log(`用户名： ${name}, 密码： ${pwd}`);

    res.send("处理get请求");
})


// 在post请求中，通过body-parser中间件可以直接获取参数信息
app.post("/login", (req, res) => {
    console.log(req.body)

    let name = req.body.username;
    let pwd = req.body.password;

    console.log(`用户名： ${name}, 密码： ${pwd}`);

    res.send("c处理post请求");
})

app.get("/", (req, res) => {
    console.log(req.hostname, req.ip);
    res.send("ok");
})

app.listen(8080, () => {
    console.log("server run at 8080....")
})