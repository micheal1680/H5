import VueRouter from "vue-router";
import Vue from "vue";
import mainPage from "../views/mainPage.js";
import listPage from "../views/listPage.js";
import detailPage from "../views/detailPage.vue";
import infoPage from "../views/infoPage.js";
Vue.use(VueRouter);
var routes = [
	{
		path: "/",
		component:mainPage
	},
	{
		path: "/listPage",
		component:listPage
	},
	{
		path: "/detailPage",
		component:detailPage
	},
	{
		path: "/infoPage",
		component:infoPage
	}
]
export default new VueRouter({
	routes,
	// 路由对象的模式设置
	mode:"hash"//"history"
})