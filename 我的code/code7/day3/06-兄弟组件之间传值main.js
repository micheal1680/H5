import Vue from "vue";
import axios from "axios";
import myBus from "./utils/Bus.js"

new Vue({
    el: "#app",
    data: {
        keyWord: "",
        myWords: []
    },
    components: {
        "my-nav": {
            template: `
            <ul @click="handle">
              <li data-title="1">人物</li>
              <li data-title="2">称号</li>
              <li data-title="3">战绩</li>
            </ul>
            `,
            methods:{
                handle(e){
                    console.log(e.target.dataset.title)
                    myBus.$emit("changetitle",e.target.dataset.title)
                    myBus.$emit("changeTitle",e.target.dataset.title)

                }
            }
        },
        "my-content": {
            template:`
            <ul>
              <li v-if="title==1">乔丹</li>
              <li v-if="title==2">篮球之神</li>
              <li v-if="title==3">6个总冠军</li>
            </ul>
            `,
            data:function(){
                return {
                    title:1
                }
            },
            mounted(){
                // 这里用箭头函数，避免this出现错误指向问题
                myBus.$on("changeTitle",(title)=>{
                    this.title=title
                })
            }


        }
    }
})