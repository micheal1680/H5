import Vue from "vue";
import axios from "axios";//安装和引入axios


//全局组件
Vue.component("my-nav",{
	template:`
		<div>
			<my-default></my-default>
		</div>
	`,
	data:function(){
		return {}
	},
	props:[],
	components:{
		"my-default":{
			template:`
				<ul>
					<li>网页</li>
					<li>资讯</li>
					<li>图片</li>
					<li>视频</li>
				</ul>
			`
		}
	},
	computed:{},
	watch:{},
	filters::{},
	mounted() {
		//生命周期函数
	}
})
//组件的构造器 与vm 实例构造器之间只有template/data/props 不一样
var vm=new Vue({
	data:{},
	// 局部组件只能在父节点内使用
	components:{
		"my-word":
		{
			template:`
				<div>
					<ul>
						<li>标题{{wordArray[0].title}}</li>
						<li>内容信息{{wordArray[0].content}}</li>
						<li>网址{{wordArray[0].address}}</li>
					</ul>
				</div>
			`,
			// 组件与vm 对象之间的数据data 是相互独立的
			data:function(){
				return {
					wordArray:[
						{
							title:"CSS element+element 选择器 | 菜鸟教程",
							content:"CSS element+element 选择器 完整CSS选择器参考手册 实例 选择所有紧接着 <div> 元素之",
							address:"https://www.runoob.com/cssref/..."
						}
					]
				}
			}
		},
		"my-traslate":{
			template:`
				<ul>
					<li>单词解释</li>
					<li>例句</li>
					<li>扩展</li>
				</ul>
			`
		}
	}
}).$mount("#app");


new Vue({
	el:"#myapp"
})