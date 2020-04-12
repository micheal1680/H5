<template>
	<div>
		<div class="showThings" v-for="(item,index) in things" :key="index">
			<span ref="thr">{{item.thing}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			things: function() {
				return this.$store.state.all
			}
		},

	}
</script>

<style>
	.showThings {
		width: 500px;
		height: 50px;
		box-shadow: 10px 10px 10px #ccc;
		font-size: 24px;
		padding-left: 40px;
		border-radius: 20px;
		line-height: 50px;
		color: #999;
		display: flex;
		justify-content: space-between;
	}
</style>
