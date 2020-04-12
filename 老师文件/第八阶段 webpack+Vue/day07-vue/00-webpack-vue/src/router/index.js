import VueRouter from "vue-router";
import Vue from "vue";
import mainPage from "../views/mainPage.vue";
import listPage from "../views/listPage.js";
import detailPage from "../views/detailPage.vue";
import infoPage from "../views/infoPage.vue";
import loginPage from "../components/loginPage.vue";
Vue.use(VueRouter);
var routes = [
	{
		path: "/",
		component:mainPage,
		meta:{
			keepAlive:false
		}
	},
	{
		path: "/listPage",
		component:listPage,
		meta:{
			keepAlive:true,
			firstEnter:true
		}
		,
		beforeEnter(to,from,next){
			if(from.path=="/"){
				if(to.meta.firstEnter){
					to.meta.keepAlive=true
					to.meta.firstEnter=false;
				}else{
					to.meta.keepAlive=false;
				}
				
			}else{
				to.meta.keepAlive=true
			}
			next();
		}
	},
	{
		path: "/detailPage/:deptid",
		component:detailPage,
		meta:{
			keepAlive:false
		}
	},
	{
		path: "/infoPage",
		component:infoPage,
		//路由独享的导航守卫
		beforeEnter(to,from,next){
			if(localStorage.getItem("loginStatus")){
				next()
			}else{
				next("/login");
			}
		},
		meta:{
			keepAlive:false
		}
		
	},
	{
		path: "/login",
		component:loginPage,
		meta:{
			keepAlive:false
		}
	}
]
var router=new VueRouter({
	routes,
	// 路由对象的模式设置
	mode:"hash"//"history"
})

//全局的导航守卫
router.beforeEach(function(to,from,next){
	
	// console.log(to,from);
	// if(to.path=="/infoPage"){
	// 	// console.log("---infoPage---")
	// 	if(localStorage.getItem("loginStatus")){
	// 		next()
	// 	}else{
	// 		// console.log("---login---")
	// 		next("/login");
	// 	}
	// }else {
	// 	// console.log("---normal---")
	// 	next();
	// }
	next()
})


export default router;