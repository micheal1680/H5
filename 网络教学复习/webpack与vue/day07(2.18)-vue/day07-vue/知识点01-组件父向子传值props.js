import Vue from "vue";
import axios from "axios";

Vue.component("my-employee",{
	// template:`
	// 	<div>
	// 		<p>
	// 			<span> 员工姓名:<slot name="ename"></slot></span>
	// 		</p>
	// 		<p><span>员工工资:<slot name="esalary"></slot></span> </p>
			
	// 		<br><br>
	// 	</div>
	// `
	template:`
		<div>
			<p>
				<span> 员工姓名:{{emp.name}}</span>
			</p>
			<p><span>员工工资:{{emp.salary}}</span></p>
			
			<br><br>
		</div>
	`,
	props:["emp"]
})





var vm=new Vue({
	data:{
		keyword:"",
		employees:[]
	},
	methods:{
		handleSearch:function(){
			console.log(this.keyword);
			//根据用户关键词--名字,显示对应的员工信息
			axios.get("http://localhost:8888/getEmployee",{
				params:{
					keyWord:this.keyword
				}
			}).then(res=>{
				console.log(res.data);
				this.employees=res.data;
			})
			
		}
	}
}).$mount("#app")