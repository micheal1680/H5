import Vue from "vue";
import axios from "axios";
import mySearch11 from "./components/mySearch.js";



var vm=new Vue({
	components:{
		"my-serach":mySearch11
	},
	data:{
		employees:[],
		childKw:""
	},
	filters:{
		NameToRed:function(val){
			console.log(this)//过滤器属性里的this 并不指向vm
			if(vm.childKw){
				return `<span style='color:red'>${val}</span>`
			}
			return val;
		}
	},
	methods:{
		changeeEmpInfo(value){
			this.childKw=value;
			this.getEmployees(value);
		},
		getEmployees(value){
			axios.get("http://localhost:8888/getEmployee",{
					params:{
						keyWord:value
					}
				}).then(res=>{
					console.log(res.data);
					this.employees=res.data;
				})
		}
	},
	created() {
		this.getEmployees();
				
	}
}).$mount("#app");