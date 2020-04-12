import Vue from "vue";
import axios from "axios";

Vue.component("my-search",{
    template:`
    <div>
    <input type="text" v-model="keyWord" @keyup.enter="handleSearch">
    <button type="button" @click="handleSearch">点击搜索</button>
    </div>
    `,
    data:function(){
        // 这里return 一个对象，对象里面是键值对，赋值用:，不是=
        return {
            keyWord:""
        }
    },
    methods:{
        handleSearch:function(){
            // myevent是自定义事件
            this.$emit("myevent",this.keyWord)
        }
    }
})


new Vue({
    el:"#app",
    data:{
        Person:[]
    },
    created(){
        // 调用getPerson()
        this.getPerson()
    },
    methods:{
        handleclick(data){
            this.getPerson(data)
        },
        getPerson(data){
            data=data?data:"",
            axios.get("http://localhost:8888/getPerson",{
                params:{
                    keyWord:data
                }
            }).then(res=>{
                this.Person=res.data
            })

        }
    }

})