import Vue from "vue";

//构造器
var obj={
	el:"#app",
	data:{
		student:{
			name:"茶世河",
			age:18
		},
		// data 里的数据属性名不能与methods 方法名重名
		// changeName:"其他数据"
	},
	methods:{
		changeName:function(){
			console.log(this==vm)//true
			this.student.name="罗艳芬"
		}
	}
}
var vm=new Vue(obj);
console.log(vm);
console.log(obj==vm);//false,Vue通过obj 构造器创建vm对象

