import Vue from "vue";

// vm --view model层
// 构造器-->vue 数据劫持-->vm对象
var vm=new Vue({
	el:"#app",
	data:{
		mytitle:'main'
	},
	methods:{
		handleMain(){
			this.mytitle="main";
		},
		handleDetail(){
			this.mytitle="detaile";
		},
		handleInfo(){
			this.mytitle="info"
		}
	}
})

