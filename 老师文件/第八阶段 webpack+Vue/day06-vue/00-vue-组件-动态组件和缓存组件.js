import Vue from "vue"
import axios from "axios"
import mainPage from "./components/mainPage";
import listPage from "./components/listPage";
import detailPage from "./components/detailPage";
import infoPage from "./components/infoPage";

new Vue({
	data:{
		pageId:"list-page"
	},
	components:{
		"main-page":mainPage,
		"list-page":listPage,
		"detail-page":detailPage,
		"info-page":infoPage
	},
	methods:{
		changePage(ev){
			switch(ev.target.innerHTML){
				case "首页":this.pageId="main-page";break;
				case "列表页面":this.pageId="list-page";break;
				case "详情页面":this.pageId="detail-page";break;
				case "个人中心":this.pageId="info-page";break;
			}
		}
	}
}).$mount("#app");