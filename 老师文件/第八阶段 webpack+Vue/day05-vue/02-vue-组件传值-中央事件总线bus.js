import Vue from "vue";
import axios from "axios";//安装和引入axios
import myBus from "./utils/bus.js";

var vm=new Vue({
	components:{
		"my-nav":{
			template:`
				<div>
					<ul @click="handleTitle">
						<li data-title="1">网页</li>
						<li data-title="2">视频</li>
						<li data-title="3">图片</li>
					</ul>
				</div>
			`,
			methods:{
				handleTitle(event){
					console.log(event.target.dataset.title)
					myBus.$emit("changeTitle",event.target.dataset.title)
				}
			}
		},
		"my-content":{
			template:`
				<div>
					<ul>
						<li v-if="title==1">网页内容</li>
						<li v-if="title==2">视频内容</li>
						<li v-if="title==3">图片内容</li>
					</ul>
				</div>
			`,
			data:function(){
				return {
					title:1
				}
			},
			mounted() {
				myBus.$on("changeTitle",(title)=>{
					this.title=title
				})
			}
		}
	}
}).$mount("#app")



