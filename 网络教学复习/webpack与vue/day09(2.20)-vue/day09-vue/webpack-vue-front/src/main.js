import Vue from "vue";
import app from "./app.vue";
import router from "./router";

// // 客户端路由
// // (1)cnpm i --save vue-router
// 
// // (2)main.js 引入
// 
// // (3)在Vue 构造函数上全局启用VueRouter
// Vue.use(VueRouter);
// 
// // (4)组件构造对象
// const main = { template: '<div>首页页面内容</div>' }
// const list = { template: '<div>列表页面内容</div>' }
// const about = { template: '<div>关于我们页面</div>' }
// 
// // (5)定义路由规则
// const myroutes = [
//   { path: '/', component: main },
//   { path: '/list', component: list },
//   { path: '/about', component: about }
// ]
// 
// // (6)利用路由规则创建路由对象
// const router = new VueRouter({
//   routes:myroutes 
// })


// (7)创建vm 时，传递一个路由对象


new Vue({
	router:router,//解析赋值，客户端路由
	render:function(createElement) {
		return createElement(app);//组件化开发
	}
	
}).$mount("#app");//声明式渲染

// (8)VueRouter 提供的组件：router-link   router-view