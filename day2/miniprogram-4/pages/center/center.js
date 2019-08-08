// pages/center/center.js
const ajax = require('../../utils/myRequest');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    logined: false,
    userName: '',
    login_name: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      logined: wx.getStorageSync('token') ? true : false,
      userName: wx.getStorageSync('username')
    })
  },

  login() {
    const thisPage = this;
    wx.request({
      url: 'http://localhost:3000/api/login',
      data: {
        loginName: this.data.login_name,
        password: this.data.password
      },
      method: 'POST',
      dataType: 'json',
      success(res) {
        if (res.data.status === 10000) {
          thisPage.setData({
            logined: true,
            userName: res.data.data.userName
          })
          wx.setStorageSync('userid', res.data.data.userId);
          wx.setStorageSync('token', res.data.data.token);
          wx.setStorageSync('username', res.data.data.userName);
        }
        console.log(res.data)
      }
    })
  },

  logout() {
    wx.removeStorageSync('userid');
    wx.removeStorageSync('username');
    wx.removeStorageSync('token');
    this.setData({
      logined: false,
      userName: '',
      login_name: '',
      password: ''
    })
  },

  getgender() {
    ajax.request({
      url: 'http://localhost:3000/api/getgender?userId=22222',
      dataType: 'json',
      success(res) {
        console.log(res.data)
      }
    })
  },

  changeLoginName(event) {
    console.log(event.detail);
    this.setData({
      login_name: event.detail.value
    })
  },

  changePassword(event) {
    console.log(event.detail);
    this.setData({
      password: event.detail.value
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