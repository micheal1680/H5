import Vue from "vue";
import axios from "axios";
// 父组件
//$attrs用于存储属性，可以通过$attrs来进行传值，其与props互斥，若用props来传值，则$attrs就无效
Vue.component("com-father", {
    template: `
    <div id="father">
       <h3>这是父组件</h3>
       <p>{{$attrs.myname}}</p>
       <com-son v-bind="$attrs" v-on="$listeners"></com-son>
    </div>
    `,
    components: {
        // 子组件
        "com-son": {
            template: `
            <div id="son">
             <h3>这是子组件</h3>
             <p>{{$attrs.myname}}</p>
             <button type="button" @click="changeName">点击修改名字</button>
            </div>
            `,
            methods:{
                changeName(){
                    this.$emit("myevent","乔丹")
                }
            }
        }

    }

})


new Vue({
    el: "#app",
    data: {
        student: {
            name: "詹姆斯",
            age: 36
        }
    },
    methods: {
        changeName(data){
            this.student.name=data
        }
    }

})