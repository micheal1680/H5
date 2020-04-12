<template>
	<div>
		<ul id="nav" @click="changePage">
			<li>首页</li>
			<li>列表页面</li>
			<li>详情页面</li>
			<li>个人中心</li>
		</ul>
		
		<router-link></router-link>
		<!-- 动态组件component ,is 属性的值决定要渲染的组件 -->
		
		<!-- keep-alive 缓存组件,在组件created 阶段设置cache ,当组件重新被渲染时，从cache 根据name把缓存取出来-->
		<!-- 拥有两个属性 exclude/include -->
		<keep-alive exclude="main-page">
				  <component :is="pageId"></component>
		</keep-alive>
	</div>
</template>

<script>
	import mainPage from "./views/mainPage.js";
	import listPage from "./views/listPage.js";
	import detailPage from "./views/detailPage.js";
	import infoPage from "./views/infoPage.js";
	
	export default {
		data:function(){
			return {
				pageId:"list-page"
			}
		},
		components:{
			"main-page":mainPage,
			"list-page":listPage,
			"detail-page":detailPage,
			"info-page":infoPage
		},
		methods:{
			changePage(ev){
				switch(ev.target.innerHTML){
					case "首页":this.pageId="main-page";break;
					case "列表页面":this.pageId="list-page";break;
					case "详情页面":this.pageId="detail-page";break;
					case "个人中心":this.pageId="info-page";break;
				}
			}
		}
	}
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
