// store文件用于存放vuex组件工具，vuex与router都是不同于一般组件的vue的使用工具
// 安装vuex
// import 使用名 from 插件原名
import Vue from "vue";
import Vuex from "vuex";

// 启用vue
// 格式：vue的使用名.use（vuex的使用名）
Vue.use(Vuex);

const store = new Vuex.Store({
    // 用于存放数据
    state:{
        mythings:[]
    },
    // 用于修改、添加数据等操作
    mutations:{
        increatment(state,thing){
            console.log(thing)
            state.mythings.push({
                info:thing,
                complated:false
            })
        }
    },
    // 用于获取数据
    getters:{
        readythings(state){
            return state.mythings.filter(
                function(item,index,arr){
                    return !item.complated
                })
        },
        comthings(state){
            return state.mythings.filter(
                function(item,index,arr){
                    return item.complated
                }
            )
        }
    }
})

export default store