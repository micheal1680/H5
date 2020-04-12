// 1\创建项目文件夹
// 2/在项目文件夹下 npm init -y
// 3\下载webpack:
// cnpm i webpack webpack-cli --save-dev 
// cnpm i webpack webpack-cli -g 
// 4\在项目文件夹下创建了webpack.config.js
// 5\写以下代码
// 6/webpack 打包

var path=require("path");

module.exports={
	
	entry:"./src/myindex.js",//入口
	
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"newIndex.js"
	},//出口目录/文件名
	
	mode:"development"//开发模式"production"
	
}