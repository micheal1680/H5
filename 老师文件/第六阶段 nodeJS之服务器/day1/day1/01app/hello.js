//引入http模块    内置模块
const http = require("http");


//创建一个服务器，服务器的地址是localhost:9999    127.0.0.1:9999
http.createServer(function(request, response) {
	// 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/html
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	
	//向客户端发送数据
	response.write("<h1>hello node</h1>");
	
	//end表示结束请求
	response.end()
	
}).listen("9999"); //9999表示服务的端口号



console.log("server runing at port 9999...")