import Vue from "vue";
import axios from "axios";


Vue.component("my-num",{
	template:`
		<div>
			<p>手里的钱:{{num}}块</p>
			
			<button type="button" @click="changeMoney">花掉一块</button>
		</div>
	`,
	//为什么组件的data 需要设置成为function 类型
	data:function(){
		return {
			num:100
		}
	},
	methods:{
		changeMoney(){
			this.num--
		}
	}
})


var vm=new Vue({
	
	
	
	
}).$mount("#app")