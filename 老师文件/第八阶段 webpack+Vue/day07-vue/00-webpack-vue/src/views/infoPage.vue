<template>
<div>
		  <h4>个人中心页面</h4>
		  <input type="text" @keyup.enter="increate" v-model="msg">
		  <div>all:</div>
		  <all></all>
		  <div>active:</div>
		  <active></active>
		  <div>completed:</div>
		  <completed></completed>
</div>
</template>

<script>
import all from "../components/all.vue";
import active from "../components/active.vue";
import completed from "../components/completed.vue"
export default {
	data:function(){
		return {
			msg:""
		}
	},
	components:{
		all:all,
		active:active,
		completed:completed
	},
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
