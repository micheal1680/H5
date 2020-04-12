import Vue from "vue";
import axios from "axios";
import myTeacher from "./components/myTeacher.js";

var vm=new Vue({
	data:{
		peopleData:{
			teacherData:[
				{
					tname:"鲁老师",
					duty:"教学",
					desc:"h5组长",
					status:1
				},
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
			],
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
		totalNum:function(){
			return this.peopleData.teacherData.length+this.peopleData.studentData.length;
		}
	},
	components:{
		"my-teacher":myTeacher
	},
	methods:{
		addTeacher(){
			this.peopleData.teacherData.push({
					tname:"司老师",
					duty:"教学",
					desc:"h5员工",
					status:0
				})
		}
	}
}).$mount("#app");