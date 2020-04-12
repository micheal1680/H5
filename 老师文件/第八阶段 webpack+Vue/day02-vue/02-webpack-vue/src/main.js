import Vue from "vue";
import mLogo from "./baudu.png"

new Vue({
	el:"#app",
	data:{
		msg:"欢迎您，登陆系统",
		loginPage:false,
		myform:"mylogin",
		logoImg:mLogo,
		students:[
			{
				myname:"学生1号",
				grade:88
			},
			{
				myname:"学生2号",
				grade:77
			},
			{
				myname:"学生3号",
				grade:55
			}
		]
	},
	methods:{
		userLogin(){
			this.loginPage=true
		},
		changePage(){
			this.myform="myloginform"
		}
		
	}
})