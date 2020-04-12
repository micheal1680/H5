<template>
  <div>
    <div>
      <!-- router-link标签就相当于a标签 -->
    <router-link to="/">首页</router-link>
    <router-link to="/listPage">列表页面</router-link>
    <router-link to="/detailPage/1">详情页面-硬件部</router-link>
    <router-link to="/detailPage/2">详情页面-软件部</router-link>
    <router-link to="/infoPage">个人中心</router-link>
  </div>
  <!-- router-view用于渲染路径匹配到的视图组件 -->
    <!-- <router-view></router-view> -->

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>


<script>

</script>


<style>
* {
  padding: 0;
  margin: 0;
}
#nav {
  width: 100%;
  height: 50px;
  background-color: blue;
  color: white;
}
#nav li {
  float: left;
  display: flex;
  align-items: center;
  width: 80px;
  height: 50px;
  margin-left: 50px;
  list-style: none;
}
</style>