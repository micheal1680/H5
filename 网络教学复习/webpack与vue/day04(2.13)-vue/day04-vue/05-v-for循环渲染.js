import Vue from "vue";

// vm --view model层
// 构造器-->vue 数据劫持-->vm对象
var vm=new Vue({
	el:"#app",
	data:{
		mydata:[
			{
				studenname:"陈俊雄",
				grade:59
			},
			{
				studenname:"罗艳芬",
				grade:89
			},
			{
				studenname:"夏伟杰",
				grade:69
			},
			{
				studenname:"茶世河",
				grade:79
			}
		],
		mynum:100
	}
})

