// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {},
  // 事件处理函数
  skipComponents() {
    wx.navigateTo({
      url: '../components/components'
    })
  },
  skipCount() {
    wx.navigateTo({
      url: '../count/count'
    })
  },
  skipConditionalRender() {
    wx.navigateTo({
      url: '../conditionalRender/conditionalRender'
    })
  }
})