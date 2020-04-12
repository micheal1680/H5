import Vue from "vue";

// vm --view model层
// 构造器-->vue 数据劫持-->vm对象
var vm=new Vue({
	el:"#app",
	data:{
		arr:[
			{name:"sish",grade:88},
			{name:"test1",grade:58},
			{name:"test2",grade:68},
			{name:"test3",grade:78},
			{name:"test4",grade:98}
		]
	},
	filters: {
		mynameReverse: function(old) {
			console.log(old)
			return old.split("").reverse().join("");
		},
		mygradeColor:function(old){
			console.log(11111111,old)
			if(old>80){
				return `<div style="color:red">${old}</div>`
			}
			return old;
		}
	},
	computed:{
		arrnew:function(){
			return this.arr.map(function(item,index,olarr){
				if(item.grade>80){
					var obj={};
					for(var prop in item){
						obj[prop]=`<div style="color:red">${item[prop]}</div>`
					}
					return obj;
				}
				return item;
				 
			})
		}
	}
})


console.log(vm);
