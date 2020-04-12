import Vue from "vue";
import axios from "axios";

Vue.component("my-word", {
    // 方法一
    template:`
    <ul>
      <li>标题：{{words.name}}</li>
      <li>首选：{{words.language}}</li>
    </ul>
    `,
    props:["words"]
    
    // 方法二
//     template: `
//     <ul>
//       <li>标题：<slot></slot></li>
//       <li>首选：<slot name="content"></slot></li>
//       <li>二选：<slot name="another"></slot></li>
// </ul>
//     `
})


new Vue({
    el:"#app",
    data:{
        keyWord:"",
        myWords:[]
    },
    created(){
        // this.myWords=[
        //     {
        //     title:"篮球之神",
        //     content:"乔丹",
        //     another:"詹姆斯"
        // },
        // {
        //     title:"网球之神",
        //     content:"费德勒",
        //     another:"纳达尔"
        // },
        // {
        //     title:"天王",
        //     content:"MJ",
        //     another:"没有了"
        // },
        // {
        //     title:"天后",
        //     content:"碧昂丝",
        //     another:"阿黛尔"
        // }
        // ],
    axios.get("http://localhost:8888/getInter")
    .then(res=>{
        this.myWords=res.data
    })
    },
    watch:{
        keyWord(){
            axios.get("http://localhost:8888/getInter",{
                params:{
                    name:this.keyWord
                }
            }).then(res=>{
                this.myWords=res.data
            })
        }
    }
})