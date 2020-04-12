<template>
	<div id="app">
		<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
		 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item index="1">首页</el-menu-item>
			<el-menu-item index="2">新闻页面</el-menu-item>
			<el-menu-item index="3">列表页面</el-menu-item>
			<el-menu-item index="4">个人中心</el-menu-item>
		</el-menu>
		<router-view />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex2: '2'
			};
		},
		watch:{
			//history
			"$route.path"(){
				this.setActiveIndex2();
			}
		},
		created() {
			//hash
			this.setActiveIndex2();
		},
		methods: {
			setActiveIndex2(){
				switch(this.$route.path){
					case "/":this.activeIndex2="1";break;
					case "/news":this.activeIndex2="2";break;
					case "/list":this.activeIndex2="3";break;
					case "/self":this.activeIndex2="4";break;
				}
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
				switch(key){
					case "1":this.$route.path=="/"?"":this.$router.push("/");break;
					case "2":this.$route.path=="/news"?"":this.$router.push("/news");break;
					case "3":this.$route.path=="/list"?"":this.$router.push("/list");break;
					case "4":this.$route.path=="/self"?"":this.$router.push("/self");break;
				}
			}
		}
	}
</script>


<style lang="scss">
	*{
		margin: 0px;
		padding: 0px;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
