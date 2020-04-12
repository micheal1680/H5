//引入vue 框架插件
import Vue from "vue";

//创建vue 对象
var vm=new Vue({
	el:"#app",
	data:{
		student:{
			myname:"王磊",
			grade:88,
			age:18
		}
		// data 选项里属性名不能与methods 选项里的属性名重名
		// ,
		// changeName:"test"
	},
	methods:{
		changeName(){
			console.log("-----------vm对象------")
			console.log(this===vm);
			console.log(this.student===this.$data.student)
			console.log(this)
			this.student.myname="李旭"
		}
	}
	
})

console.log(vm);


new Vue({
	el:"#myapp",
	data:{
		student:{
			grade:99
		}
	}
})
