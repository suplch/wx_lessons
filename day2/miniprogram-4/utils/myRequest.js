
module.exports = {
  request(options) {
    let token = wx.getStorageSync('token');
    if (token) {
      if (!options.header) {
        options.header = {};
      }
      options.header.Cookie = "token=" + token
    }
    wx.request(options)
  }
}