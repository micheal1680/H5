// 引入Vue
import Vue from "vue";  //import后面的Vue与new后面的Vue是一个东西
// 新建Vue对象
new Vue({
    el: "#app",
    data: {
        username: "",
        passW: "",
        Loginform: true,
        students: [
            {
                name: "刘诗诗",
                grade: 88
            },
            {
                name: "乔丹",
                grade: 88
            },
            {
                name: "詹姆斯",
                grade: 88
            }
        ]
    },
    methods: {
        userLogin() {
            if (this.username == "lixu" && this.passW == "123456") {
                this.Loginform = false;
            } else {
                alert("用户密码错误");
            }
        }
    }
})