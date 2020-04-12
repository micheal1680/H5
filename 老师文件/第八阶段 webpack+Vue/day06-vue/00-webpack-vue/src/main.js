import Vue from "vue"
import axios from "axios"
import app from "./app.vue";
import router from "./router"

//webpack 配置的入口文件
new Vue({
	router,
	render(createElement) {
		return createElement(app);
	}
}).$mount("#app");