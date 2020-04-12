var path = require("path");
var miniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/myindex.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.[hash:6].js" //[hash:6]代表哈希随机码，只需6位
    },
    module: {
        rules: [{
            test: /\.css$/igm,
            // 这是样式内联即style引入
            use:["style-loader"]   
            // 样式外联即link引入，外联引入需要miniCssExtractPlugin插件
            // use: [miniCssExtractPlugin.loader, "css-loader"]
        },
        {
            test:/(\.jpg)|(\.png)|(\.gif)$/igm,
            use:["file-loader"]
        }]
    },
    mode: "development",
    plugins: [
        // 样式外联引入即link引入
        new miniCssExtractPlugin({
            filename: "./dist/css/mycss.[hash:6].css"
        }),
        new HtmlWebpackPlugin({
            			title:'myapp',			//为生成的html 文档添加<title>myapp</title>
            			hash:true,				//为所有包含的脚本和CSS文件附加唯一的编译哈希，这对缓存清除很有用
            			filename: 'app.html', //打包后生成的文件名  放在output.path里面
            			template: './src/index.html',    //来自哪里 模板文件
            			inject: 'body',         //引入js的位置:引入js的位置:  'head'-头部引入 'body'/true--</body>之前引入 false不引入
            			minify: {				  //压缩项配置
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
             contentBase:'./dist',
        	  host: 'localhost',
        	  compress: true,
        	//   inline: true,
        	  port: 8080,
        	  open: true,
        	  hot: true
           }
}
