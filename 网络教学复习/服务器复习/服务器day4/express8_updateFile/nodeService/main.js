const express = require('express');//需要下载
const app = express();
app.use(express.static(__dirname+'/public'));//静态资源根目录
//post 
const bodyParser=require("body-parser");//被包含在express中，即下载了express就可以了
app.use(bodyParser.urlencoded({extended:false}));

const path = require('path');//不需要下载, path是属于node.js的内置模块
const upload = require("./multerUtil.js")//用于文件上传

//文件上传
app.post('/profile.do', upload.single('fileData'), function(req, res, next) {
    //向客户端响应一个网络访问上传文件的URL: http://192.168.7.130:4000/uploads/243213243.png 
	res.json({filePath: 'http://127.0.0.1:4000/uploads/' + path.basename(req.file.path)});
});


app.listen(4000, function () {
   console.log("localhost:4000 listening");
});