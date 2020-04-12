import vue from "vue";
import axios from "axios"

vue.component("mydiv", {
    // slot向组件内部插值
    template: `
    <ul :style="{color:mycolor}">
        <li>{{msg}}</li>
        <li><slot> 默认内部插入内容</slot></li>
        <li><slot name="one"> 默认内部插入内容</slot></li>
        <li><button @click="change">改变值</button></li>
    </ul>`,
    props: ["mycolor"],
    //组件可以使用多次，data是函数会创建多个不同的数据对象，保证数据之间的相互独立
    data:function(){
        return{
            msg:"组件内的消息"
        }
    },
    methods:{
        change(){
            this.msg="改变过后的值"
        }
    }

})

var vm = new vue({
    el: "#app",
    data: {
        student: [],
        passuer: "",
        passwd: "",
        tishi: "",
        mainpage: false,
        mycolor1: "green",
        abc:true,
        bbc:false,
        zhuceiNum:"",
        zhuceipwd:"",
        zhuceiCheck:""

    },
    methods: {
        pss() {
            if (this.passuer.length < 6) {
                this.tishi = "最少需要6位"
            } else {
                this.tishi = ""
            }
        },
        pssw() {
            if (this.passwd.length < 6) {
                this.tishi = "最少需要6位"
            } else {
                this.tishi = ""
            }
        },
        rej(){
            if (this.zhuceiNum.length < 6) {
                this.tishi = "最少需要6位"
            } else {
                this.tishi = ""
            }
        },
        rez(){
            if (this.zhuceipwd.length < 6) {
                this.tishi = "最少需要6位"
            } else {
                this.tishi = ""
            }
        },
        rec(){
            if (this.zhuceiCheck.length < 6) {
                this.tishi = "最少需要6位"
            } else {
                this.tishi = ""
            }
        },
        zhucei(){
            this.abc=false,
            this.bbc=true
        },
        //注册
        resgiter(){
            if(this.zhuceiCheck==this.zhuceipwd){
                axios.post("http://localhost:9999/resgiter", {
                    username: this.zhuceiNum,
                    pwd: this.zhuceipwd
                }).then((data) => {
                    console.log(data.data)
                    alert(data.data.msg);
                    if(data.data.code==0){
                        this.abc=true,
                        this.bbc=false
                    }
                    
                })

            }else{
                alert("两次密码输入不正确")
            }

        },
        // 登录
        login() {
            axios.post("http://localhost:9999/login", {
                username: this.passuer,
                pwd: this.passwd
            }).then((data) => {
                // console.log(data.data)
                alert(data.data.msg);
                if (data.data.code == 2) {
                    this.mainpage = true;

                }
            })
        }

    },
    created() {
        axios.get("http://localhost:9999/test").then((data) => {
            console.log(data)
            this.student = data.data

        })

    }
})