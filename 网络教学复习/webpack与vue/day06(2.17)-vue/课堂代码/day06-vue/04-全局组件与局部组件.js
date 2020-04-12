import Vue from "vue";
import axios from "axios";




//全局组件Vue.component
//使用全局组件的vm,需要在组件定义后才能创建
//全局组件就是任何一个vm,都能使用该组件
Vue.component("my-nav",{
	template:`
		<div>
			<ul class="mynav">
				<li>地区</li>
				<li>用户名</li>
				<li>消息</li>
			</ul>
		</div>
	`
});

//定义局部组件,在vm 构造器配置项components 配置项里进行定义
//局部组件 只能用在该vm 对应元素上
new Vue({
	el:"#otherapp",
	data:{
		msg:"另一个vm <--> v"
	},
	components:{
		"my-product":{
			template:`
				<div >
					<ul class="myproduct">
						<li>产品1</li>
						<li>产品2</li>
						<li>产品3</li>
						<li>产品4</li>
					</ul>
				</div>
			`
		}
	}
});

var vm=new Vue({
	data:{
		showPage:"main",
		msg:"vm中定义的问好信息"
	},
	methods:{
		hanlePage(){
			this.showPage="list"
		}
	}
}).$mount("#app");





