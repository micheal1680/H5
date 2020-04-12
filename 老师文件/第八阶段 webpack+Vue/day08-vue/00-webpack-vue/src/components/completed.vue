<template>
	<ul>
		<li v-for="(item,index) in comthings" :key="index">
					 <input type="checkbox" v-model="item.completed"> <span :class="{completed:item.completed}">{{item.info}}</span>
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
	.completed {
		color: #ccc;
		text-decoration: line-through;
	}
</style>
