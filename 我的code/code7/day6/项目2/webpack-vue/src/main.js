//main.js是整个项目的入口文件
// index.html是页面显示文档，只用写一个id为app的div组件即可，就是整个项目vm实例化对象
// store文件夹用于存放vuex文件
// components用于存放小组件
// router用于存放路由
// utils用于存放公共工具
// views用于存放主组件
// app.vue是最大主组件，用于引入views里面的主组件
// 以上几项是整个项目的前端源代码，放在一个src文件夹底下
// 整个前端分为两个部分：源代码（src） + 环境配置(package.json + webpack.config.js)
// 其中package.json用于保存前端需要使用到的所有插件。有了这个，在前端命令行黑窗口只需输入：cnpm i 即可下载所有里面的插件
// webpack.config.js就是进行环境配置（有具体的流程）

// 后端就是一个服务器文件index.js
// 服务器需要用到许多插件或者模块，因此也有一个保存这些模块的文件package.json，其作用与前端的package.json文件相同

// 项目 == 前端+后端

// 注册对象
import Vue from "vue";
import axios from "axios";
import app from "./app.vue"
import router from "./router"
import store from "./store"

new Vue({
    // router(由于router的值就是router，因此可以简写为router即可)
    router:router,
    store,
    // 渲染全局，挂载全局
    render(createElement){
        return createElement(app)   //通过render()来挂载app.js文件  
    }
}).$mount("#app")

// vm对象调用$mount函数来挂载dom节点"#app"