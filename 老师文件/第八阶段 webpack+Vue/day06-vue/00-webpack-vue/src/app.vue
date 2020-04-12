<template>
	<!-- $ cnpm i --save vue-router -->
	<div>
		<div>
			<router-link to="/">首页</router-link>
			<router-link to="/listPage">列表页面</router-link>
			<router-link to="/detailPage?deptid=1">详情页面-软件部</router-link>
			<router-link to="/detailPage?deptid=2">详情页面-硬件部</router-link>
			<router-link to="/infoPage">个人中心</router-link>
		</div>
		
		<router-view></router-view>
	</div>
</template>

<script>
	
</script>

<style>
	#nav {
		background-color: #0D3349;
		height: 60px;
		list-style: none;
	}
	
	#nav li {
		float: left;
		width: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-weight: 700;
		height: 100%;
		cursor: pointer;
	}
	ul[autoplay]{
	    /* display: flex; */
	    width: 200px;
	    height: 200px;
	    display: flex;
	    overflow: hidden;
	}
	li{
	    list-style: none;
	}
	img{
	    width: 200px;
	    height: 200px;
	}
	
	#mainpage {
		display: flex;
		justify-content: center;
		text-align: center;
		flex-wrap: wrap;
	}
	#mainpage h4 {
		width: 100%;
	}
</style>
