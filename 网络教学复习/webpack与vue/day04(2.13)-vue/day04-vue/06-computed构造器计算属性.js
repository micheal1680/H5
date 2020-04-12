import Vue from "vue";

// vm --view model层
// 构造器-->vue 数据劫持-->vm对象
var vm=new Vue({
	el:"#app",
	data:{
		teacher:{
			firstName:"司",
			secondName:"水花"
		},
		mynum:100
	},
	// 计算属性
	computed:{
		// fullname 所依赖的值发生变化,vue重新计算;当一个值被其他值影响的时候
		fullname:function(){
			console.log("computed--fullname")
			return this.teacher.firstName+this.teacher.secondName
		}
	},
	methods:{
		changeFirst:function(){
			this.teacher.firstName="司马"
		},
		getFullName(){
			console.log("methods--getFullName")
			return this.teacher.firstName+this.teacher.secondName
		}
	}
})

