import Vue from "vue";

// vm --view model层
// 构造器-->vue 数据劫持-->vm对象
var vm=new Vue({
	el:"#app",
	data:{
		kword:"请输入关键词",
		username:"请输入用户名",
		myhobby:false,
		sexy:"boy",
		know:[]
	},
	methods: {
		consoleInput() {
			console.log("vm:  "+this.kword)
			var myinput=document.getElementsByTagName("input")[0].value;
			console.log("input标签:   "+myinput)
		},
		editInput(){
			this.kword="vm 上对关键词产生了修改"
		}
	},
})

