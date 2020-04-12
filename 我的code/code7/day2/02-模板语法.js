// 引入Vue
import Vue from "vue";  //import后面的Vue与new后面的Vue是一个东西
import mlogo from "./header.jpg";
// 新建Vue对象
new Vue({
    el:"#app",
    data:{
        msg:"欢迎您，登录教务系统",
        loginPage:false,
        logoImg:mlogo,
        myform:"myinfom",
        student:{
            name:"刘诗诗",
            grade:88
        }
    },
    methods:{
        userLogin(){
            this.loginPage=true
        },
        changePage(){
            this.myform="myloginform"
        }
    }
})