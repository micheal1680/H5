//安装 cnpm i vuex --save
import vuex from "vuex";
import vue from "vue";

vue.use(vuex);

const store=new vuex.Store({
	state:{
		mythings:[]
	},
	mutations:{
		increament(state,thing){
			console.log(thing)
			state.mythings.push({
				info:thing,
				completed:false
			})
		}
	},
	getters:{
		actthings(state){
			return state.mythings.filter(function(item,index,arr){
				return !item.completed
			})
		},
		comthings(state){
			return state.mythings.filter(function(item,index,arr){
				return item.completed
			})
		}
	}
})

export default store;