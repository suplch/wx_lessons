// pages/shopping-cart/shopping-cart.js

const cart = require('../../utils/shoppingcart.js');

const eventBus = require('../../utils/eventbus.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartItems: [],
    total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log('cart', cart.getCartItems())
    this.setData({
      cartItems: cart.getCartItems(),
      total: cart.getTotal()
    })
  },

  incCount(event) {
    console.log(event.currentTarget.dataset.pid);
    cart.incCount(event.currentTarget.dataset.pid)
    // event bus 广播一个事件 refreshCartCount
    eventBus.emit('refreshCartCount', ' a data');
    this.setData({
      cartItems: cart.getCartItems(),
      total: cart.getTotal()
    })
  },

  decCount(event) {
    cart.decCount(event.currentTarget.dataset.pid)
    eventBus.emit('refreshCartCount');
    this.setData({
      cartItems: cart.getCartItems(),
      total: cart.getTotal()
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