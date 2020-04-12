<template>
   <ul>
      <li v-for="(item,index) in readythings" :key="index">
          <input type="checkbox" v-model="item.complated">
      <span :class="{complated:item.complated}">{{item.info}}</span></li>
  </ul>
</template>

<script>
// 获取数据
export default {
    computed:{
        readythings(){
        return this.$store.getters.readythings
    }
    }
   

}
</script>

<style>
.complated{
  /* 即已经完成的事项就会变成：灰色字体，中间被横线划掉的样式 */
  color: #ccc;
  text-decoration: line-through;
}
</style>