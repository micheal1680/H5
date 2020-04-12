import Vue from "vue";
import axios from "axios";//安装和引入axios

Vue.component("my-word",{
	template:`
		<ul>
			<li>标题：{{words.title}}</li>
			<li>词条内容：{{words.answer}}</li>
			<li>网址：{{words.addtime}}</li>
		</ul>
	`,
	props:["words"],//属性名不要有带大写字母
	mounted() {
		// console.log(this.words)
	}
	
	// template:`
	// 	<ul>
	// 		<li>标题：<slot></slot></li>
	// 		<li>词条内容：<slot name="content"></slot></li>
	// 		<li>网址：<slot name="address"></slot></li>
	// 	</ul>
	// `,
	
})

var vm=new Vue({
	el:"#app",
	data:{
		keyWord:"",
		myWords:[]
	},
	methods:{
		myGetInterView(){
			axios.get("http://localhost:8888/getInterView",{
				params:{
					title:this.keyWord
				}
			})
			.then(res=>{
				this.myWords=res.data
			})
		}
	},
	watch:{
		keyWord(){
			this.myGetInterView()
		}
	},
	created() {
		this.myGetInterView()
		
		
	// 	this.myWords=[
	// 		{
	// 			titile:"标题1",
	// 			content:"内容1",
	// 			address:"网址1"
	// 		},
	// 		{
	// 			titile:"标题2",
	// 			content:"内容2",
	// 			address:"网址2"
	// 		},
	// 		{
	// 			titile:"标题3",
	// 			content:"内容3",
	// 			address:"网址3"
	// 		},
	// 		{
	// 			titile:"标题4",
	// 			content:"内容4",
	// 			address:"网址4"
	// 		}
	// 	]
	// 
	}
})

console.log(vm)

