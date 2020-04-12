// pages/find/find.js
let InnerAudioContext;
// Page里面有data、onload、onReady、onshow、onHide、onUnload等属性
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},
  play:function(e){
    InnerAudioContext.play();
  },
  pause:function(e){
    InnerAudioContext.pause();
  },
  stop:function(e){
    InnerAudioContext.stop();
  },
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
    InnerAudioContext = wx.createInnerAudioContext();
    InnerAudioContext.src ="http://music.163.com/song/media/outer/url?id=1376577855.mp3"
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
    
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})