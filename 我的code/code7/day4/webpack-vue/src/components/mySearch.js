var mySearch={
    template:`
    <div>
    <input type="text" v-model="keyWord" @keyup.enter="handleSearch">
    <button type="button" @click="handleSearch">点击搜索</button>
    </div>
    `,
    data:function(){
        // 这里return 一个对象，对象里面是键值对，赋值用:，不是=
        return {
            keyWord:""
        }
    },
    methods:{
        handleSearch:function(){
            // myevent是自定义事件
            this.$emit("myevent",this.keyWord)
        }
    }
}

export default mySearch