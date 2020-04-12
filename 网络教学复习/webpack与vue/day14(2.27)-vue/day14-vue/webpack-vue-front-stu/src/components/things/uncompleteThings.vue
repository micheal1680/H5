<template>
	<div>
		<h4>未完成事项有{{n}} 个</h4>
	</div>
</template>

<script>
	export default {
		computed:{
			n(){
				return this.$store.state.num-this.$store.state.complete
			}
		}
	}
</script>

<style>
</style>
