<template>
	<div>
			  <h4>详情页面内容{{$route.query.deptid}}</h4>
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
			this.getEmploy()
		},
		updated(){
		},
		watch:{
			"$route.query.deptid":function(){
				console.log(this.$route.query.deptid)
				this.getEmploy()
			}
		},
		methods:{
			getEmploy(){
				axios.get("http://localhost:8888/getEmployees",{
					params:{
						deptid:this.$route.query.deptid
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
