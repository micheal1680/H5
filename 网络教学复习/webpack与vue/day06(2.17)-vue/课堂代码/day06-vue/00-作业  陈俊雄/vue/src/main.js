import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8081';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers['withCredentials'] = true

var vm = new Vue({
	data: {
		username: "",
		password: "",
		loginStaste: false,
		seccus: true,
		alldata: "",
		addusername: "账号",
		addpossword: "密码"
	},
	methods: {
		handleLogin() {
			if (this.username.length < 6) {
				alert("用户名有误,少于6位")
				return;
			}

			var myregExp = /^(?=.*[a-zA-Z]+)(?=.*\d+)(?=.*\W+).{6,16}$/;
			console.log(this.password);
			console.log(myregExp.test(this.password));
			if (!(myregExp.test(this.password))) {
				console.log(this.password)
				alert("密码有误:6~16位,包含英文/数字/特殊字符")
				return;
			}

			axios.get('http://localhost:8081/login', {
					params: {
						username: this.username,
						password: this.password
					}
				})
				.then((response) => {
					alert(response.data.Msg)
					if (response.data.code == 1) {
						this.loginStaste = true;
						this.seccus = false;
					}
				})
				.catch(function(error) {
					console.log(error);
				});

			axios.get('http://localhost:8081/getdata')
				.then((response) => {
					console.log(response.data.result[0])
					this.alldata = response.data.result;
				})
				.catch(function(error) {
					console.log(error);
				});

		},
		
		add(){
			let addname=document.getElementsByTagName("input")[0].value;
			let addpwd=document.getElementsByTagName("input")[1].value;
		   console.log(addpwd)
			axios.get('http://localhost:8081/add',{
					params: {
						username: addname,
						password: addpwd
					}
				})
				.then((response) => {
					alert(response.data.Msg)
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		del(uid){
			
			console.log(uid)
			axios.get('http://localhost:8081/del',{
					params: {
						uid: uid,
					}
				})
				.then((response) => {
					alert(response.data.Msg)
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		updata(uid){
			let uname=prompt("请输入用户名");
			let psw=prompt("请输入密码");
			console.log(uname,psw)
			axios.get('http://localhost:8081/updata',{
					params: {
						uid:uid,
						username: uname,
						password: psw
					}
				})
				.then((response) => {
					alert(response.data.Msg)
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		select(){
			let selectname=document.getElementsByTagName("input")[2].value;
			axios.get('http://localhost:8081/select',{
					params: {
						username: selectname,
					}
				})
				.then((response) => {
					this.alldata = response.data.result;
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	}
}).$mount("#app")
