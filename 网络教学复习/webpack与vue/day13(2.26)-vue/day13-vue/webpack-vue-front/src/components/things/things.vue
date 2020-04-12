<template>
	<div class="mythings">
		<h1>待办事项管理中心</h1>
		<img :src="vues" alt="" width="200px" height="200px">
		
		<div>
			<button type="button" @click="goToAll">所有事项</button>
			<button type="button" @click="goToCom">完成事项</button>
			<button type="button" @click="goToUncom">未完成</button>
		</div>
		<br><br>
		<div>
			<router-view></router-view>
		</div>
		
		
		
		
	</div>
	
</template>

<script>
	import vue from "../../img/vue.jpg";
	
	export default {
		data:function (){
			return {
				vues:vue
			}
		},
		methods:{
			goToAll(){
				this.$router.push("/things/all")
			},
			goToCom(){
				this.$router.push("/things/completed")
			},
			goToUncom(){
				this.$router.push("/things/uncomplete")
			}
		},
		mounted() {
			console.log(this)
		}
	}
</script>

<style scoped="scoped">
	
	.mythings {
		padding-left: 15px;
		margin: 0 auto;
		width: 500px;
	}
	
</style>
