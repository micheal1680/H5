import myLingdao from "./myLingdao.js";

var myStudent={
	template: `
				<div>
					<slot></slot>
					<h4>学生大队</h4>
					<p>学生大队的人数:{{stuNum}}</p>
				</div>
			`,
	data: function() {
		return {
			studentData:[
				{tname:"陈俊雄"},
				{tname:"刘星宇"},
				{tname:"罗艳芬"},
				{tname:"李旭"},
				{tname:"茶世河"}
			]
		}
	},
	computed:{
		stuNum:function(){
			return this.studentData.length;
		}
	},
	components:{
		"my-xiaozu":{
			template:`
				<h1>学习小组</h1>
			`
		}
	}
}

export default myStudent;
