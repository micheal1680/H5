import mainPage from "./views/mainPage";
import listPage from "./views/listPage";
import detailPage from "./views/detailPage";
import infoPage from "./views/infoPage";
//主组件 将index.html 和main.js 里的代码移出来
var app={
	template:`
		<div>
			<ul id="nav" @click="changePage">
				<li>首页</li>
				<li>列表页面</li>
				<li>详情页面</li>
				<li>个人中心</li>
			</ul>
			<!-- 动态组件component ,is 属性的值决定要渲染的组件 -->
			
			<!-- keep-alive 缓存组件,在组件created 阶段设置cache ,当组件重新被渲染时，从cache 根据name把缓存取出来-->
			<!-- 拥有两个属性 exclude/include -->
			<keep-alive exclude="main-page">
					  <component :is="pageId"></component>
			</keep-alive>
		</div>
	`,
	data:function(){
		return {
			pageId:"list-page"
		}
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
}

export default app;