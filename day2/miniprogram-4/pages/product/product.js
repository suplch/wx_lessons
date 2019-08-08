// pages/product/product.js

Page({
  pageNo: 1,
  loadingPage: false,
  finished: false,
  /**
   * 页面的初始数据
   */
  data: {
    products: []
  },

  gotoDetail(event) {
    console.log(event.currentTarget.dataset.pid)
    wx.navigateTo({
      url: '../product_detail/product_detail?pid=' + event.currentTarget.dataset.pid,
    })
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const thispage = this;
    wx.request({
      url: 'http://localhost:3000/api/getproducts?pageSize=8&pageNo=' + this.pageNo,
      dataType: 'json',
      success(res) {
        console.log(res.data)
        thispage.setData({
          products: res.data.products
        })
      }
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
    console.log('reach')
    if (this.finished || this.loadingPage) {
      return;
    }
    this.loadingPage = true;
    let thispage = this;
    this.pageNo++;
    wx.request({
      url: 'http://localhost:3000/api/getproducts?pageSize=8&pageNo=' + this.pageNo,
      dataType: 'json',
      success(res) {
        console.log(res.data)
        thispage.setData({
          products: [...thispage.data.products, ...res.data.products]
        });
        if (res.data.products.length === 0) {
          thispage.finished = true;
        }
      },
      complete(){
        thispage.loadingPage = false;
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})