// 客户端路由
// (1)cnpm i --save vue-router

// (2)js 引入
import VueRouter from "vue-router";

// (3)在Vue 构造函数上全局启用VueRouter
import Vue from "vue";
Vue.use(VueRouter);

// (4)组件构造对象
import main from "../components/main.vue";
import list from "../components/list.vue";
import about from "../components/about.vue";

// (5)定义路由规则
const myroutes = [
  { path: '/', component: main },
  { path: '/list', component: list },
  { path: '/about', component: about }
]

// (6)利用路由规则创建路由对象
const router = new VueRouter({
  routes:myroutes 
})

export default router;
