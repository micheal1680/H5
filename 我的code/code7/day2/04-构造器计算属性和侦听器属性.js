// 引入Vue
import Vue from "vue";  //import后面的Vue与new后面的Vue是一个东西
// 新建Vue对象
new Vue({
    el: "#app",
    data: {
        firstName:"李",
        secondName:"旭",
        student:{
            name:""
        }
    },
    computed:{
        fullName:function(){
            console.log("computed");
            return this.firstName + this.secondName;
        }
    },
    methods: {
        changefirst(){
            this.firstName="乔"
        },
        changesecond(){
            this.secondName="老爷子"
        },
        getfullName(){
            console.log("methods")
            return this.firstName + this.secondName;
        }
    }
})