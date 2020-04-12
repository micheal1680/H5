import Vue from "vue";

new Vue({
	el:"#app",
	data:{
		mystudent:{
			name:"王林",
			desc:"1909班同学",
			birth:"2000-09-09"
		}
	}
})

new Vue({
	el:"#otherapp",
	data:{
		msg:"今天天气还不错",
		hello:"<p style='color:red'>Hello World</p>"
	}
})
