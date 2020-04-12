import Vue from "vue";
import myRouter from "vue-router";
import mainPage from "../views/mainPage.vue";
import listPage from "../views/listPage.js";
import detailPage from "../views/detailPage.vue";
import infoPage from "../views/infoPage.vue";
import loginPage from "../components/loginPage.vue"
// 安装vue-router插件

// 启用
Vue.use(myRouter);
//路由规则
var routes = [{
    // 路径（自设的）
    path: "/",
    // 组件名
    component: mainPage
},
{
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
    path: "/infoPage",
    component: infoPage,
    // 路由独享的导航守卫
    beforeEnter(to, from, next) {
        if (localStorage.getItem("loginStatus")) {
            // 用于实现跳转
            next()
        } else {
            next("/login")
        }
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
