import Vue from "vue";
import axios from "axios";//安装和引入axios

new Vue({
	data:{
		msg:"",
		employees:[],
		keyWord:""
	},
	watch:{
		keyWord(){
			axios.get("http://localhost:8888/getEmployees",{
				params:{
					employName:this.keyWord
				}
			}).then(data=>{
				this.employees=data.data
			})
			
		}
	},
	created(){//初始化数据，发起axios 请求
		axios.get("http://localhost:8888/getEmployees")
		.then((data)=>{
			console.log(data);
			
			this.employees=data.data
		})
		
		
	// var that=this;//处理this 指向问题
		axios.get("http://localhost:8888/getData")
		.then((data)=>{//箭头函数处理this
			this.msg=data.data.data
			// console.log(data)
		})
		
		
		
		
	}
}).$mount("#app")