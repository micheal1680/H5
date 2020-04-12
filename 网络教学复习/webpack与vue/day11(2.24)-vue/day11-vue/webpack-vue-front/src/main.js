import Vue from "vue";
import app from "./app.vue";
import router from "./router/router.js"


 var vm=new Vue({
	router,
	render(createElement) {
		return createElement(app);//主组件
	}

}).$mount("#app")


