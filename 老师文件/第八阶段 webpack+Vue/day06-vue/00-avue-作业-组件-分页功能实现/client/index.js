import Vue from "vue"
import axios from "axios"
// import bus from './utils/bus.js'
let bus = new Vue()//bus 组件间互相传值
Vue.component("mysearch",{
   
        template:`<div>
        <input type="text" v-model="word">
        <button @click="search">搜索</button>
    </div>`,
    data:function(){
        return{
            word:""
        }
    },
    methods:{
        search(){
            console.log(this.$listeners)
            this.$emit("myevent",this.word)//子向父传递数据首先触发自定义事件，并传值
        
        }
    }
   
})

Vue.component('pagesearch',{
    template:` <div>
    <button v-on:click="myprev">上一页</button>
    <input type="text" v-model="page"><span>第{{page}}页</span>
    <button v-on:click="mynext">下一页</button>
    <button v-on:click="myjump">跳转</button>
</div>`,
    data:function(){
        return{
            page:1
        }
    },
    methods:{
        myprev(){
            this.page--
            this.$emit("getprev",this.page)
        },
        mynext(){
            this.page++
            this.$emit("getnext")
        },
        myjump(){
            this.$emit("jumpto",this.page)
        }
    }
})
let vm =new Vue({
    el: "#app",
    data:{
        products:[],
        word:'',
        page:1
   },

   created(){
         this.getProducts(this.word,this.page)
    },

    methods: {
        handleclick(value) {//在父组件上绑定监听该自定义事件
            this.word = value
            this.getProducts(value)
        },
        getProducts(word,page){
            if(!page){
                page=1
            }
            axios.get("http://localhost:8888/getproducts",{
                params:{
                    keyword:word,
                    page:page
                }
            })
            .then(res=>{
                this.products=res.data
            })
        },
        handleprev(value){
            this.page--;
            this.getProducts(this.word,this.page)
        },
        handlenext(){
            this.page++
            this.getProducts(this.word,this.page)
        },
        handlejump(page){
            this.page = page
            this.getProducts(this.word,this.page)

        }
    }

 
})
console.log(vm.$emit)