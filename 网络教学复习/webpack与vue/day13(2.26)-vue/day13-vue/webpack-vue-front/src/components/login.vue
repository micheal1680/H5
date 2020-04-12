<template>
  <div>
    <label for>账号：</label>
    <input type="text" v-model="username" />
    <br />
    <label for>密码：</label>
    <input type="password" v-model="passwd" />
    <br />
    <button class="button" type="button" @click="loginTo">登录</button>
  </div>
</template>


<script>
//跨域

import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:8081';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers['withCredentials'] = true;
export default {
  data: function() {
    return {
      username:"",
      passwd: "",
      ctof:"menu"
    };
  },
  methods:{
      loginTo() {
     
	 
      //发起ajax请求
      axios.get('http://localhost:8081/login', {
        params: {
          username: this.username,
          passwd: this.passwd
        }
      })
        //箭头函数解决this 指向问题
        .then((response) => {
          console.log(response.data.msg);
          if (response.data.code == 0) {
            alert("登录成功！");
			
			//sessionStrorege 浏览器本地缓存
			localStorage.setItem("loginStatus","menu");
            
			localStorage.setItem("username",this.username);
			localStorage.setItem("passwd",this.passwd);
			
			this.$emit("empinfo",this.ctof);
			
            //登录成功后获取服务器数据
            // axios.get('http://localhost:8081/list')
            //   .then((response) => {
            //     console.log(response.data);
            //     this.sqldata = response.data
            //   })
            //   .catch((error) => {
            //     console.log(error);
            //   })
          }
        })
        .catch(function (error) {
          alert("登录失败")
          console.log(vm)
        });

    }
  }

 
};
</script>

<style>
</style>
