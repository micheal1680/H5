import mySearch from "./mySearch.js"
import axios from "axios"


var listPage={
    template:`
    <div>
    <h4>列表页面</h4>
    <my-search @myevent="handleclick"></my-search>

  <ul>
    <li v-for="p in Person">{{p.name}}</li>
  </ul>
</div>
    `,
    components:{
        // my-search是listpage 的子组件，将该子组件单独写在一个js文件里面，再引入即可
        "my-search":mySearch
    },
    data:function(){
        return {
            Person:[]
        }
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
}

export default listPage