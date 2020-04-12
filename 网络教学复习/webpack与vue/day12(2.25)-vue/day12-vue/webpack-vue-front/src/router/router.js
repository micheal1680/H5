import VueRouter from 'vue-router'
import Vue from "vue";
import main from "../components/main.vue";
import list from "../components/list.vue";
import about from "../components/about.vue";
import UserInfo from "../components/UserInfo.vue";
import UserAdderss from "../components/UserAdderss.vue";
//路由懒加载
const things = () => import("../components/things.vue");

Vue.use(VueRouter);

const myrouter = [{
		path: '/',
		component: main
	},
	{
		path: '/list',
		component: list
	},

	{
		path: '/about',


		// component: about,
		//1、命名视图---规则如下--使用代码在app.vue
		//(1)router-link&router-view-----------app.vue
		components: {
			default: about,
			a: UserInfo,
			b: UserAdderss
		},


		//2、子路由
		//(1)子路由规则定义，组件文件创建
		//(2)router-link&router-view-----------about.vue
		// ,
		// children: [{
		// 		//   /about/info		/about/adderss		/about
		// 		//！！！！！！子路由的path 定义时不要加斜杠 /！！！！！！
		// 		path: 'info',
		// 		component: UserInfo
		// 	},
		// 	{
		// 		path: 'adderss',
		// 		component: UserAdderss
		// 	}
		// ]


		//3、路由独享守卫，鉴权临时重定向
		//(1)路由守卫应用之一------鉴权设计
		// ,
		// beforeEnter(to, from, next) {
		// 	if(localStorage.getItem("loginStatus")=="login"){
		// 		next();
		// 	}else{
		// 		next({path:"/"});
		// 	}
		// }


		// ,name:"about"//4、命名式路由（1）方便做编程式导航


		//,
		//redirect: '/'//5、重定向，永久


		//6、自学思路：学习官方文档---官方示例代码---写---调试---百度---keep-alive
		//(1)看看vuex 官网
	},
	{
		path: '/things',
		component: things,
		meta: {
			// 7、路由元信息
			//(1)添加元信息-------------router.js
			//(2)待办事项组件渲染keep-alive   v-if  --------app.vue
			//(2)全局导航守卫判断-------------router.js
			keepAlive: true
		}
	}
]

const router = new VueRouter({
	routes: myrouter,

	mode: "hash" //"history"//
})


//全局导航守卫
router.beforeEach((to, from, next) => {
	console.log("-----------全局导航守卫---------");
	if(to.path=="/things"&& from.path=="/"){
		to.meta.keepAlive=false
	}else{
		to.meta.keepAlive=true;
	}
	
	next()
})




export default router
