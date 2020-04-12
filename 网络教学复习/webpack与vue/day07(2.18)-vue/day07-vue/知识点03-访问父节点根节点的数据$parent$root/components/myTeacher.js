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
			teacherNum:"计算中……"
		}
	},
	components:{
		"my-lingdao":myLingdao
	},
	created:function(){
		console.log(this);
		console.log(this==myTeaher);

		console.log(this.$parent);//vm
		console.log(this.$root);//vm
	},
	// watch:{
	// 	"$parent.peopleData.teacherData"(){
	// 			this.teacherNum=this.$parent.peopleData.teacherData.length;
	// 	}
	// },
	mounted:function(){
		//子组件挂载到父节点上市
		this.teacherNum=this.$parent.peopleData.teacherData.length;
	}
}

export default myTeaher;
