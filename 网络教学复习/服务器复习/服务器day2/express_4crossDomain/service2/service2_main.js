const express = require("express");//导入express
const app = express();
app.use(express.static(__dirname+"/public"));//静态文件存放目录 


var server = app.listen(4000, function () {
  console.log("服务器正在监听客户端的请求4000端口");
})