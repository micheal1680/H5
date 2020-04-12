<template>
	<div>
		<h1>待办事项管理中心</h1>
		<img :src="vues" alt="">
	</div>
	
</template>

<script>
	import vue from "../img/vue.jpg";
	
	export default {
		data:function (){
			return {
				vues:vue
			}
		},
		mounted() {
			console.log(this)
		}
	}
</script>

<style>
</style>
