// 引入Vue
import Vue from "vue";  
import axios from "axios";

// 新建Vue对象
new Vue({
    data: {
      msg:"",
      employees:[],
      keyword:""
    },
    // 侦听器
    watch:{
        keyword(){
            axios.get("http://localhost:8888/getEmployees",{
                params:{
                    employName:this.keyword
                }
            }).then(data=>{
                this.employees=data.data;
            })
        }
    },
    created(){
        axios.get("http://localhost:8888/getEmployees")
		.then((data)=>{
			console.log(data);
			
			this.employees=data.data
		})
        axios.get("http://localhost:8888/getData")
        .then((data)=>{
            this.msg=data.data.data
        })
    }
}).$mount("#app")