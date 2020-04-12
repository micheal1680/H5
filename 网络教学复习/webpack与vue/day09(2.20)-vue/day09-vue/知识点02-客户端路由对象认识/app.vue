<template>
	<div>
		
<!-- 【请完成作业】
		登录表单
		
		topmenu.vue---使用路由(首页，列表，关于我们)进行页面切换
		首页.vue----写一个轮播图
		列表.vue----前后端分离，展示数据列表并且有动态查询
		关于我们.vue---展示用户信息
-->
		
		
		
		<!-- router-link会被解析渲染成a 标签 -->
		<router-link to="/">首页</router-link>
		<router-link to="/list">列表页</router-link>
		<router-link to="/about">关于我们</router-link>
		
		
		<router-view></router-view>
		
		
	</div>
</template>


<script></script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
</style>
