export default {
	template: `
				<div>
					<input type="text" v-model="keyword" />
					<button type="button" @click="handleSearch">点击搜索</button>
				</div>
			`,
	data: function() {
		return {
			keyword: ""
		}
	},
	methods: {
		handleSearch() {
			console.log(this.keyword);
			this.$emit("empinfo", this.keyword)
		}
	}
}
