<template>
  <div>
<h4>个人中心</h4>
<input type="text" @keyup.enter="getData" v-model="msg">

   <div>all:</div>
   <all></all>
   <div>ready:</div>
   <ready></ready>
   <div>complated:</div>
   <complated></complated>
  </div>
</template>

<script>
import all from "../components/all.vue"
import ready from "../components/ready.vue"
import complated from "../components/complated.vue"
export default {
  data:function(){
    return {
      msg:""
    }
  },
  // 引入三个组件，即三个子组件
  components:{
    // 格式----->组件名:使用名(标签名:使用名)
    // 对于标签名，可以不加引号，但是若标签名里面有“-”等符号，就必须加上引号
    all:all,
    ready:ready,
    complated:complated
  },
  methods:{
    getData(){
       this.$store.commit("increatment",this.msg);
       this.msg=""
    }
  },
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