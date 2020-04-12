export default {
	template: `
		<div class="mylingdap">
			<h4>领导班子</h4>
			<p>1/ 领导人数-数据：{{lingdaonum}}</p>
			<p>2/ 领导人数-$attrs：{{$attrs.lingdaonum}}</p>
			
			<button type="button" @click="kaichudiao">开除掉陈同学</button>
			<button type="button" @click="zhaopinTea">招聘一位陈老师</button>
		</div>
	`,
	data: function() {
		return {
			lingdaonum:"计算中"
		}
	},
	// props:["lingdaonum"],
	methods:{
		kaichudiao(){
			
		},
		zhaopinTea(){
			this.$emit("grandpa",
			{tname: "陈老师",
			duty: "教学-实习",
			desc: "h5员工",
			status: 1})
		}
	},
	mounted(){
		console.log("mylingdao----------")
		console.log(this);
	}
	
}
