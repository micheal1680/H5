//引入http模块    内置模块
const http = require("http");


//创建一个服务器，服务器的地址是localhost:9999    127.0.0.1:9999
http.createServer(function(request, response) {
	// 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/html
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	
	//调用本地函数
	send(response);
	
	//end表示结束请求
	response.end()
	
}).listen("9999"); //9999表示服务的端口号

//定义本地函数（在同一个文件中定义，使用时直接用函数名称调用）
function send(response) {
	response.write("<div>");
	response.write("<h1>this is title 这是标题</h1>");
	response.write("</div>");
}