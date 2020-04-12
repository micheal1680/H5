import Vue from "vue";
import axios from "axios";

//自定义指令(全局,局部)
Vue.directive("myfocus",function(el,binding){
	console.log("myfocus……");
	console.log(el);
	console.log(binding);
	
	el.setAttribute("autofocus",true);
	el.focus();
})

var vm = new Vue({
	data:{
		testData:"测试自定义属性的数据",
		textData:"今天成都大太阳,天气特别好!"
	},
	directives:{
		"reverse":function(el,binding){
			el.innerHTML+=binding.value.split("").reverse().join("");
		}
	},
	created() {
		console.log("1111111111");
	}
}).$mount("#app");
