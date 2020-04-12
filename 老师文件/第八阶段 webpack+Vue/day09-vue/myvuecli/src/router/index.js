import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import list from '../views/list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/news',
    component: () => import('../views/news.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: list
  },
  {
	  path:"/self",
	  component:()=>import("../views/Self.vue")//动态引入组件
  }
]

const router = new VueRouter({
  routes,
  mode:"hash"
  
})


export default router
