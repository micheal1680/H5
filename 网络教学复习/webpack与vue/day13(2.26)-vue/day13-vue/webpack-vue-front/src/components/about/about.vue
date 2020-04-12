<template>
	<div>
		
		<h1>
			<div>个人中心</div>
		</h1>
		
		
		
		<!-- 子路由相关 -->
		<!-- <button type="button" @click="goToInfo">用户信息</button>
		<button type="button" @click="goToAddr">收货地址</button> -->
<!-- 		<div>
			<router-link to="/about/info">用户信息</router-link>
			<router-link to="/about/adderss">收货地址</router-link>
		</div>
		<div>
			<router-view></router-view>
		</div> -->
		
	</div>
</template>

<script>
export default{
	methods:{
		goToInfo(){
			this.$router.push("/about/info")
		},
		goToAddr(){
			this.$router.push("/about/adderss")
		}
	}
}
</script>

<style>
</style>
