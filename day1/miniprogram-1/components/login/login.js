// components/login/login.js
Component({
  lifetimes: {
    attached: function () {
      console.log('component attached', this.properties)
      this.setData({
        uname: this.properties.username,
        upwd: this.properties.password
      })
    },
    detached: function () {
      console.log('detached')
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {
    username: String,
    password: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    uname: '',
    upwd: ''
  },


  /**
   * 组件的方法列表
   */
  methods: {
    unameinput(event) {
      console.log(event)
      this.setData({
        uname: event.detail.value
      })
    },

    upwdinput(event) {
      console.log(event)
      this.setData({
        upwd: event.detail.value
      })
    },

    login() {
      console.log(this.properties)
      this.triggerEvent('onLogin', {
        username: this.data.uname,
        password: this.data.upwd
      });
    }
  }
})
