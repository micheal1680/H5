import axios from "axios";
import mySearch from "../components/mySearch";

var listPage={
	template:`
		<div>
				  <h4>列表页面内容</h4>
				  <my-search @myevent="handleclick"></my-search>
				  
				  <ul>
				    <li v-for="p in products">{{p.kw}}</li>
				  </ul>
		</div>
	`,
	components:{
		"my-search":mySearch
	},
	data:function(){
		return {
			products:[]
		}
	},
	created(){
	    // 调用getPerson()
	    this.getPerson()
	},
	methods:{
	    handleclick(data){
	        this.getPerson(data)
	    },
	    getPerson(data){
	        data=data?data:"",
	        axios.get("http://localhost:8888/getProducts",{
	            params:{
	                keyWord:data
	            }
	        }).then(res=>{
				console.log(res.data)
	            this.products=res.data
	        })
	
	    }
	}
};

export default listPage;