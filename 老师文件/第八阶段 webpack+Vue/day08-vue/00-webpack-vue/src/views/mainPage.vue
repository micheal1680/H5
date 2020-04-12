<template>
	<div id="mainpage">
			  <button @click="changeRouter">点击查看编辑部</button>
			  <h4>首页内容</h4>
			  <div>
			  		  <img src="https://www.baidu.com/img/dong_1388792da98c99c5b52f9e39557c31ca.gif" alt="">
			  </div>
	</div>
</template>

<script>
	export default {
		methods:{
			changeRouter(){
				this.$router.push({path:"/detailPage",query:{deptid:3}})
			}
		}
	}
</script>

<style>
</style>
