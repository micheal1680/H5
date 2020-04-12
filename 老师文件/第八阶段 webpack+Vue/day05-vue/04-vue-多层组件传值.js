import Vue from "vue";
import axios from "axios";//安装和引入axios

Vue.component("com-father",{
	template:`
		<div id="father">
			<h4>这儿是父组件</h4>
			<p>{{$attrs.myname}}</p>
			<com-son v-bind="$attrs" v-on="$listeners"></com-son>
		</div>
	`,
	// props:["myname"],
	components:{
		"com-son":{
			template:`
				<div id="son">
					<h4>这儿是子组件</h4>
					<p>{{$attrs.myname}}</p>
					
					<button type="button" @click="changName">修改姓名</button>
				</div>
			`,
			methods:{
				changName(){
					// console.log(this.$listeners)
					// this.$attrs.myname="另外一个名字"
					this.$emit("myevent","另外一个名字")
				}
			}
		}
	}
})

var vm=new Vue({
	data:{
		student:{
			name:"罗鑫",
			birth:"1997-7-11"
		}
	},
	methods:{
		changeName(data){
			this.student.name=data
		}
	}
}).$mount("#app");

console.log(vm)



