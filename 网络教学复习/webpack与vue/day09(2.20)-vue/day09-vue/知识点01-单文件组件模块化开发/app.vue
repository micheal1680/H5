<template>
	<div>
		<top-menu class="top"></top-menu>
		<left-content class="left"></left-content>
		<right-content class="right"></right-content>
	</div>
</template>


<script>
	
	// 1\ 界面的自适应性  pc  移动端(小程序) :
	//rem  css--px pt @media  em vh/vw  cal()   100% 盒子模型
	
	import topMenu from "./components/topMenu.vue";
	import leftContent from "./components/leftContent.vue";
	import rightContent from "./components/rightContent.vue";
	
	export default {
		components:{
			"top-menu":topMenu,
			"left-content":leftContent,
			"right-content":rightContent
		}
	}
	
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	#app{
		display: flex;
		flex-flow: wrap;
	}
	.top{
		width: 1350px;
		background-color: red;
		height: 60px;
		flex-shrink: 0;
	}
	
	.mytop {
		height: 60px;
		display: flex;
		background-color: #f40;
		text-align: center;
	}			
	.mytop li{
		width: 120px;
		list-style: none;
		line-height: 60px;
	}
	.left{
		background-color: black;
		width: 65%;
		height: 500px;
		margin-top: 10px;
		margin-right: 16px;
		display: inline-block;
		padding: 10px;
		padding-top: 340px;
		box-sizing: border-box;
	}
	.right{
		background-color:gray;
		width: 33%;
		height: 500px;
		margin-top: 12px;
		display: flex;
		justify-content: space-around;
		padding: 10px;
		padding-top: 40px;
		box-sizing: border-box;
	}
</style>
