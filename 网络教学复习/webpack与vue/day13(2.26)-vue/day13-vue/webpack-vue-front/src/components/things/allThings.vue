<template>
	<div>
		<h4>所有事项有{{n}} 个</h4>
		<input type="number" v-model="addComNum" >
		<button type="button" @click="addComplete">完成</button>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				addComNum:""
			}
		},
		//所有需要读取store 对象数据的操作，都放到computed
		computed:{
			n:function(){
				return this.$store.state.num
			}
		},
		methods:{
			addComplete(){
				// this.$store.state.complete++绝对不行,不符合规范，容易影响数据的一致性
				//commit传参
				this.$store.commit("addStateCom",this.addComNum);
				this.addComNum="";
			}
		},
		created(){
			console.log("事项管理--所有事项组件")
			console.log(this.$store)
		}
		
	}
</script>

<style>
</style>
