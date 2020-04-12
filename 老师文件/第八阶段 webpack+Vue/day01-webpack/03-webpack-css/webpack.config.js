// css页面内联style 标签引入:
// 1\安装: cnpm i --save-dev style-loader css-loader
// 2\配置 module

// css页面外嵌link-href 标签引入:
// 1\安装: cnpm i --save-dev mini-css-extract-plugin
// 2\引入：require
// 3\配置：plugins /module
var path=require("path");
var miniCssExtractPlugin=require("mini-css-extract-plugin");
module.exports={
	entry:"./src/js/main.js",
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"index.[hash:6].js"
	},
	module:{
		rules:[{
			test:/\.css$/igm,
			// ["style-loader","css-loader"]
			use:[miniCssExtractPlugin.loader,"css-loader"]
		}]
	},
	mode:"development",
	plugins:[
		new miniCssExtractPlugin({
			filename:"./dist/css/mycss.[hash:6].css"
		})
	]
	
}