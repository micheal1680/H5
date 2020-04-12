import Vue from "vue";
import myRouter from "vue-router";
import mainPage from "../views/mainPage.vue";
import listPage from "../views/listPage.js";
import detailPage from "../views/detailPage.vue";
import infoPage from "../views/infoPage.vue";
import loginPage from "../components/loginPage.vue";
import all from "../components/all.vue"
import ready from "../components/ready.vue"
import complated from "../components/complated.vue"
// 安装vue-router插件

// 启用
Vue.use(myRouter);
//路由规则
var routes = [{
    // 路径（自设的）
    // 根路由:/
    path: "/",
    // 组件名
    component: mainPage
},
{
    // 从根路由出发找listPage
    path: "/listPage",
    component: listPage,
    meta: {
        keepAlive: true,
        firstEnter: true
    },
    beforeEnter(to, from, next) {
        if (from.path == "/") {
            if (to.meta.firstEnter) {
                to.meta.keepAlive = true
                to.meta.firstEnter = false
            } else {
                to.meta.keepAlive = false
            }
        } else {
            to.meta.keepAlive = true
        }
        next();
    }
},
{
    // 从根路由出发找listPage
    path: "/infoPage",
    // 重定向redirect
    redirect:"/infoPage/all",
    component: infoPage,
    // 路由/infoPage的三个子路由
    children:[
        {
            // 从父路由infoPage去寻找子路由all，若“/all”:从从根路由出发找all，会找不到
            path:"all",
            component:all
        },
        {
            path:"ready",
            component:ready
        },
        {
            path:"complated",
            component:complated
        },
    ],
    // 路由独享的导航守卫
    beforeEnter(to, from, next) {
        if (localStorage.getItem("loginStatus")) {
            // 用于实现跳转
            next()
        } else {
            next("/login")
        }
    },
    meta:{
        keepAlive:false
    }
},
// 另外一种传参方法：路由传参
{
    path: "/detailPage/:deptid",
    component: detailPage
},
{
    path: "/login",
    component: loginPage
}
]

var router = new myRouter({
    routes,
    mode: "hash"
})
// 全局导航守卫
router.beforeEach(function (to, from, next) {
    console.log(to, from)
    if (to.path == "/infoPage") {
        if (localStorage.getItem("loginStatus")) {
            next()
        } else {
            next("/login");
        }
    } else {
        next()
    }
})
export default router
