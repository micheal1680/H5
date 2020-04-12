import Vue from "vue";
import axios from "axios";//安装和引入axios

// 组件名称不能与html5 标签重名
Vue.component("test-head",{
	template:`
		<my-head></my-head>
	`
})

//全局组件,须在实例创建之前进行使用,可以在任意一个vm/组件里使用 
//组件模板只能包含一个 根元素
Vue.component("my-head",{
	template:`
	<div>
		<ul>
			<li>首页</li>
			<li>列表页</li>
			<li>详情页面</li>
			<li>客服中心</li>
		</ul>
		<div>第二个元素测试一下先</div>
	</div>
	`
})


var vm=new Vue({
	data:{
		msg:"消息提示"
	}
}).$mount("#app");

// new Vue({
// 	el:"#myapp"
// })

