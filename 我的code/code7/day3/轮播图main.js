// // 引入Vue
// import Vue from "vue";
// import axios from "axios";
// import Swiper from 'swiper';

// // 新建全局组件
// Vue.component("myswipper", {
//     template: `
// <div class="swiper-container">
//     <div class="swiper-wrapper">　
//     <div class="swiper-slide"><img src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3381573685,1866477444&fm=26&gp=0.jpg"></div>
//     <div class="swiper-slide"><img src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3381573685,1866477444&fm=26&gp=0.jpg"></div>
//     <div class="swiper-slide"><img src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3381573685,1866477444&fm=26&gp=0.jpg"></div>
//     </div>
// 　　<div class="swiper-pagination swiprRem"></div>
// </div>
//     `,
//     data: function () {
//         return {
//             direction: "horizontal",
//             loop: true,
//             pagination: ".swiper-pagination",
//             autoplay: 3000
//         }
//     }
// })
// // 新建Vue对象
// new Vue({
//     // mounted() {
//     //     var that = this;
//     //     that.$nextTick(function () {
//     //         var mySwiper = new Swiper(".swiper-container", {
//     //             direction: "horizontal",
//     //             loop: true,
//     //             pagination: ".swiper-pagination",
//     //             autoplay: 3000
//     //         });
//     //     })
//     // }
// }).$mount("#app")



// import Vue from "vue";
// import Swiper from 'swiper';
// import 'swiper/css/swiper.min.css';


// Vue.component("myswipper", {
//     template: `
//         <swiper :options="swiperOption" class="box">
// 　　<swiper-slide class="big">
// 　　　　<div class="swiper-slide"><img src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3381573685,1866477444&fm=26&gp=0.jpg"></div>
//         <div class="swiper-slide"><img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3008142408,2229729459&fm=26&gp=0.jpg"></div>
//         <div class="swiper-slide"><img src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2394972844,3024358326&fm=26&gp=0.jpg"></div>
// 　　</swiper-slide>
// 　　<div class="swiper-pagination" slot="pagination"></div>
// </swiper>
//         `,
//     data: function () {
//         return {
//             swiperOption: {
//                 pagination: '.swiper-pagination',
//                 paginationClickable: true,
//                 autoplay: 2500,
//                 autoplayDisableOnInteraction: false,
//                 loop: false,
//                 coverflow: {
//                     rotate: 30,
//                     stretch: 10,
//                     depth: 60,
//                     modifier: 2,
//                     slideShadows: true
//                 }
//             },
//         }
//     }
// })
// new Vue({
// }).$mount("#app")


// 方法三
import Vue from "vue";
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';


Vue.component("myswipper", {
    template: `
        <div class="swiper-container">
        <div class="swiper-wrapper">
         <div class="swiper-slide">
          <img src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3381573685,1866477444&fm=26&gp=0.jpg" alt="">
         </div>
         <div class="swiper-slide">
          <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3008142408,2229729459&fm=26&gp=0.jpg" alt="">
         </div>
         <div class="swiper-slide">
          <img src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2394972844,3024358326&fm=26&gp=0.jpgg" alt="">
         </div>
        </div>
       </div>
            `,
    mounted() {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true
        })
    },
})

new Vue({
}).$mount("#app")