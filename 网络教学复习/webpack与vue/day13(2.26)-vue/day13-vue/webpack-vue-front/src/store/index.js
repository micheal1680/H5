import vuex from "vuex";
import vue from "vue";

vue.use(vuex);//启用

//集中状态管理工具：.vue组件

//登录信息，购物车信息……
const store=new vuex.Store({
    state:{
		num:100,
		complete:0
	},
    mutations:{//修改或删除
		addStateCom(state,val){
			state.complete=state.complete+Number(val)
		}
	},//同步
	getters:{},
	actions:{},//异步
	modules:{
	}
})


//cnpm i vuex --save-dev
//store/index.js
//写index.js
//导出
//main.js 导入并在vm 注册
//研究state++mutations 的使用，
//eg:在多个组件上使用store
export default store;