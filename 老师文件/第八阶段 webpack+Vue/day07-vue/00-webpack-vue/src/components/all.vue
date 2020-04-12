<template>
	<ul>
		<li v-for="(item,index) in things" :key="index">
					 <input type="checkbox" v-model="item.completed"> {{item.info}}
		</li>
	</ul>
</template>

<script>
	export default {
		computed:{
			things(){
				return this.$store.state.mythings;
			}
		}
	}
</script>

<style>
</style>
