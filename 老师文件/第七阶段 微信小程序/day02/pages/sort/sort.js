// pages/sort/sort.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    active:0,
    arrayTags:["男装","女装","精选","数码产品","家庭用具","双肩包","挎包","牛仔裤"]
	},
  changeActive:function(e){
   console.log(e);
   let id=e.currentTarget.dataset.id;
   if(id!==this.data.active){
     this.setData({
          active:id
     })
   }
  },
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

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