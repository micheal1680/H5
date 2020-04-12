import Vue from "vue";

// vm --view model层
// 构造器-->vue 数据劫持-->vm对象
var vm=new Vue({
	el:"#app",
	methods:{
		getInput(){
			console.log(document.getElementsByTagName("input")[0].value)
		},
		getUsername(){
			console.log(document.getElementsByTagName("input")[1].value)
		},
		handleOuter(e){
			console.log(e)
			console.log("outer")
		},
		handleInner(){
			console.log("inner")
		},
		handleLittle(){
			console.log("little")
		},
		handleLink(){
			console.log("a标签事件处理函数")
		}
		
	}
	
})

