import vuex from "vuex";
import vue from "vue";

vue.use(vuex);//启用

var allthings=localStorage.getItem("allthings")
var all=allthings?JSON.parse(allthings):[]

//集中状态管理工具：.vue组件

//登录信息，购物车信息……
const store=new vuex.Store({
    state:{
		all: all
	},
    mutations:{//修改或删除
		addStateCom(state,val){
			state.all.push(val);
		},
		del(state,index){
			state.all.splice(index,1)
		},
		updata(state,index){
			for(let i=0;i<state.all.length;i++){
				if(index.indexOf(i)==-1){
					state.all[i].status=false;
				}else{
					state.all[i].status=true;
				}
				// for(let y=0;y<index.length;y++){
				// 	if(i==index[y]){
				// 		state.all[i].status=true;
				// 	}
				// }
			}
			console.log(state.all)
		}
	},//同步
	getters:{//复杂的查询
		getCompThings(state){
			return state.all.filter(function(item,i,old){
					return item.status==true;
				}).length
			}
	},
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