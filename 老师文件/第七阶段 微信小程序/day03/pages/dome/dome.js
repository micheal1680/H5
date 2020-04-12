// pages/dome/dome.js
let innerAudioContext;

let test = require("test.js");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 0,
        // 选项卡数组 
        arrayTags: ["男装", "女装", "童装", "家电", "家具", "数码电子"],
        current: 0,
        title: "test",
        avatarUrl: '',
        item: {
			name: "张三"
		}
    },

    list() {
        // open-type: navigate
        wx.navigateTo({
            url: `../list/list?title=${this.data.title}`
        })
        // wx.redirectTo({
        // 	url: '',
        // 	success: function(res) {},
        // 	fail: function(res) {},
        // 	complete: function(res) {},
        // })

        // wx.switchTab({
        // 	url: '',
        // 	success: function(res) {},
        // 	fail: function(res) {},
        // 	complete: function(res) {},
        // })
        // wx.navigateBack({
        // 	delta: 1,
        // })
        // wx.reLaunch({
        // 	url: '',
        // 	success: function(res) {},
        // 	fail: function(res) {},
        // 	complete: function(res) {},
        // })
    },
    changeActive(e) {
        let id = e.currentTarget.dataset.id
        if (id != this.data.active) {
            this.setData({
                active: id
            })
        }
    },
    bindScroll(e) {
        console.log(e.detail)
    },
    // 152 * 6 == 912

    changeCurrent() {
        this.setData({
            current: 4
        })
    },
    play() {
        innerAudioContext.play();
    },
    stop() {
        innerAudioContext.stop()
    },
    pause() {
        innerAudioContext.pause()
    },
    bindGetuserInfo(e) {
        let avatarUrl = JSON.parse(e.detail.rawData).avatarUrl
        this.setData({
            avatarUrl: avatarUrl
        })
    },
    send() {
        wx.request({
            url: 'http://192.168.7.55:8888/login',
            data: {
                name: "孙悟空",
                age: 18
            },
            header: {
                "content-type": "application/json"
            },
            method: 'post',
            dataType: 'json',
            responseType: 'text',
            success: function(res) {
                console.log(res.data.name)
                // console.log(JSON.parse(res.data))
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        test.fn()
        innerAudioContext = wx.createInnerAudioContext();
        // 属性 
        innerAudioContext.src = "http://music.163.com/song/media/outer/url?id=25841337.mp3";

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