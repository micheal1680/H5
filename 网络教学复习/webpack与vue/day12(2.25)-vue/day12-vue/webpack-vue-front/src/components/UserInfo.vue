<template>
	<div>
		<div>
			<span>账号：{{username}} </span>
			<span>密码： {{passwd}}</span>
		</div>
		
		<button type="button" @click="loginOut">退出，回到form表单</button>
	</div>
</template>


<script>
	export default{
		data:function(){
			return {
				username:localStorage.getItem("username"),
				passwd:localStorage.getItem("passwd")
			}
		},
		methods:{
			loginOut(){
				localStorage.setItem("loginStatus","login");
			}
		}
	}
</script>


<style>
</style>
