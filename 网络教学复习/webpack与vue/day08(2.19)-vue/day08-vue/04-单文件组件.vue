<template>
	<div @click="handleToPage">
		<ul class="mytop">
			<li>首页</li>
			<li>列表页</li>
			<li>关于我们</li>
		</ul>
	</div>
</template>


<script>
	export default {
		methods:{
			handleToPage(e){
				console.log(e.target.innerHTML);
				switch(e.target.innerHTML){
					case "首页": this.$emit("page","my-main"); break;
					case "列表页": this.$emit("page","my-list"); break;
					case "关于我们":this.$emit("page","my-info");  break;
				}
				
			}
		}
	}
</script>




<style type="text/css">
	.mytop {
		height: 60px;
		display: flex;
		background-color: #f40;
		text-align: center;
	}

	.mytop li {
		width: 120px;
		border-left: 2px solid aliceblue;
		list-style: none;
		line-height: 60px;
	}
</style>
