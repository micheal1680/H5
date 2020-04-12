<template>
	<div>
		<div>
			<!-- <button type="button" @click="getAllData">获取所有用户数据</button> -->
			<br><br><br>
			<input type="text" v-model="keyword" />
			<button type="button" @click="getAllData">点击搜索</button>
			<br>
			<table border="1" v-show="isShow">
				<tr>
					<th>员工姓名</th>
					<th>员工工资</th>
					<th>员工部门</th>
				</tr>
				<tr v-for="(item,index) in edata" :key="index">
					<td>{{item.name}}</td>
					<td>{{item.salary}}</td>
					<td>{{item.deptid}}</td>
				</tr>
			</table>
		</div>
		
		<div v-if="show">
			<h2>请用户访问该页面时携带部门参数！</h2>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data: function() {
			return {
				edata: [],
				isShow: true,
				keyword: "",
				show:false
			};
		},
		beforeRouteUpdate(to,from,next){
			console.log("路由导航守卫")
			console.log(to,from,next);
			if(to.path==from.path  && to.query.deptid!=from.query.deptid){
				this.keyword="";
			}
			
			next();
		},
		methods: {
			getAllData(){
				//this.$route.query.deptid
				// this.$route.params.deptid
				console.log(this.$route.query.deptid)
				axios.get("http://localhost:8081/getData",{
					params:{
						deptid:this.$route.query.deptid,
						keyword: this.keyword
					}
				}).then(res => {
					this.edata = res.data;
				});
			}
		},
		watch:{
			// "$route.query.deptid"(){
			// 	this.getAllData();
			// }
			"$route.query.deptid"(){
				this.getAllData();
				if(this.$route.query.deptid===undefined){
					this.show=true;
				}
			}
		},
		mounted() {
			this.getAllData();
			
			//console.log(this.$route)
			//console.log(this.$route.query.deptid);
		}
	};
</script>

<style>
</style>
