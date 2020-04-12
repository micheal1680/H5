// 引入http模块
const http = require("http");

// 创建服务器并监听
http.createServer(function(req, resp){
    if(req != "/icofont.io") {
        // 指定编码格式为utf-8，汉字能在客户端正常显示
        resp.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
        resp.write("hello world 你好"); //输出数据到客户端
        resp.end();//结束响应
    }
}).listen("9999");
console.log("server runing at 9999....");