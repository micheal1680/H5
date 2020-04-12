import myLingdao from "./myLingdao.js";

var myTeaher={
	// :lingdaonum="$attrs.lingdaonum"
	template: `
				<div>
					<h4>教学团队</h4>
					<p>1/教学团队的人数props:{{teachernum}}</p>
					<p>2/ 教学团队的人数$attrs:{{$attrs}}</p>
					<my-lingdao v-bind="$attrs" v-on="$listeners"></my-lingdao>
				</div>
			`,
	components:{
		"my-lingdao":myLingdao
	},
	props:["teachernum"],
	mounted(){
		console.log("teacher-----");
		console.log(this.teacherNum);//undefined
		console.log(this);
	}
}

export default myTeaher;
