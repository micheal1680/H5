
const http = require("http");
http.createServer(function (req, resp) {
    //当浏览器发出请求后，服务器会响应两次，分别是ico图标和网页数据
    //if条件过滤ico图标的请求
    if (req.url != "/favicon.ico") { 
        resp.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        excute(say, "hehehe")
        resp.end();
    }
}).listen("10086")


function say(world) {
    console.log(world);
}

//函数作为参数
function excute(someFuction, value) {
    someFuction(value);
}

