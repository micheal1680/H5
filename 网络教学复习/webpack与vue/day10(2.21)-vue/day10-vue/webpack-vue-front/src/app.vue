<template>
	<div>
		<login v-if="isLogin=='login'" @empinfo="changeCode"></login>	
		
		<!--
				main.js:app.vue-----app.html
				app.vue:路router(规则)------router-view
				router-view:   /about------about.vue
		-->
		<div v-else >
			<router-link to="/">首页</router-link>
			<!-- 组件传参方式1、query -->
			<router-link to="/list?deptid=1">新闻部</router-link>
			<router-link to="/list?deptid=2">编辑部</router-link>
			<router-link to="/list?deptid=3">技术部</router-link>
			
			
			<!-- 组件传参方式2、params,如果参数丢掉，组件模板完全不渲染 -->
			<!-- <router-link to="/list/1">新闻部</router-link>
			<router-link to="/list/2">编辑部</router-link>
			<router-link to="/list/3">技术部</router-link> -->
			
			
			
			
			
			
			<router-link to="/about">关于我们</router-link>
			
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
			
        </div>
		
		
	</div>
</template>


<script>
    import Login from "./components/login.vue"
	export default {
		components:{
			"login":Login
        },
        data:function(){
            return{
                isLogin:"login"
            }
		},
		methods:{
			changeCode(value){
				this.isLogin=value;
				console.log(this.isLogin)
			}
		},
		created() {
			if(localStorage.getItem("loginStatus")=="menu"){
				this.isLogin="menu";
			}
			
		}
		
	}
	
</script>