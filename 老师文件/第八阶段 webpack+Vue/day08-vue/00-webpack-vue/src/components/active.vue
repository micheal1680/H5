<template>
	<ul>
		<li v-for="(item,index) in actthings" :key="index">
					 <input type="checkbox" v-model="item.completed"> {{item.info}}
					</li>
	</ul>
</template>

<script>
	export default {
		computed:{
			actthings(){
				return this.$store.getters.actthings;
			}
		}
	}
</script>

<style>
</style>
