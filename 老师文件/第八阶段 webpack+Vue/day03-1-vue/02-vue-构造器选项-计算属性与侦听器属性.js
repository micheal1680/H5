import Vue from "vue";

new Vue({
	el:"#app",
	data:{
		firstName:"彭",
		secondName:"朝辉",
		fullName:"彭朝辉",
		student:{
			num:9,
			grade:98,
			studyNum:2019072609
		}
	},
	 watch:{
		firstName(){
			this.fullName=this.firstName+this.secondName
		},
		secondName(){
			this.fullName=this.firstName+this.secondName
		},
		"student.num"(){
			this.student.grade=this.student.num*10+parseInt(Math.random()*10)
			
			var studyNum=(this.student.studyNum).toString()//原来的学号
			this.student.studyNum=studyNum.substring(0,studyNum.length-1)
			this.student.studyNum+=this.student.num
		}
	},
	//计算属性,数据属性不需要在data里实现
	computed:{
		fullName:function(){
			console.log("computed——————fullName")
			return this.firstName+this.secondName
		}
	},
	methods:{
		getFullName(){
			console.log("methods——————fullName")
			return this.firstName+this.secondName
		},
		changeFirst(){
			this.firstName="王"
		},
		changeSecond(){
			this.secondName="磊"
		},
		changNum(){
			this.student.num=8
		}
	},
	// 侦听器属性,数据属性必须要在data 里实现

})