
var path = require("path");
var miniCssExtractPlugin = require("mini-css-extract-plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");
var {
	CleanWebpackPlugin
} = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');



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
				use: ["vue-style-loader", "css-loader"] //加入样式使用style 标签
			},
			{
				test: /\.(webp|png|jpg|svg|gif|jpeg)$/,
				use: ["file-loader"]
			},
			{
				//识别vue 安装vue-template-compiler vue-loader
			        test: /\.vue$/,
			        loader: 'vue-loader'
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
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

