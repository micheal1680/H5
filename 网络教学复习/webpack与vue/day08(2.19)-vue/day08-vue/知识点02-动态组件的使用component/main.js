import Vue from "vue";
import axios from "axios";
import myimg from "./img/myimg.png"; 


var myTop={
	// 点击头部标签,实现页面页面切换
	template:`
		<div @click="handleToPage">
			<ul class="mytop">
				<li>首页</li>
				<li>列表页</li>
				<li>关于我们</li>
			</ul>
		</div>`,
	methods:{
		handleToPage(e){
			console.log(e.target.innerHTML);
			switch(e.target.innerHTML){
				case "首页": this.$emit("page","my-main"); break;
				case "列表页": this.$emit("page","my-list"); break;
				case "关于我们":this.$emit("page","my-info");  break;
			}
			
		}
	}
}


var mymian={
	template:`
		<div>
			<h1>首页页面内容</h1>
			<img :src="mybaiduimg" alt="">
		</div>
	`,
	data:function(){
		return {
			mybaiduimg:myimg
		}
	}
}

var mylist={
	template:`
		<div>
			<h1>列表页面内容</h1>
		</div>
	`
}

var myinfo={
	template:`
		<div>
			<h1>关于我们,个人信息页面内容</h1>
		</div>
	`
}

var vm = new Vue({
	data:{
		mypage:"my-main"
	},
	components:{
		"my-main":mymian,
		"my-list":mylist,
		"my-info":myinfo,
		"my-top":myTop
	},
	methods:{
		hadlePage(val){
			this.mypage=val
		}
	}
}).$mount("#app");
