<template>
  <div>
      用户名：<input type="text" placeholder="请输入用户名" v-model="username" @change="userChange" />
      <span style="color: pink;">{{userhit}}</span>
      <br><br>
      密　码：<input type="password" placeholder="请输入密码" v-model="passW" @change="passWChange" />
      <span style="color: pink;">{{passWhit}}</span>
      <br><br>
      <button type="button" @click="userLogin">登录</button>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data: function(){
    return{
        msg:"",
        mainPage:false,
        keyWord:"",
        employees:[],
        username: "",
        passW: "",
        userhit: "",
        passWhit: ""

    }
},
    filters:{
        iTemName:function(value,keyWord){
            if(keyWord){
                return value.replace(keyWord,`<span style="color:blue;">${keyWord}</span>`)
            }else{
                return value;
            }
        }

    },
    // 侦听器
    watch: {
        keyWord() {
            axios.get("http://localhost:8888/getEmployees", {
                params: {
                    employName: this.keyWord
                }
            }).then(data => {
                this.employees = data.data;
            })
        }
    },
    created() {
        axios.get("http://localhost:8888/getEmployees")
            .then((data) => {
                console.log(data);

                this.employees = data.data
            })
        axios.get("http://localhost:8888/getData")
            .then((data) => {
                this.msg = data.data.data
            })
    },
    methods:{
        userLogin:function(){
            console.log("userLogin")
            axios.post("http://localhost:8888/userLogin",{
                username:this.username,
                password:this.passW
            }).then(data=>{
                if(data.data.status==0){
                    this.mainPage=true;
                    // localStorage当地缓存：将信息存储，一旦登录成功，只要一直在访问页面，没有退出登录，那么就会一直处于登录之后的状态，除非手动清除缓存或者退出重新登录。就是每个App的个人中心应用
                    localStorage.setItem("loginStatus",true);
                    this.$router.push({path:"/infoPage"})
                }else{
                    alert(data.data.msg)
                }
            }).catch(err=>console.log(err))
        },
        userChange:function(){
            if(this.username.length<8){
                this.userhit="用户名不少于8位"
            }else{
                this.userhit=""
            }
        },
        passWChange:function(){
            if(!(/^(?=.*\d+)(?=.*[a-zA-Z]+)(?=.*[_]+).{6,16}$/igm).test(this.passW)){
                this.passWhit="密码必须6-16位，并且同时包含数字、字母、下划线"
            }else{
                this.passWhit=""
            }
        }
    }
}
</script>

<style>

</style>