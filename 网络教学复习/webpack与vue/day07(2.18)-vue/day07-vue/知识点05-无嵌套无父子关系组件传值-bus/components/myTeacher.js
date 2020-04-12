import myLingdao from "./myLingdao.js";

var myTeaher={
	template: `
				<div>
					<h4>教学团队</h4>
					<p>教学团队的人数:{{teacherNum}}</p>
					<my-lingdao></my-lingdao>
				</div>
			`,
	data: function() {
		return {
			teacherData:[
				{
					tname:"马老师",
					duty:"教学",
					desc:"h5员工",
					status:0
				},
				{
					tname:"蒋老师",
					duty:"教学",
					desc:"h5员工",
					status:0
				},
				{
					tname:"刘老师",
					duty:"教务",
					desc:"班主任",
					status:0
				},
				{
					tname:"郭老师",
					duty:"教务",
					desc:"班主任",
					status:0
				}
			]
		}
	},
	computed:{
		teacherNum:function(){
			return this.teacherData.length;
		}
	},
	components:{
		"my-lingdao":myLingdao
	}
}

export default myTeaher;
