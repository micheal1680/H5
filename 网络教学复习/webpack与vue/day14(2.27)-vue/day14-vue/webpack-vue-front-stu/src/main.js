import Vue from "vue";
import app from "./app.vue";
import router from "./router/router.js"
import store from "./store"

 var vm=new Vue({
//因为所有的子组件最终都会渲染到vm 对应的app.vue
//所有的.vue 组件都能继承vm 对象的store 和router配置项

	store:store,//4、vuex 状态管理工具
	router,//3、路由,解析赋值
	render(createElement) {
		return createElement(app);//2、组件化开发
	},
	created(){
		console.log(this)
		console.log(this.$store);
	}

}).$mount("#app")//1、声明式渲染view(html)--vm(new Vue)


