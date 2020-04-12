import Vue from "vue";

// vm --view model层
// 构造器-->vue 数据劫持-->vm对象
var vm=new Vue({
	el:"#app",
	data:{
		student:{
			name:"尼桑",
			desc:"应该是夏伟杰"
		},
		mytext:true,
		mybgc:true,
		myclor:"white"
	},
	methods:{
		changeBgc:function(){
			this.mybgc=false
		},
		changeTextStyle:function(){
			this.mytext=!this.mytext
		},
		changeRed:function(){
			this.myclor="red"
		},
		changeBule:function(){
			this.myclor="blue"
		}
	}
})

