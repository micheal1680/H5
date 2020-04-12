<template>
	<div :style="{width:myWidth,height:myheight,backgroundColor:mycolor}"></div>
</template>

<script>
	export default {
		data:function(){
			return {
				myWidth:"30%",
				myheight:"60px",
				mycolor:"white",
				mWidth:"10px",
			}
		}
	}
</script>

<style>
</style>
