<template>
  <div class="bigbox">
	
    <ul class="box">
      <li>
        <img :src="img1" alt />
      </li>
      <li>
        <img :src="img2" alt />
      </li>
      <li>
        <img :src="img3" alt />
      </li>
      <li>
        <img :src="img4" alt />
      </li>
    </ul>
    <ol>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
	
	<br>
	<router-link to="/list?deptid=4">查看财务部人员</router-link>
	<!-- <button type="button" @click="moneyPeople">悄悄看一下财务部人员</button> -->
	
  </div>
</template>

<script>
import i1 from "../../img/1.jpg";
import i2 from "../../img/2.jpg";
import i3 from "../../img/3.jpg";
import i4 from "../../img/4.jpeg";

export default {
  data: function() {
    return {
      img1: i1,
      img2: i2,
      img3: i3,
      img4: i4
    };
  },
  methods:{
	  moneyPeople(){
		  this.$router.push({path:"/list",query:{deptid:4}});
	  }
  },
  mounted() {
    var ul_li = document.querySelectorAll(".box li"),
      ol_li = document.querySelectorAll("ol li");
    //声明一个变量用于显示
    var count = 0;
    //
    function auto() {
      count++;
      if (count >= ul_li.length) {
        count = 0;
      }
      for (var i = 0; i < ul_li.length; i++) {
        ul_li[i].style.display = "none";
        ol_li[i].classList = "";
      }
      ul_li[count].style.display = "block";
      ol_li[count].classList = "active";
    }

	setInterval(auto, 2000);
	 //点击按钮切换对应图片

        for (let i = 0; i < ol_li.length; i++) {
            //循环绑定点击事件
            ol_li[i].onclick = function () {
                //点击后先遍历清空所有图片样式，再显示点击图片样式
                for (var j = 0; j < ul_li.length; j++) {
                    ul_li[j].style.display = "none";
                    ol_li[j].classList = "";
                }
                ul_li[i].style.display = "block";
                ol_li[i].classList = "active";
                //点击后让count值与图片索引对应
                count = i 
                //如果点击后想让图片停留一会（一次计时循环），把count值改成图片对应的前一位；
                //count=i-1
            }
        }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.bigbox {
  width: 500px;
  height: 200px;
  position: relative;
}

ol,
ul li {
  list-style-type: none;
}

ul {
  margin: 50px auto;
  width: 500px;
  height: 200px;
  overflow: hidden;
}

ul li img {
  width: 500px;
  height: 200px;
}

ol {
  position: absolute;
  bottom: 10px;
  left: 224px;
}

ol li {
  width: 8px;
  height: 8px;
  background-color: white;
  border: 1px solid;
  border-radius: 50%;
  float: left;
  margin-left: 4px;
}

.active {
  background-color: red;
}
</style>
