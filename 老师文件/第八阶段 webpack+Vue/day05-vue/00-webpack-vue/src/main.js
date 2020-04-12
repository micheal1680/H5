import Vue from "vue";
import axios from "axios";//安装和引入axios
import myHead from "./components/myHead.js";
import myLeft from "./components/myLeft.js";
import myRight from "./components/myRight.js";

var vm=new Vue({
	data:{
		fthermsg:"这是父组件"
	},
	components:{
		"my-head":myHead,
		"my-left":myLeft,
		"my-right":myRight,
	},
	methods:{
		handleChange(){
			console.log(this);
			//需要记住组件索引
			// this.$children[1].msg="今天空调调试好了"
			this.$refs.myleft.msg="今天空调调试好了";
			
		}
	}
}).$mount("#app");

console.log(vm)



