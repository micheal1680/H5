import Vue from "vue";

// vm --view model层
// 构造器-->vue 数据劫持-->vm对象
var vm=new Vue({
	el:"#app",
	data:{
		teacher:{
			firstName:"司",
			secondName:"水花",
			grade:100,
			gongzi:10000,
			shengzhi:100
		},
		fullname:"",//
		myname:false
	},
	// computed:{
	// 	fullname:function(){
	// 		return this.teacher.firstName+this.teacher.secondName
	// 	}
	// },
	// 侦听器属性
	watch:{
		// 初始化数据影响其他值的时候,侦听初始化数据有没有发生修改
		"teacher.grade":function(){
			this.teacher.gongzi=this.teacher.gongzi-100;
			this.teacher.shengzhi--
		}
		// "teacher.firstName":function(){
		// 	console.log("姓发生了修改")
		// 	this.fullname=this.teacher.firstName+this.teacher.secondName
		// },
		// "teacher.secondName"(){
		// 	console.log("名字发生了修改")
		// 	this.fullname=this.teacher.firstName+this.teacher.secondName
		// }
	},
	methods:{
		changeFirst:function(){
			this.teacher.firstName="司马"
		},
		changeSecond(){
			this.teacher.secondName="光"
		}
		,
		changeGrade(){
			this.teacher.grade--
		},
		getFullName(){
			this.fullname=this.teacher.firstName+this.teacher.secondName;
		}
		
		
	}
})

