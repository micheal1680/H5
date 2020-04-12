import Vue from "vue";
import myImg from "./img/like.jpg";
// import newImg from "./img/newImg.jpeg";

new Vue({
	el:"#app",
	data:{
		people:{
			name:"某人",
			titleImg:"http://image.biaobaiju.com/uploads/20180803/23/1533308847-sJINRfclxg.jpeg",
			likeImg:myImg
		}
	},
	methods:{
		changeTitleImg:function(){
			this.people.titleImg="http://b-ssl.duitang.com/uploads/item/201608/21/20160821194924_UCvFZ.jpeg";
		}
	}
})