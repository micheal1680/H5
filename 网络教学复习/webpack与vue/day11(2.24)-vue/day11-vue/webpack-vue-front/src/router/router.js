// 1.引入
import VueRouter from 'vue-router'
// 2.在vue构造函数上启用vuerouter
import Vue from "vue";
Vue.use(VueRouter);
// 3.组件构造对象
import main from "../components/main.vue";
import list from "../components/list.vue";
import about from "../components/about.vue";
// 4.定义路由规则
const myrouter = [
    { path: '/', component: main },
	{
		path: '/list', component: list
	},
    // { path: '/list/:deptid', component: list },
    { path: '/about', component: about }
]
// 5.利用路由规则创建路由对象
const router =new VueRouter({
    routes:myrouter,
	
	// 锚点跳转
	mode:"history"//"hash"//
})

//全局导航守卫




export default router 