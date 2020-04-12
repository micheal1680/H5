<template>
  <ul>
      <li v-for="(item,index) in things" :key="index">
          <input type="checkbox" v-model="item.complated">
          <!-- 给页面显示内容增加类名以添加样式，对class即类名进行数据绑定，类名是complated，其值为item.complated -->
          <span :class="{complated:item.complated}">{{item.info}}</span>
      </li>
  </ul>
</template>

<script>
// 访问数据
export default {
    computed:{
      // all.vue是访问所有数据，things()方法是与infoPage.vue里面的计算方法things()对应的
        things(){
          console.log(111)
          console.log(this)
      return this.$store.state.mythings;
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