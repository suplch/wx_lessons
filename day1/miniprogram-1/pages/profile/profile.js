// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '欢迎',
    hobbies: [
      { id: '111', text: '打王者荣耀', level: 5},
      { id: '222', text: 'LoL', level: 2 },
      { id: '333', text: '星际', level: 3 }
    ]
  },

  change() {
    this.setData({
      message: 'Welcome'
    })
  },

  delHobby(event) {
    console.log(event.currentTarget.dataset.hobby)
    let hobby = event.currentTarget.dataset.hobby;
    let hobbies = this.data.hobbies.filter((item)=> {
      return item.id !== hobby.id
    });
    this.setData({
      hobbies
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
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

  },


})