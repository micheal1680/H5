import Vue from "vue";

// vm --view model层
// 构造器-->vue 数据劫持-->vm对象
var vm=new Vue({
	el:"#app",
	data:{
		msg:"今天我这边网速是没问题的",
		mylink:"https://www.baidu.com",
		style:"mystyle"
	},
	methods:{
		changeLink:function(){
			this.mylink="http://www.hqyj.com/"
		},
		changStyle:function(){
			this.style=this.style=="mynewstyle"?"mystyle":"mynewstyle";
		}
	}
})

console.log(vm)