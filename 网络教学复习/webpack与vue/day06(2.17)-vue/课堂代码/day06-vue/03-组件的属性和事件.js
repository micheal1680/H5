import Vue from "vue";
import axios from "axios";

Vue.component("mybutton",{
	template:`
		<div :class="{btncolor1:mydefault,btncolor2:primary,btncolor3:warn}" @click="handleInfo">
			<div><slot>自定义按钮</slot> </div>
			<div><button type="button" @click.stop="hanldeTestEvent">触发自定义事件</button></div>
			
		</div>
	`,
	props:["mytype"],
	data:function(){
		return {
			mydefault:true,
			primary:false,
			warn:false
		}
	},
	methods:{
		handleInfo(){
			alert("这可是你自己写的组件里发生了点击事件哦!")
		},
		hanldeTestEvent(){
			this.$emit("myevent","通过标准事件调用$emit触发自定义事件")
		}
	},
	created() {
		console.log(1111111111111);
		console.log(this.mytype);
		if(this.mytype=="mydefault"){
			this.mydefault=true;
			this.primary=false;
			this.warn=false;
		}else if(this.mytype=="warn"){
			this.mydefault=false;
			this.primary=false;
			this.warn=true;
		}else{
			this.mydefault=false;
			this.primary=true;
			this.warn=false;
		}
	}
})




var vm=new Vue({
	methods:{
		handleInfo:function(){
			alert("发生了点击按钮")
		},
		hanlemyEvent(val){
			console.log(val)
			alert("自定义事件发生了哈!!")
		}
	}
}).$mount("#app")


