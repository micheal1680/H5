// pages/dome/dome.js
let dome = "dome"
let personStudent = [{
    name: "孙悟空",
    score: [
        55, 66, 88, 40, 90, 100
    ]
}, {
    name: "猪八戒",
    score: [
        10, 20, 30
    ]
}, {
    name: "白龙马",
    score: [
        40, 90, 100, 150
    ]
}]


Page({

    /**
     * 页面的初始数据
     */
    // 通过data的属性来进行数据绑定，实际上数据绑定可以理解成传参
    data: {
        1: "testssss",
        test: "hello world!",
        dome: "0",
        width: 400,
        height: 500,
        a: 1,
        b: 2,
        c: 3,
        length: 6,
        person: {
            name: "孙悟空",
            gender: "男",
            age: 18,
            xiongdi: [{
                name: "猪八戒",
                gender: "男",
                age: 10,
                xiongdi: [{
                    name: "孙悟空",
                    gender: "男",
                    age: 18
                }]
            }, {
                name: "沙悟净",
                gender: "男",
                age: 38
            }, {
                name: "白龙马",
                gender: "男",
                age: 18
            }]
        },
        name: "孙悟空",
        active: 2,
        current: 0,
        array: [
            [1, 2, 3],
            [4, 5, 6],
            [7]
        ],
        imgSrc: "/images/lunbo1.jpg",
        imgArray: ["/images/lunbo1.jpg", "/images/lunbo2.jpg", "/images/lunbo3.jpg", "/images/lunbo2.jpg", "/images/lunbo2.jpg", "/images/lunbo2.jpg"],
        personStudent: personStudent
    },
    changeName: function() {
        // 业务 更改name值
        // 获取值

        // 错误的赋值
        // this.data.name="猪八戒";
        // 正确方法
        if (this.data.name == "孙悟空") {
            this.setData({
                name: "猪八戒",
                dome: true,
                obj: {
                    name: "沙悟净"
                }
            });
        } else {
            this.setData({
                name: "孙悟空",
                dome: true,
                obj: {
                    name: "沙悟净"
                }
            });
        }
    },
    // 每个事件都有一个e，是event的简写，这里function后()内填任何一个参数，都可以代表事件信息event，
    changeActive: function(e) {
        let id = e.currentTarget.dataset.id
        if (id != this.data.active) {
            this.setData({
                active: id
            })
        }
    },
    fu() {
        // let array = [
        //     [1, 2, 3],
        //     [4, 5, 6],
        //     [7]
        // ]
        // for (let i = 0; i < array.length; i++) {
        //     const item = array[i]
        //     for (let i = 0; i < item.length; i++) {
        //         const item2 = item[i];
        //         console.log(item2);
        //     }
        // }
        console.log("fu")
    },
    zi(e) {
        console.log(e)
    },
    bindChange(e) {
        this.setData({
            current: e.detail.current
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})