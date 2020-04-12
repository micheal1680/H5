<template>
   <ul>
      <li v-for="(item,index) in readythings" :key="index">
          <input type="checkbox" v-model="item.complated">
      {{item.info}}</li>
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

</style>