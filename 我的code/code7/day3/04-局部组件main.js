// 引入Vue
import Vue from "vue";
import axios from "axios";


// 新建全局组件
Vue.component("mynav",{
    template:`
    <div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    `,
    props:[],
    data:function(){

    },
    

})
// 新建Vue对象
new Vue({
    
}).$mount("#app")