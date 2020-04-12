// 以后面的地址为例 http://localhost:9999/login?username=aaa&password=666

var http = require("http");
var url = require("url");
var querystring = require("querystring");
var router = require("./js/router");

var mysql = require("mysql");
global.db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123456",
    database: "mydb"
});
global.db.connect();


http.createServer(function(request, response) {
    var result = "";
    if(request.url != "/favicon.ico") {
        // console.log("url----" + request.url);
        // 获取路由通过url模块
        // 获取路由地址   ip地址后？之前的数据
        var path = url.parse(request.url).pathname; //使用url获取路由地址
        // console.log(path, path.substr(1));  // "/login"

        //获取？之后的所有参数
        var params = url.parse(request.url).query; //使用url获取全部的参数
        // console.log("params-----" + params)

        // 获取参数值通过querystring模块
        // 根据键名获取对应的参数值
        // var name = querystring.parse(params).username; 
        // var pwd = querystring.parse(params).password;
        var name = querystring.parse(params)["username"]; 
        var pwd = querystring.parse(params)["password"];
        // console.log("username: " + name + " ---- password:" + pwd)

        try {
            result = router[path.substr(1)](`./html/${path.substr(1)}.html`, name, pwd, response);  //login()
        } catch(e) {
            result = router["home"]("./html/home.html");
        }

        // response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        // response.end(result);
    }
}).listen("9999");
console.log("server runing at 9999....");

