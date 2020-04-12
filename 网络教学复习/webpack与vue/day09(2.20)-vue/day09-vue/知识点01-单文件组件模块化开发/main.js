import Vue from "vue";
import app from "./app.vue";
//webpack 配置对.vue 文件的支持
//cnpm i vue-loader vue-template-compiler -D

//配置webpack.config.js 
//1、 const VueLoaderPlugin = require('vue-loader/lib/plugin');

//2、module-rules------- {
// 				//识别vue 安装vue-template-compiler vue-loader
// 			        test: /\.vue$/,
// 			        loader: 'vue-loader'
// 			}

//3、plugins----------- new VueLoaderPlugin()

new Vue({
	render(createElement) {
		return createElement(app);
	}
}).$mount("#app");