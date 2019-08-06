### 微信小程序开发
- 官方文档 https://developers.weixin.qq.com/doc/
- 小程序简介
```
    微信小程序, 英文名Mini Program，是一种快速安装快速使用的应用
它实现了应用“触手可及”的梦想，用户扫一扫或搜一下即可打开应用。
面向企业、政府、媒体、其他组织或个人的开发者. 小程序、订阅号、服务号、企业号是并行的体系。
```
- 微信小程序的开发
    + 注册微信公众平台 小程序 https://mp.weixin.qq.com/?token=&lang=zh_CN
    + 下载小程序开发者工具 https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
- 小程序基本结构
```
    pages         // pages 文件夹下是小程序剧具体页面
        index          // index 首页的代码与配置
            index.js
            index.json
            index.wxml
            index.wxss
        logs            
            logs.js        // logs 页面代码与配置
            logs.json
            logs.wxml
            logs.wxss
    utils
        util.js         // 一下工具方法
    app.js              // 项目的入口启动文件
    app.json            // 小程序的全局配置
    app.wxss            // 小程序的全局 样式配置
    project.config.json   // 整个项目的配置信息
    sitemap.json     // 供微信搜索使用的配置信息
```
- 小程序 文件扩展名
    + .js 表示小程序的逻辑层
    + .json 小程序的配置文件
    + .wxml 小程序的界面模板文件, 外观
    + .wxss  小程序的样式文件
- Page 页面
    + 模板 wxml
- wx:if
```
<view wx:if="{{view == 'WEBVIEW'}}"> WEBVIEW </view>
<view wx:elif="{{view == 'APP'}}"> APP </view>
<view wx:else="{{view == 'MINA'}}"> MINA </view>
```
- wx:for  wx:for-item  wx:for-index
```
  <view wx:for="{{array}}" wx:for-item="item" wx:for-index="index"> {{item}} </view>
```

```json
{
  "tabBar": {
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/profile/profile",
        "text": "详情"
      }
    ]
  }
}
```

- 事件
```
<view id="tapTest" data-hi="WeChat" bindtap="tapName"> Click me! </view>
```
```ecmascript 6
Page({
  tapName: function(event) {
    console.log(event)
  }
})
```
类型	触发条件	最低版本
- 事件列表

| 类型 | 触发条件 |
| ------ | ------ |
| touchstart | 手指触摸动作开始 |
| touchmove | 手指触摸后移动 |
| touchcancel | 手指触摸动作被打断，如来电提醒，弹窗 |
| touchend | 手指触摸动作结束 |
| tap | 手指触摸后马上离开 |
| longpress | 手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发 |
| longtap | 手指触摸后，超过350ms再离开（推荐使用longpress事件代替 |
| transitionend | 会在 WXSS transition 或 wx.createAnimation 动画结束后触发 |
| animationstart | 会在一个 WXSS animation 动画开始时触发 |
| animationiteration | 会在一个 WXSS animation 一次迭代结束时触发 |
| animationend | 会在一个 WXSS animation 动画完成时触发 |
| touchforcechange | 在支持 3D Touch 的 iPhone 设备，重按时会触发 |

- 事件绑定和冒泡
    + key 以bind或catch开头，然后跟上事件的类型，如bindtap、catchtouchstart。在非原生组件中，bind和catch后可以紧跟一个冒号，其含义不变，如bind:tap、catch:touchstart。
    + value 是一个字符串，需要在对应的 Page 中定义同名的函数。不然当触发事件的时候会报错。
- 事件的捕获阶段
    + 需要在捕获阶段监听事件时，可以采用capture-bind、capture-catch关键字，后者将中断捕获阶段和取消冒泡阶段。
    
- 事件对象 Event

| 属性 | 类型 | 说明 |
| ------ | ------ | ------ |
| type | String | 事件类型 |
| timeStamp | Integer | 事件生成时的时间戳 |
| target | Object | 触发事件的组件的一些属性值集合 |
| currentTarget | Object | 当前组件的一些属性值集合 |
| mark | Object | 事件标记数据 |

- CustomEvent 自定义事件对象属性列表（继承 BaseEvent）：

| 属性 | 类型	 | 说明 |
| ------ | ------ | ------ |
| detail | Object | 额外的信息 |

- TouchEvent 触摸事件对象属性列表（继承 BaseEvent）：

|属性 | 类型 | 说明 |
| ------ | ------ | ------ |
| touches | Array | 触摸事件，当前停留在屏幕中的触摸点信息的数组 |
| changedTouches | Array | 触摸事件，当前变化的触摸点信息的数组 |


- target
- 触发事件的源组件。

|属性 | 类型 | 说明 |
| ------ | ------ | ------ |
| id	String	事件源组件的id |
| dataset	Object	事件源组件上由data-开头的自定义属性组成的集合 |
| currentTarget |

-事件绑定的当前组件。

|属性 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | String | 当前组件的id |
| dataset | Object | 当前组件上由data-开头的自定义属性组成的集合 |


- 导航
    - 导航传参
    
- 自定义组件 Component
    + 参数
    + 事件
        - this.triggerEvent('myevent', myEventDetail, myEventOption)
        
- 模板 template
```
<!--wxml-->
<template name="staffName">
  <view>
    FirstName: {{firstName}}, LastName: {{lastName}}
  </view>
</template>

<template is="staffName" data="{{...staffA}}"></template>
<template is="staffName" data="{{...staffB}}"></template>
<template is="staffName" data="{{...staffC}}"></template>
```
```ecmascript 6
Page({
  data: {
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'}
  }
})
```
        
```ecmascript 6
Component({

  properties: {
    product: Object, // 参数定义
    argv: {
        type: String,
        value: 'defaultValue'
    }
  },

  data: {

  },

  methods: {
    select() {
      this.triggerEvent('onEvent', {event: 'data'})
    }
  }
})
```
```json
{
  "component": true,
  "usingComponents": {}
}
```
页面引用组件配置
```json
{
  "usingComponents": {
    "product-item": "/components/product-item/product-item"
  }
}
```
### wx.request 服务
- 百度音乐接口测试 https://www.jianshu.com/p/e9d43d15f6ba
