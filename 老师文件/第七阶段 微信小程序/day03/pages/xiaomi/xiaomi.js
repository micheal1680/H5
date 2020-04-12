// pages/xioami/xiaomi.js
// 获取全局对象
let app = getApp();


let goodsShow = [{
    img: "/images/goods1.webp",
    name: "空调",
    introduction: "出众静音，快速制冷热出众静音，快速制冷热",
    price: 1599
}, {
    img: "/images/goods1.webp",
    name: "空调",
    introduction: "出众静音，快速制冷热出众静音，快速制冷热",
    price: 1599
}, {
    img: "/images/goods1.webp",
    name: "空调",
    introduction: "出众静音，快速制冷热出众静音，快速制冷热",
    price: 1599
}, {
    img: "/images/goods1.webp",
    name: "空调",
    introduction: "出众静音，快速制冷热出众静音，快速制冷热",
    price: 1299
}]
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 0,
        imgArray: ["/images/lunbo1.jpg", "/images/lunbo2.jpg", "/images/lunbo3.jpg"],
        sortImgSrc: ["/images/sort1.png", "/images/sort1.png", "/images/sort2.webp", "/images/sort3.gif", "/images/sort4.webp", "/images/sort5.webp", "/images/sort1.png", "/images/sort2.webp", "/images/sort3.gif", "/images/sort1.png"],
        goodsShow: goodsShow
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
		// console.log(app.globalData)
		app.globalData = "test"
		// console.log(app.globalData)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
		console.log("onReady")
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
		console.log("onShow")
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
		console.log("onHide")
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