import Vue from "vue";
import axios from "axios";//安装和引入axios




Vue.component("mydiv",{
	template:`<ul :style="{color:mycolor}">
				<li>我自己的div标签1</li>
				<li>我自己的div标签2</li>
				<li>我自己的div标签3</li>
			</ul>`,
	props:["mycolor"]
})


var vm=new Vue({
	el:"#app",
	data:{
		bgcValue:"red"
	}
}).$mount("#app");
