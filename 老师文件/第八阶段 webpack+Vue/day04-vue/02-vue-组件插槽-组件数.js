import Vue from "vue";
import axios from "axios";//安装和引入axios




Vue.component("mydiv",{
	// 允许在使用组件时利用slot 向内部插入内容
	template:`<ul :style="{color:mycolor}">
				<li>{{msg}}</li>
				<li><slot>老大</slot></li>
				<li><slot name="sonc">老二</slot></li>
				<li><slot name="third">老小</slot></li>
				<li><button @click="changMsg">修改msg</button></li>
			</ul>`,
	props:["mycolor"],
	// 组件的数据为什么写成函数形式?
	// 组件可以使用多次,data 是一个函数会创建多个不同的数据对象,保证组件之间的数据相互独立
	data:function(){
		return {
			msg:"组件自己内部的一条消息"
		}
	},
	methods:{
		changMsg(){
			this.msg="组件点击按钮修改了msg 内容"
		}
	}
})


var vm=new Vue({
	el:"#app"
}).$mount("#app");
