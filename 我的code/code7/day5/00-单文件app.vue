<template>
  <div>
    <ul id="nav" @click="changePage">
      <li>首页</li>
      <li>列表页面</li>
    </ul>
    <keep-alive include="main-page">
      <component :is="pageId"></component>
    </keep-alive>
  </div>
</template>


<script>
import mainPage from "./views/mainPage.js";
import listPage from "./views/listPage.js";
export default {
  data: function() {
    return {
      pageId: "main-page"
    };
  },
  components: {
    "main-page": mainPage,
    "list-page": listPage
  },
  methods: {
    changePage(ev) {
      switch (ev.target.innerHTML) {
        case "首页":
          this.pageId = "main-page";
          break;
        case "列表页面":
          this.pageId = "list-page";
          break;
      }
    }
  }
};
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