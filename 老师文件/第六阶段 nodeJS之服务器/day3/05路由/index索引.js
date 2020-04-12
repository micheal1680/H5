// 以后面的地址为例 http://localhost:9999/login?username=aaa&password=666
// （细分地址：？号之前是url，？之后是参数param，参数之间用&分隔 ，localhost:9999是ip地址，login是子路由。这个地址表示访问本机的登录界面

var http = require("http");
var url = require("url");
var querystring = require("querystring");
var router = require("./js/router");


http.createServer(function(request, response) {
    var result = "";
    if(request.url != "/favicon.ico") {
        console.log("url----" + request.url);
        // 获取路由通过url模块
        // 获取路由地址   ip地址后？之前的数据
        var path = url.parse(request.url).pathname; //使用url获取路由地址
        console.log("path----" + path);  // "/login"
        console.log("pathname: " + path.substr(1))
        try {
            result = router[path.substr(1)]();  //login()
        } catch(e) {
            result = router["home"]();
        }

        response.end(result);



        // //获取？之后的所有参数
        // var params = url.parse(request.url).query; //使用url获取全部的参数
        // console.log("params-----" + params)

        // // 获取参数值通过querystring模块
        // // 根据键名获取对应的参数值
        // // var name = querystring.parse(params).username; 
        // // var pwd = querystring.parse(params).password;
        // var name = querystring.parse(params)["username"]; 
        // var pwd = querystring.parse(params)["password"];
        // console.log("username: " + name + " ---- password:" + pwd)


        // response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        // response.end("hello");
    }
}).listen("9999");
console.log("server runing at 9999....");

