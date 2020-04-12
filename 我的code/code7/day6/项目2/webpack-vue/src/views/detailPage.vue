<template>
       <div>
           <!-- <button type="button">回到首页</button> -->
           <router-link to="/">回到首页</router-link>
       <h4>详情页面内容{{$route.params.deptid}}</h4>
          <ul>
              <li v-for="(item,index) in Peoples" :key="index">姓名：{{item.name}}</li>
          </ul>
       </div>
</template>
<script>
import axios from "axios";
export default {
    data:function(){
        return {
            Peoples:[]
        }
    },
    mounted(){
        // this.$route.query.deptid和this.$route.params.deptid两种传参方式
        // console.log(this.$route.query.deptid);
        console.log(this.$route.params.deptid)
        this.getPeople()
    },
    updated(){
    },
    // 组件内部的导航守卫
    beforeRouteUpdate(to,from,next){
        // this.$route.params.deptid=to.params.params;
        this.getPeople();
        next()
    },
    watch:{
        // 想要$route.query.deptid作为一个函数名，解决方法就是加上引号（因为函数名不能出现.）
        // "$route.params.deptid":function(){
        //     console.log(this.$route.params.deptid);
        //     this.getPeople()
        // }
    },
    methods:{
        getPeople(){
            axios.get("http://localhost:8888/getPeoples",{
                params:{
                   deptid:this.$route.params.deptid
                }
                }).then(res=>{
                    this.Peoples=res.data
                })
            }
        }
        // changeRouter(){
        //     // 编程式导航路由
        //     this.$router.push({
        //         path:"/"
        //     })
        // }

    }

</script>

<style>

</style>