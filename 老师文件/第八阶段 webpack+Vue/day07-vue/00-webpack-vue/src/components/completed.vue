<template>
	<ul>
		<li v-for="(item,index) in comthings" :key="index">
					 <input type="checkbox" v-model="item.completed"> {{item.info}}
					</li>
	</ul>
</template>

<script>
	export default {
		computed:{
			comthings(){
				return this.$store.getters.comthings;
			}
		}
	}
</script>

<style>
</style>
