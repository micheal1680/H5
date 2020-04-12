// 引入Vue
import Vue from "vue";  //import后面的Vue与new后面的Vue是一个东西
// 新建Vue对象
new Vue({
    el: "#app",
    data: {
       msg:"用户界面",
       user:{
           name:"李旭"
       },
       keyword:"",
       mydata:1
    },
    // 钩子函数（常见的8个钩子函数，分为4个阶段，各司其职）
    // create阶段：创建
    beforeCreate(){
        console.log("--beforeCreate--");
        console.log(this.msg);  //undefined,说明还没有创建数据节点
        console.log(this)
    },
    created(){
        console.log("--created--");
        console.log(this.msg);//用户界面,说明已经创建数据节点
        console.log(this)
    },
    // mount阶段：挂载
    beforeMount(){
        var PageData=document.getElementsByTagName("p")[0].innerHTML;
        console.log(PageData);//{{msg}}，说明VM层的数据没有挂载到view层即视图层即V层上
        console.log("--beforeMount--")
    },
    mounted(){
        var PageData=document.getElementsByTagName("p")[0].innerHTML;
        console.log(PageData);//用户界面，说明VM层的数据已经挂载到view层即视图层即V层上
        console.log("mounted");
        this.msg="用户界面发生修改"
    },
    // update阶段：更新
    beforeUpdate(){
        var PageData=document.getElementsByTagName("p")[0].innerHTML;
        console.log("--beforeUpdate--");
        console.log(this.msg); //“用户界面发生修改”，说明VM层数据发生修改
        console.log(PageData);//“用户界面”，说明V层数据未发生修改
       
    },
    updated(){
        var PageData=document.getElementsByTagName("p")[0].innerHTML;
        console.log("--updated--");
        console.log(this.msg);//“用户界面发生修改”，说明VM层数据发生修改
        console.log(PageData);//“用户界面发生修改”，说明V层数据发生修改
    },
    // destroy阶段：销毁（销毁的不是vm对象，销毁的是VM层与V层之间的关系即数据传递和事件监听等联系）
    beforeDestroy(){
        console.log("--beforeDestroy--");
        console.log(this.msg,this.user,this.keyword,this.mydata)
    },
    destroyed(){
        console.log("--destroyed--");
        console.log(this.msg,this.user,this.keyword,this.mydata)
    },
    methods: {
        changeName(){
            this.user.name="乔老爷子"
        },
        changedata(){
            this.mydata++;
        },
        myDestroy(){
            this.$destroy();
        }
    }
})