import Vue from "vue";

new Vue({
	data:{
		msg:"系统初始化页面",
		user:{
			name:"司水花"
		},
		num:1,
		keyWord:""
	},
	//钩子函数
	beforeCreate() {
		console.log(this);
		console.log(this.msg);//数据节点未创建
		console.log("---beforeCreate----")
	},
	created() {
		console.log(this);
		console.log(this.msg);//数据节点已经创建
		console.log("---created----")
	},
	beforeMount() {
		var pageData=document.getElementsByTagName("p")[0].innerHTML;
		console.log(pageData)//初始化数据与view 层未挂载
		console.log("---beforeMount----")
	},
	mounted(){
		var pageData=document.getElementsByTagName("p")[0].innerHTML;
		console.log(pageData)//初始化数据与view 层挂载
		console.log("---mounted----");
		this.msg="页面数据已经被修改咯！"
	},
	beforeUpdate() {
		console.log(this.msg)//vm 层的数据已经发生修改
		var pageData=document.getElementsByTagName("p")[0].innerHTML;
		console.log(pageData);//v 层的数据还未发生修改
		console.log("---beforeUpdate----");
	},
	updated() {
		console.log(this.msg)
		var pageData=document.getElementsByTagName("p")[0].innerHTML;
		console.log(pageData)//v 层数据已发生修改
		console.log("---updated----");
	},
	methods:{
		changName(){
			this.user.name="班长李旭"
		},
		changNum(){
			this.num++
		},
		myDestroy(){
			this.$destroy();
		}
	},
	beforeDestroy(){
		console.log("---beforeDestroy----");
		console.log(this.num,this.msg,this.user)
	},
	destroyed(){
		console.log("---destroyed----");
		console.log(this.num,this.msg,this.user)
	}
}).$mount("#app")