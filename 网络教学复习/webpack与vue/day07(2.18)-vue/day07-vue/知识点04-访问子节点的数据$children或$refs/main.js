import Vue from "vue";
import axios from "axios";
import myTeacher from "./components/myTeacher.js";
import myStudent from "./components/myStudent.js";
var vm=new Vue({
	data:{
		totalNum:"计算中……"
	},
	components:{
		"my-teacher":myTeacher,
		"my-student":myStudent
		,
		"my-xiaozu":{
			template:`
				<h1>学习小组</h1>
			`
		}
	},
	mounted() {
		console.log(this.$children);
		// this.totalNum=this.$children[0].teacherData.length+this.$children[1].studentData.length;
		
		console.log(this.$refs);
		this.totalNum=this.$refs.teacher.teacherData.length+this.$refs.student.studentData.length;

	},
	
	
	
	
	
	
	
	
	
	
	
	methods:{
		// addTeacher(){
		// 	this.peopleData.teacherData.push({
		// 			tname:"司老师",
		// 			duty:"教学",
		// 			desc:"h5员工",
		// 			status:0
		// 		})
		// }
	}
}).$mount("#app");