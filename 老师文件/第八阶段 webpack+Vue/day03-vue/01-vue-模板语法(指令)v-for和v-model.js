import Vue from "vue";

new Vue({
	el:"#app",
	data:{
		username:"",
		passW:"",
		LoginForm:false,
		students:[
			{
				myname:"王磊",
				grade:90
			},
			{
				myname:"李岚",
				grade:91
			},
			{
				myname:"李旭",
				grade:92
			},
			{
				myname:"王林",
				grade:92
			}
		]
	},
	methods:{
		userLogin(){
			if(this.username=="sish"&&this.passW=="123456"){
				// alert("登陆成功");
				this.LoginForm=false;
			}
			else{
				alert("用户名密码有错")
			}
		}
	}
})