// 用http模块写服务器
const http = require("http");  //引入http模块
// 创建服务器
let server = http.createServer(function (req, res) {
    if (req.url != '/favicon.io') {
        res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
        res.write("你好"); //响应客户端
        res.end(); //结束请求
    }
});
// 监听服务器
server.listen(9999, function () {
    console.log("server runing at 9999.....")
})