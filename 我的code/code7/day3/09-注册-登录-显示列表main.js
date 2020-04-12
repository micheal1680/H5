// 引入Vue
import Vue from "vue";
import axios from "axios";

// 新建Vue对象
new Vue({
    data: {
        msg:"",
        mainPage:false,
        keyWord:"",
        employees:[],
        username: "",
        passW: "",
        userhit: "",
        passWhit: "",
        rigisterPage:false,
        loginPage:true
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
                    this.loginPage=false
                }else{
                    alert(data.data.msg)
                }
            }).catch(err=>console.log(err))
        },
        pagechange(){
            this.rigisterPage=true
            this.loginPage=false
        },
        userindex:function(){
            console.log("userindex");
            axios.post("http://localhost:8888/userindex",{
                username:this.username,
                password:this.passW
            }).then(data=>{
                if(data.data.status==0){
                    alert("注册成功")
                    this.rigisterPage=false
                    this.loginPage=true
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
}).$mount("#app")