// 引入Vue
import Vue from "vue";
import axios from "axios";


// 新建组件
// "mydiv"标签选择器
// slot标签里面的东西是插槽默认的数据
Vue.component("mydiv",{
  template:`<ul :style="{color:mycolor,fontSize:myfont}">
      <li>{{msg}}</li>
      <li><slot>史上第三</slot></li>
      <li><slot name="second">史上第二</slot></li>
      <li><slot name="third">史上第一</slot></li>
      <li><button @click="changeMsg">点击修改信息msg</button></li>
  </ul>`,
  props:["mycolor","myfont"],
//   组件里面的属性data，不同于Vue对象，必须写成函数形式，理由是：
// 组件可以创建多个即可以使用多次，若data是一个函数，那么每次创建一个新的组件就会创建一个新的数据对象，即data是函数的话，有多少个组件，就会有多少个不同的数据对象，即这些数据对象就相互独立，从而保证组件之间的数据相互独立
  data:function(){
      return {
          msg:"组件自己内部的首条消息"
      }
  },
  methods:{
    changeMsg:function(){
        this.msg="修改之后的信息"
    }
  }

})
// 新建Vue对象
new Vue({
    data: {
        bac:"red",
        fs:"yellow"
    }
}).$mount("#app")