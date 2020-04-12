<template>
  <div class="home">
     <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item,index) in imgArr" :key="index">
		  <img :src="item.imgSrc" alt="" class="lunimg">
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
// @ is an alias to /src
import lunbotu1 from "@/assets/lunbotu1.jpg";
import lunbotu2 from "@/assets/lunbotu2.webp";
import lunbotu3 from "@/assets/lunbotu3.webp";
import lunbotu4 from "@/assets/lunbotu4.jpg";
import lunbotu5 from "@/assets/lunbotu5.jpg";

export default {
	data:function(){
		return {
			imgArr:[
				{imgSrc:lunbotu1},
				{imgSrc:lunbotu2},
				{imgSrc:lunbotu3},
				{imgSrc:lunbotu4},
				{imgSrc:lunbotu5}
			]
		}
	}
}
</script>

<style>
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 18px;
	    opacity: 0.75;
	    line-height: 300px;
	    margin: 0;
	  }
	  
	  .el-carousel__item:nth-child(2n) {
	    background-color: white;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	    background-color: white;
	  }
	  
	  .lunimg {
		  width: 70%;
		  height: 100%;
	  }
</style>
