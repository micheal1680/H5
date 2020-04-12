export default {
	template:`
		<div class="mylingdap">
			<h4>领导班子</h4>
			<p>领导人数：{{lingdaoNum}}</p>
		</div>
	`,
	data:function(){
		return {
			lingdaoNum:"计算中……"
		}
	},
	mounted:function(){
		console.log(this);//my-lingdao
		console.log(this.$parent);//myTeaher
		console.log(this.$root);//vm
		var myarr=this.$root.peopleData.teacherData.filter(function(item,index,old){
				return item.status==1;
		})
		this.lingdaoNum=myarr.length;
	}
	
	
	
	
	
}