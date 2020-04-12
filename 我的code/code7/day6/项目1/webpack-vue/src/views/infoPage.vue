<template>
  <div>
<h4>个人中心</h4>
<input type="text" @keyup.enter="getData" v-model="msg">

<!-- infoPage路由下的几个子路由的跳转 -->
<br>
<div>
  <!-- 写一个“待办事项”模块 -->
   <router-link to="/infoPage/all">all</router-link>
    <router-link to="/infoPage/ready">ready</router-link>
   <router-link to="/infoPage/complated">complated</router-link>

   </div>
   <!-- 渲染这几个组件 -->
   <router-view></router-view>

  </div>
</template>

<script>
export default {
  data:function(){
    return {
      msg:""
    }
  },
  // 在router的底下进行三个子路由的引入之后，infoPage可以不用再进行引入这三个子组件
  // 引入三个组件，即三个子组件
  // components:{
    // 格式----->组件名:使用名(标签名:使用名)
    // 对于标签名，可以不加引号，但是若标签名里面有“-”等符号，就必须加上引号
  //   all:all,
  //   ready:ready,
  //   complated:complated
  // },
  methods:{
    getData(){
      // commit：提交
      // 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation
       this.$store.commit("increatment",this.msg);
       this.msg=""
    }
  },
  //用路由独享导航守卫解决路由指向问题（在infoPage里面输入关键字可以同时将all路由里面的东西全部显示在页面），只有beforeRouteEnter才能实现
  // 还可以用“重定向”解决这个问题（重定向：对跳转的路由进行重新定义router/index.js）
  // beforeRouteEnter(to,from,next){
  //   next(function(vm){
  //     vm.$router.push({path:"/infoPage/all"})
  //   })
  // },
  // 补充：这里面不能用this，因为在这之前没有创建对象，是undefined，而且next是函数，函数内部不能出现this,会出现指向问题
  computed:{
    things(){
      // 这里使用了store，那么有引入就得有导出，store的index.js文件需要导出
      return this.$store.state.mythings;
    }
  },
  mounted(){
    console.log(this)
  }

}
</script>

<style>


</style>