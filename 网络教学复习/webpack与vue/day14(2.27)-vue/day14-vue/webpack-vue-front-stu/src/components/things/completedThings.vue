<template>
	<div class="mythings">
		<h4>已完成事项有{{n}} 个</h4>
	</div>
</template>

<script>
	export default {
		computed:{
			n:function(){
				return this.$store.getters.getCompThings}
		}
		
	}
</script>

<style scoped="scoped">
	.mythings {
		color: #ccc;
	}
</style>
