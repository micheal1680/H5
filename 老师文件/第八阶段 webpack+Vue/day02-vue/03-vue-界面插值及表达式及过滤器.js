import Vue from "vue";

var vm=new Vue({
	el:"#app",
	data:{
		msg:"界面初始化数据",
		info:"今天<span style='color:red'>天气</span>一般",
		student:{
			birth:1990,
			gender:0
		}
	},
	methods:{
		infoCancatMsg(){
			var str=this.msg+this.info;
			return str;
		},
		getGender(gender){
			return gender==0?"男生":"女生"
		}
		
	},
	filters:{
		getAge(value){
			return (new Date).getFullYear()-value
		}
	}
})