import Vue from "vue"

var vm = new Vue({
    el: "#app",
    data: {
      msg: "系统初始化页面",
      user: {
        name: "小明明"
      },
      num: 1,
      keyWord:""
    },
    // 钩子函数（生命周期函数）
    beforeCreate(){
        console.log("-----beforeCreate-----");
        console.log(this.msg)//数据节点未创建
    },
    created(){
        console.log("------created------");
        console.log(this.msg)//数据节点已经创建
    },
    beforeMount(){
        console.log("-----beforeMount------");
        var mydata=document.getElementsByTagName("p")[0].innerHTML;
        console.log(mydata);//初始化数据与view层未挂载
    },
    mounted(){
        console.log("------mounted-----");
        var mydata=document.getElementsByTagName("p")[0].innerHTML;
        console.log(mydata);//初始化数据与view层挂载
        this.msg="页面数据已经被修改了哦"
    },
    beforeUpdate(){
        console.log("-----beforeUpdate-----");
        console.log(this.msg);//vm层的数据已经发生修改
        var mydata=document.getElementsByTagName("p")[0].innerHTML;
        console.log(mydata);//v层的数据还未发生修改
        

    },
    updated(){
        console.log("------updated-----")
        console.log(this.msg);
        var mydata=document.getElementsByTagName("p")[0].innerHTML;
        console.log(mydata);//v层的数据已经发生修改
    },
    beforeDestroy(){//解除vm层与v层之间的绑定关系
        console.log("----beforeDestroy----");
        console.log(this.num,this.msg,this.user)
    },
    destroyed(){//解除vm层与v层之间的绑定关系
        console.log("----destroyed-----");
        console.log(this.num,this.msg,this.user)
    },
    methods: {
        changeName(){
            this.user.name="小红红"
        },
        changeNum(){
            this.num++;
        },
        myDestroy(){
            this.$destroy();
        }
    }
   
})
