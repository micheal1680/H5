import Vue from "vue";
import axios from "axios";

// vm --view model层
var vm=new Vue({
	data:{
		username:"",
		password:"",
		loginStaste:false
	},
	methods:{
		handleLogin(){
			if(this.username.length<6){
				alert("用户名有误,少于6位")
				return;
			}
			// 6~16,包含英文/数字/特殊字符
			
			var myregExp=/^(?=.*[a-zA-Z]+)(?=.*\d+)(?=.*\W+).{6,16}$/;
			console.log(this.password);
			console.log(myregExp.test(this.password));
			if( !(myregExp.test(this.password)) ){
				alert("密码有误:6~16位,包含英文/数字/特殊字符")
				return;
			}
			
			//发起请求promise
			//引起跨域的条件:协议/ip/端口不一样时
			axios.get('http://localhost:8888/login',{
				params: {
				  username: this.username,
				  password: this.password
				}
			  })
			//箭头函数解决this 指向问题
			  .then( (response)=>{
			    alert(response.data.msg);
				if(response.data.status==0){
					this.loginStaste=true
				}
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
			
			
			
			
			
			
		}
	}
}).$mount("#app")


