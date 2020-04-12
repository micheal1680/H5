var path = require("path");
var miniCssExtractPlugin = require("mini-css-extract-plugin");
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.[hash:6].js"
	},
	module: {
		rules: [
			{
				test: /\.css$/igm,
				// ["style-loader","css-loader"]
				use: [miniCssExtractPlugin.loader, "css-loader"]
			},
			{
				test: /(\.jpg)|(\.png)|(\.gif)|(\.svg)|(\.jpeg)$/igm,
				use: ["file-loader"]
			},
			{
				//识别vue 安装vue-template-compiler vue-loader
			        test: /\.vue$/,
			        loader: 'vue-loader'
			}
		]
	},
	mode: "development",
	plugins: [
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new miniCssExtractPlugin({
			filename: "./css/mycss.[hash:6].css"
		}),
		new HtmlWebpackPlugin({
			title: 'myapp', //为生成的html 文档添加<title>myapp</title>
			hash: true, //为所有包含的脚本和CSS文件附加唯一的编译哈希，这对缓存清除很有用
			filename: 'index.html', //打包后生成的文件名  放在output.path里面
			template: './src/index.html', //来自哪里 模板文件
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
	
	// webpack 命令和webpackDevSever 命令的区别？
	// 
	// webpack ：生成最终浏览器可识别的文件,生成dist 文件夹
	// webpackDevSever：不生成dist 文件夹，加载最终浏览器可识别的文件到内存

}
