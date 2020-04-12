<template>
  <ul>
      <li v-for="(item,index) in comthings" :key="index">
          <input type="checkbox" v-model="item.complated">
      {{item.info}}</li>
  </ul>
</template>

<script>
// 获取数据
export default {
computed:{
    comthings(){
        return this.$store.getters.comthings
    }
}
}
</script>

<style>

</style>