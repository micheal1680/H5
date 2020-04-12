

import Vue from "vue"
import axios from "axios"

var vm=new Vue({
    el: "#app",
    data: {
        arr:[
            {name:"lt",age:20},
            {name:"ll",age:22},
            {name:"tx",age:23},
            {name:"lj",age:25},
            {name:"xs",age:30}
        ]
    },
    computed: {
        newarr:function(){
            return this.arr.map(function(item,index,oldarr){
                if(item.age>24){
                    var obj={};
                    for(var prop in item){
                        obj[prop]=`<span style="color: red;">${item[prop]}</span>`
                    }
                    return obj;
                }
                return item;
            })

        }
    },
    methods:{

    },
    filters:{
        mynameReverse:function(value){
            // console.log(value);
            return value.split("").reverse().join("");
        },
        myageColor:function(value){
            if(value>24){
                 return `<span style="color: red;">${value}</span>`
            }
            return value;
        }
    }
})

console.log(vm)