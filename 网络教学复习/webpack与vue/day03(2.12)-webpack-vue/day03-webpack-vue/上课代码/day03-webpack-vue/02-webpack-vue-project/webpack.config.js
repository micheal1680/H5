// 1、新建项目文件夹
// 2、cmd，项目初始化npm init -y
// 3、webpack安装，cnpm i webpack webpack-cli --save-dev
// 4、webpack配置文件，webpack.config.js
// 5、一边写配置，一边写源代码src 目录下
// 6、webpack 命令打包
var path = require("path");
var miniCssExtractPlugin = require("mini-css-extract-plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");
var {
	CleanWebpackPlugin
} = require("clean-webpack-plugin");
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

//图片资源的处理
// cnpm i --save-dev file-loader
// 配置module-rules
// 打包

//html 文件处理
//cnpm install --save-dev html-webpack-plugin
//require 引入,配置plugins
//打包


//清除dist 文件夹下的文件
//cnpm install clean-webpack-plugin --save-dev
//引入,配置
//打包


module.exports = {
	entry: "./src/main.js",
	output: {
		// path:"./dist",//./ 读当前路径时读的是命令行窗口的当前路径,webpack新版本已经不允许使用这种相对路径的配置方式了
		path: path.resolve(__dirname, "dist"), //__dirname读当前路径时读的是当前文件所在路径
		filename: "index.[name].[hash:6].js"
	},
	mode: "development",
	module: {
		rules: [{
				test: /\.css$/,
				// use:[miniCssExtractPlugin.loader,"css-loader"]//加入样式使用link_href 标签
				use: ["style-loader", "css-loader"] //加入样式使用style 标签
			},
			{
				test: /\.(webp|png|jpg|svg|gif|jpeg)$/igm,
				use: ["file-loader"]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new miniCssExtractPlugin({
			//hash 码避免浏览器缓存对开发造成影响
			filename: "mytestcss.[hash:6].css"
		}),
		new htmlWebpackPlugin({
			hash: true, //为所有包含的脚本和CSS文件附加唯一的编译哈希，这对缓存清除很有用
			filename: 'index.html', //打包后生成的文件名  放在output.path里面
			template: './src/app.html', //来自哪里 模板文件
			inject: 'body', //引入js的位置:引入js的位置:  'head'-头部引入 'body'/true--</body>之前引入 false不引入
			minify: { //压缩项配置
				removeComments: true, //是否清除HTML注释  
				collapseWhitespace: true, //是否压缩HTML  
				removeScriptTypeAttributes: true, //是否删除< script>的type="text/javascript"  
				removeStyleLinkTypeAttributes: true, //是否删除< style>和< link>的type="text/css"  
				minifyJS: false, //是否压缩页内JS  
				minifyCSS: true //是否压缩页内CSS  
			}
		})
	],
	devServer: {
		contentBase: './dist',
		host: 'localhost',
		compress: true,
		// inline: true,
		port: 8080,
		open: true,
		hot: true
	},
	resolve: {
	    alias: {
	      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
	    }
	  }
}

