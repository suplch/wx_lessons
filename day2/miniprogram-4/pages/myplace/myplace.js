// pages/myplace/myplace.js

const eventBus = require('../../utils/eventbus.js');



Page({
  /**
   * 页面的初始数据
   */
  data: {
    newPlace: {
      clientName:'',
      phone: '',
      placeText: ''
    },
    placeList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      placeList: wx.getStorageSync('clientPlace') || []
    })
  },

  addPlace() {
    this.setData({
      placeList: [...this.data.placeList, this.data.newPlace],
      newPlace: {
        clientName: '',
        phone: '',
        placeText: ''
      }
    });
    wx.setStorageSync('clientPlace', this.data.placeList);
  },

  changeName(event) {
    console.log(event.detail.value);
    this.setData({
      newPlace: {
        ...this.data.newPlace,
        clientName: event.detail.value
      }
    })
  },

  delPlace(event) {
    console.log(event.currentTarget.dataset.itemindex);
    let position = event.currentTarget.dataset.itemindex;
    this.data.placeList.splice(position, 1);

    this.setData({
      placeList: this.data.placeList
    })
    wx.setStorageSync('clientPlace', this.data.placeList)
  },

  changePhone(event) {
    console.log(event.detail.value);
    this.setData({
      newPlace: {
        ...this.data.newPlace,
        phone: event.detail.value
      }
    })
  },

  changePlace(event) {
    console.log(event.detail.value);
    this.setData({
      newPlace: {
        ...this.data.newPlace,
        placeText: event.detail.value
      }
    })
  },

  choicebtn(event) {
    eventBus.emit('choicePlace', event.currentTarget.dataset.place);
    wx.setStorageSync('currentPlace', event.currentTarget.dataset.place)
    wx.navigateBack({
      delta: 1
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