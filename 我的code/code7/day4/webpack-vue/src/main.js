import Vue from "vue";
import axios from "axios";
import mainPage from "./components/mainPage.js"
import listPage from "./components/listPage.js"

new Vue({
    el:"#app",
    data:{
        pageId:"main-page"
    },
    components:{
        "main-page":mainPage,
        "list-page":listPage
    },
    methods:{
        changePage(ev){
            switch(ev.target.innerHTML){
                case "首页":this.pageId="main-page";break;
                case "列表页面":this.pageId="list-page";break;
            }
        }
    }

})