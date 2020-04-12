<template>
	<div>
				<button @click="changeRouter">回到首页</button>
				<!-- <router-link to="/">回到首页</router-link> -->
			  <h4>详情页面内容{{$route.params.deptid}}</h4>
			  <ul>
			  	<li v-for="(item,index) in employees" :key="index">员工姓名：{{item.name}}</li>
			  </ul>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data:function(){
			return {
				employees:[]
			}
		},
		mounted() {
			console.log(this.$route.query.deptid)
			console.log(this.$route.params.deptid)
			this.getEmploy()
		},
		updated(){
		},
		//组件内部的导航守卫
		beforeRouteUpdate(to,from,next){
			this.$route.params.deptid=to.params.deptid
			this.getEmploy();
			next();
		},
		watch:{
			// "$route.params.deptid":function(){
			// 	console.log(this.$route.query.deptid)
			// 	console.log(this.$route.params.deptid)
			// 	this.getEmploy()
			// }
		},
		methods:{
			changeRouter(){
				//编程式（导航）路由
				this.$router.push({path:"/"})
			},
			getEmploy(){
				axios.get("http://localhost:8888/getEmployees",{
					params:{
						deptid:this.$route.params.deptid
					}
				}).then(res=>{
					this.employees=res.data
				})
			}
		}
		
	}
</script>

<style>
</style>
