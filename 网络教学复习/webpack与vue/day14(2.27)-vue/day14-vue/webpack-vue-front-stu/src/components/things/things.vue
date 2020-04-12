<template>
	<div class="mythings">
		<input class="inputThings" type="text" v-model="userThings" placeholder="请输入待办事项?" @keydown="write">
		<div class="showThings" v-for="(item,index) in things" :key="index">
			<div class="showThings" @mouseenter="shows(index)" @mouseleave="lode(index)">
				<div>
					<input class="selects" type="checkbox" v-model="selects" :value="index">
					<span ref="thr">{{item.thing}}</span>
				</div>
				<div ref="x" class="x" @click="del(index)">x</div>
				
			</div>
		</div>

		<h4>v-model绑定一组checkbox：{{selects}}</h4>
		<div>
			<button type="button" @click="goToAll">所有事项</button>
			<button type="button" @click="goToCom">完成事项</button>
			<button type="button" @click="goToUncom">未完成</button>
		</div>
		<br><br>
		<div>
			<router-view></router-view>
		</div>




	</div>

</template>

<script>
	export default {
		data: function() {
			return {
				userThings: "",
				selects: [],
			}
		},
		computed: {
			things: function() {
				return this.$store.state.all
			}
		},
		methods: {
			goToAll() {
				console.log(this.userThings)
				console.log(this.selects)
				this.$router.push("/things/all")
			},
			goToCom() {
				this.$router.push("/things/completed")
			},
			goToUncom() {
				this.$router.push("/things/uncomplete")
			},
			shows(index) {
				this.$refs.x[index].style.display = "block"
			},
			lode(index) {
				this.$refs.x[index].style.display = "none"
			},
			write(ev) {
				if (ev.key == "Enter") {
					this.$store.commit("addStateCom", {
						status: false,
						thing: this.userThings
					});
					
					//本地缓存存的值都是字符串类型
					var arr=localStorage.getItem("allthings");
					if(!arr){
						arr=[];
					}else{
						arr=JSON.parse(arr)
					}

					//bug：页面刷新，所有事项丢失
					var obj={
						status: false,
						thing: this.userThings
					}
					
					arr.push(obj)
					
					localStorage.setItem("allthings",JSON.stringify(arr));
					console.log(  JSON.parse(localStorage.getItem("allthings")) )
					
					this.userThings = ""
				}

			},
			del(index){
				this.$store.commit("del",index);
			}
			
		},
		watch: {
			selects() {
				
				let index=this.selects;
				console.log("---------for循环外侧111111")
				this.$store.commit("updata",index);
				
				console.log("---------for循环外侧222222")
				for(let i=0 ;i<this.$store.state.all.length;i++){
					console.log("---------for循环里边")
					console.log(this.$store.state.all[i])
					if(this.$store.state.all[i].status==true){
						this.$refs.thr[i].style.textDecoration = "line-through"
						
					}
				}
				for(let i=0 ;i<this.$store.state.all.length;i++){
					if(this.$store.state.all[i].status==false){
						this.$refs.thr[i].style.textDecoration = "none"
						
					}
				}
			}
		}


	}
</script>

<style scoped="scoped">
	.mythings {
		padding-left: 15px;
		margin: 0 auto;
		width: 500px;
	}

	.inputThings {
		margin-top: 50px;
		width: 500px;
		height: 50px;
		box-shadow: 10px 10px 10px #ccc;
		font-size: 24px;
		padding-left: 40px;
		border-radius: 20px;
	}

	.showThings {
		width: 500px;
		height: 50px;
		box-shadow: 10px 10px 10px #ccc;
		font-size: 24px;
		padding-left: 40px;
		border-radius: 20px;
		line-height: 50px;
		color: #999;
		display: flex;
		justify-content: space-between;
	}

	.selects {
		width: 20px;
		height: 20px;
	}

	.x {
		display: none;
		color: red;
		margin-right: 30px;
	}
</style>
