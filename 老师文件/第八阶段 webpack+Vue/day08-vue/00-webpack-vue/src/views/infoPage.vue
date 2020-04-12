<template>
<div>
		  <h4>个人中心页面</h4>
		  <input type="text" @keyup.enter="increate" v-model="msg">
		  
		  <div>
			  <router-link to="/infoPage/all">all:</router-link>
			  <router-link to="/infoPage/active">active:</router-link>
			  <router-link to="/infoPage/completed">completed:</router-link>
		  </div>
		  <router-view></router-view>
		  
</div>
</template>

<script>
export default {
	data:function(){
		return {
			msg:""
		}
	},
	beforeRouteEnter(to,from,next){
		next(function(vm){
			vm.$router.push({path:"/infoPage/all"})
		});
	},
	mounted(){
		// console.log(1111)
		// this.$router.push({path:"/infoPage/all"})
	},
	// components:{
	// 	all:all,
	// 	active:active,
	// 	completed:completed
	// },
	methods:{
		increate(){
			this.$store.commit("increament",this.msg);
			this.msg="";
		}
	},
	mounted() {
		console.log(this);
	}
}
</script>

<style>
</style>
