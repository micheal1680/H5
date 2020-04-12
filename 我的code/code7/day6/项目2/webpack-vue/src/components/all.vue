<template>
  <ul>
      <li v-for="(item,index) in things" :key="index">
          <input type="checkbox" v-model="item.complated">{{item.info}}
      </li>
  </ul>
</template>

<script>
// 访问数据
export default {
    computed:{
        things(){
          console.log(111)
          console.log(this)
      return this.$store.state.mythings;
    }
    }

}
</script>

<style>

</style>