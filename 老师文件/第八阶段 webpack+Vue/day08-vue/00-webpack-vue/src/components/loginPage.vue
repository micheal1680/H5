<template>
	<div>
		用户名：<input type="text" placeholder="请输入用户名" v-model="username" @change="userChange" />
		<span style="color: red;">{{userhit}}</span>
		<br>
		
		密&nbsp;码：<input type="password" v-model="passW" @change="passChange" />
		<span style="color: red;">{{passhit}}</span>
		<br>
		
		
		<button type="button" @click="userLogin">登录</button>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data:function(){
			return {
				msg:"",
				employees:[],
				keyWord:"",
				mainPage:true,
				username:"",
				passW:"",
				userhit:"",
				passhit:""
			}
		},
		filters:{
			iTemName:function(value,keyWord){
				console.log(keyWord)
				if(keyWord){
					return value.replace(keyWord,`<span style="color: red;">${keyWord}</span>`)
				}else{
					return value;
				}
				
			}
		},
		methods:{
			userLogin(){
				axios.post("http://localhost:8888/userLogin",{
					username:this.username,
					password:this.passW
				}).then(data=>{
					
					if(data.data.status==0){
						this.mainPage=true;
						localStorage.setItem("loginStatus",true);
						this.$router.push({path:"/infoPage"})
						
					}else{
						alert(data.data.msg)
					}
					
					
				}).catch(err=>console.log(err))
				
			},
			userChange:function(){
				if(this.username.length<8){
					this.userhit="用户名不少于8位"
				}else{
					this.userhit=""
				}
			},
			passChange:function(){
				if(!(/^(?=.*\d+)(?=.*[a-zA-Z]+)(?=.*[_]+).{6,16}$/igm).test(this.passW)){
					this.passhit="密码必须6-16位，并且同时包含数字、字母、下划线"
				}else{
					this.passhit=""
				}
			}
		},
		watch:{
			keyWord(){
				
				axios.get("http://localhost:8888/getEmployees",{
					params:{
						employName:this.keyWord
					}
				}).then(data=>{
					
					this.employees=data.data
				})
				
			}
		},
		created(){//初始化数据，发起axios 请求
			axios.get("http://localhost:8888/getEmployees")
			.then((data)=>{
				console.log(data);
				
				this.employees=data.data
			})
			
			
		// var that=this;//处理this 指向问题
			axios.get("http://localhost:8888/getData")
			.then((data)=>{//箭头函数处理this
				this.msg=data.data.data
				// console.log(data)
			})
			
			
			
			
		}
	}
</script>

<style>
</style>
