import Vue from "vue"
import axios from "axios"
import app from "./app.vue";
import router from "./router";
import store from "./store";

//webpack 配置的入口文件
new Vue({
	router,
	store,
	render(createElement) {
		return createElement(app);
	}
}).$mount("#app");