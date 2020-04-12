import Vue from "vue";

// vm --view model层
var vm=new Vue({
	// template:`<h4 v-cloak>{{msg}}</h4>`,
	data:{
		msg:"vue 的生命周期",
		student:{
			name:"陈同学",
			desc:"可聪明了呢"
		}
	},
	methods:{
		changeData(){
			this.msg="点击事件发生,开始数据更新"
		},
		changeName(){
			this.student.name="杨承定"
		},
		myDestroy(){
			this.$destroy()
		}
	},
	
	
	// 生命周期钩子(生命周期函数)
	//创建:创建vm 的数据节点
	beforeCreate:function() {
		console.log("生命周期--beforeCreate");
		console.log(this.msg)//undefined,数据节点未创建;
		this.msg="从后端数据库拿到的数据";
	},
	created(){
		console.log("生命周期--created")
		console.log(this.msg)//"vue 的生命周期",数据节点已创建
		this.msg="从后端数据库拿到的数据";
	},
	
	//挂载:vm数据节点-->v模板语法
	beforeMount() {
		console.log("生命周期--beforeMount");
		console.log(this.msg);
		console.log(document.getElementsByTagName("h4")[0].innerHTML)
	},
	mounted() {
		console.log("生命周期--mounted");
		console.log(this.msg);
		console.log(document.getElementsByTagName("h4")[0].innerHTML);
		
		this.msg="生命周期已经mouted 通过,现在发生数据更新"
	},
	
	//更新:mouted 之后数据发生更新才触发,对界面上数据进行了更新vm-->v
	beforeUpdate() {
		console.log("生命周期--beforeUpdate");
		console.log("vm:   "+this.student.name);
		console.log("v:   "+document.getElementsByClassName("stuname")[0].innerHTML)
	},
	updated() {
		console.log("生命周期--updated");
		console.log("vm:   "+this.student.name)
		console.log("v:   "+document.getElementsByClassName("stuname")[0].innerHTML)
	},
	
	//销毁: 对vm--v 层之间的数据及事件绑定
	beforeDestroy() {
		console.log("生命周期--beforeDestroy");
		this.msg="发生了销毁vm 的方法调用"
		console.log(this.msg);
		console.log(vm)
	},
	destroyed() {
		console.log("生命周期--destroyed");
		console.log(this.msg);
		this.msg="发生了销毁vm 的方法调用";
		console.log(vm)
	}
	
}).$mount("#app")


console.log(vm);
