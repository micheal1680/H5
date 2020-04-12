<template>
	<div>
		<login v-if="isLogin=='login'" @empinfo="changeCode"></login>	
		
		
		<div v-else >
			
			
			<!-- 缓存 -->
			<router-link to="/">首页</router-link>
			
			<!-- 组件传参，编程式导航，组件独享守卫 -->
			<router-link to="/list?deptid=1">新闻部</router-link>
			<router-link to="/list?deptid=2">编辑部</router-link>
			<router-link to="/list?deptid=3">技术部</router-link>
			
			
			<!-- 7、全局导航守卫，缓存组件，路由元信息 -->
			<!--案例：非首页----待办事项 需要缓存，首页-----待办事项 不需要缓存 -->
			<span class="mythings"><router-link to="/things">待办事项</router-link></span>
			
			
			<!-- 本地缓存，子路由 ,路由模式--hash/history-->
			<router-link to="/about">关于我们</router-link>
			
			<!-- <h4>显示根路由所对应的组件router-view要放到app.vue 里</h4> -->
			
			
			<keep-alive>
				<router-view v-if="$route.meta.keepAlive===true"></router-view>
			</keep-alive>
			
			<router-view v-if="$route.meta.keepAlive!==true"></router-view>
			
			
			
			
			
			
			<!-- <keep-alive> -->

				<!-- 命名视图：一个路由，对应多个组件 -->
				<!-- <router-view class="view one"></router-view>
				<router-view class="view two" name="a"></router-view>
				<router-view class="view three" name="b"></router-view> -->
				
			<!-- </keep-alive> -->
			
        </div>
		
	</div>
</template>


<script>
	// <!-- main.js--html#app----app.vue(主组件)--->main.vue
	
	// 		main.vue(首页组件)--list.vue(路由规则)-----router-view(app.vue)---》html#app -->
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

<!--  scoped="scoped"  组件标签加上随机码的属性-->

<style>
	/* 样式穿透 */
	/* 在所有组件上都能起作用 */
	* {
		padding: 0px;
		margin: 0px;
	}
</style>

<style scoped="scoped">
	/* 只在当前app.vue 上起作用 */
	span.mythings {
		background-color: red;
		display: inline-block;
		width: 80px;
		font-size: 18px;
	}
	
</style>