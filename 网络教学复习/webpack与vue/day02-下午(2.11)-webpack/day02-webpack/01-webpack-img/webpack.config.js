// 1、新建项目文件夹
// 2、cmd，项目初始化npm init -y
// 3、webpack安装，cnpm i webpack webpack-cli --save-dev
// 4、webpack配置文件，webpack.config.js
// 5、一边写配置，一边写源代码src 目录下
// 6、webpack 命令打包
var path=require("path");
var miniCssExtractPlugin=require("mini-css-extract-plugin");

//图片资源的处理
// cnpm i --save-dev file-loader
// 配置module-rules
// 打包



module.exports={
	entry:"./src/main.js",
	output:{
		// path:"./dist",//./ 读当前路径时读的是命令行窗口的当前路径,webpack新版本已经不允许使用这种相对路径的配置方式了
		path:path.resolve(__dirname,"dist"),//__dirname读当前路径时读的是当前文件所在路径
		filename:"index.[name].[hash:6].js"
	},
	mode:"development",
	module:{
		rules:[
			{
				test:/\.css$/,
				// use:[miniCssExtractPlugin.loader,"css-loader"]//加入样式使用link_href 标签
				use:["style-loader","css-loader"]//加入样式使用style 标签
			},
			{
				test:/\.(webp|png|jpg|svg|gif)/igm,
				use:["file-loader"]
			}
		]
	},
	plugins:[
		new miniCssExtractPlugin({
			//hash 码避免浏览器缓存对开发造成影响
			filename:"mytestcss.[hash:6].css"
		})
	]
}


// 四大模块:entry,output,loader,plugins

// 识别css 文件资源--学习loader
// cnpm i style-loader css-loader --save-dev
// entry入口文件: import "./mycss.css";
// 配置文件
// 打包

// 识别css 文件资源--学习plugins
// cnpm i --save-dev mini-css-extract-plugin
// 引入require ,再做配置
// 打包
// 在测试文件index.html 记得加上link_href 进行测试



