// 图片资源识别:
// 1\安装: cnpm i --save-dev file-loader
// 2\配置 module

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
		},
		{
			test:/(\.jpg)|(\.png)|(\.gif)|(\.svg)|(\.jpeg)$/igm,
			use:["file-loader"]
		}]
	},
	mode:"development",
	plugins:[
		new miniCssExtractPlugin({
			filename:"./css/mycss.[hash:6].css"
		})
	]
	
}