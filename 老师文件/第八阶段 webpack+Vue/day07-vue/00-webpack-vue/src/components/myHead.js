
var myHead={
	template:`
		<div id="head">
			{{msg}}
			
			<button type="button" @click="handleChange">修改父组件</button>
		</div>
	`,
	data:function(){
		return {
			msg:"这个组件是顶部导航栏"
		}
	},
	methods:{
		handleChange(){
			console.log(this);
			
			this.$root.fthermsg="子向父传值修改***";
		}
	}
	
	
}

export default myHead;