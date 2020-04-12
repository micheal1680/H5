import bus from "../utils/busEvent.js";

export default {
	template: `
		<div class="mylingdap">
			<h4>领导班子</h4>
			<p>领导人数：{{lingdaoNum}}</p>
			
			<button type="button" @click="kaichudiao">开除掉陈同学</button>
		</div>
	`,
	data: function() {
		return {
			lingdaoData: [{
					tname: "鲁老师",
					duty: "教学",
					desc: "h5组长",
					status: 1
			}]
		}
	},
	computed:{
		lingdaoNum:function(){
			return this.lingdaoData.length;
		}
	},
	methods:{
		kaichudiao(){
			console.log("开出掉陈同学");
			
			bus.$emit("kaichuChen",0)
		}
	}





}
