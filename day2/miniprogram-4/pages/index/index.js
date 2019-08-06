//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    song_list: []
  },

  getmusic() {
    let thisPage = this;
    wx.request({
      url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0', 
      dataType: 'json',
      success(res) {
        console.log(res.data)
        thisPage.setData({
          song_list: res.data.song_list
        })
      }
    })
  },

  onLoad: function () {

  },

})
