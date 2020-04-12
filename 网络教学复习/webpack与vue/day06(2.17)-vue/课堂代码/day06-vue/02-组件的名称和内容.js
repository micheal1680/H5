import Vue from "vue";
import axios from "axios";


//标签名字不要与html5 标准标签重名
//模板,必须是整体包含在一个根元素里
Vue.component("mydiv",{
	template:`
	<div>
		<h2><slot>获取外侧数据1</slot></h2>
		<h2><slot name="second">获取外侧数据2</slot></h2>
		<h2><slot name="third">获取外侧数据3</slot></h2>
		<h4>自定义组件渲染的:{{msg}}</h4>
		<p>模板内容0</p>
		<p>模板内容1</p>
		<p>模板内容2</p>
		<ul>
			<li>列表项</li>
		</ul>
	</div>
	`,//模板
	//组件内部的数据必须是一个函数
	data:function(){
		return {
			msg:"自定义组件可以渲染数据了!!"
		}
	}
	
})



var vm=new Vue({
	data:{
		msg:"这可是我的第一个自定义组件呀"
	}
}).$mount("#app")


