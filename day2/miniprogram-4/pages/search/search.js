// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word: '海阔天空',
    song: null
  },

  inputWord(event) {
    console.log(event);
    this.setData({
      word: event.detail.value
    })
  },

  search() {
    let thisPage = this;
    wx.request({
      url: `https://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=${this.data.word}`,
      dataType: 'json',
      success(res) {
        console.log(res.data)
        thisPage.setData({
          song: res.data
        })
      }
    })
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