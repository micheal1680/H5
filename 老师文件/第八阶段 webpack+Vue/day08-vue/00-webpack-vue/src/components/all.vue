<template>
	<ul>
		<li v-for="(item,index) in things" :key="index">
					 <input type="checkbox" v-model="item.completed"> 
					 <!-- :style="{color:mycolor,fontSize:myfontSize}" -->
					 <span :class="{completed:item.completed}" >{{item.info}}</span>
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
	.completed {
		color: #ccc;
		text-decoration: line-through;
	}
	
</style>
