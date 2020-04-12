const　http = require("http");
const show = require("./other.js");
const obj = require("./more.js");

http.createServer(function(req, resp) {
	resp.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	
	show(resp);
	
	obj.one(resp);
	obj.two(resp);
	
	resp.end();
	
}).listen("8888");