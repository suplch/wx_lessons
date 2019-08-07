// pages/preview/preview.js
const eventBus = require('../../utils/eventbus.js');
 //  wx.setStorageSync('currentPlace', event.currentTarget.dataset.place)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartItems: null,
    total: 0,
    place: wx.getStorageSync('currentPlace') || null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const cartItems = JSON.parse(options.cartItems)
    let total = 0;
    for (let item of cartItems) {
      total += item.price * item.count
    }

    this.setData({
      cartItems: cartItems,
      total: total
    })

    eventBus.on('choicePlace', (place) => {
      console.log('preview ', place);
      this.setData({
        place: place
      })
    })

  },

  goPlace() {
    wx.navigateTo({
      url: '../myplace/myplace',
    })
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