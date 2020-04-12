// 引入Vue
import Vue from "vue";  //import后面的Vue与new后面的Vue是一个东西
// 新建Vue对象
var vm=new Vue({
    el:"#app",
    data:{
        student:{
            name:"詹姆斯",
            grade:99,
            age:35
        }
    },
    methods:{
        changeName:function(){
            console.log("--vm对象--");
            console.log(this.student===this.$data.student);
            console.log(this==vm);
            console.log(this)
            this.student.name="乔丹"
        },
        changeGrade:function(){
            this.student.grade=100
        },
        changeAge:function(){
            this.student.age=32
        }
    }
})
console.log(vm)

// Vue可以多次创建，一个Vue对象只能挂在一个元素上级一个div上

var vmjr=new Vue({
    el:"#myapp",
    data:{
        msg:"篮球之神",
        info:"<span style='color:red'>就</span>是乔丹",
        student:{
            birth:1980,
            gender:0
        }
    },
    methods:{
        getinfocanvas:function(){
            var str=this.msg+this.info;
            return str;
        },
        getgender:function(){
            return this.student.gender
        }
    },
    filters:{
      getAge(value){
          return (new Date).getFullYear()-value
      }
    }
})