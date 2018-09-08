const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    person: false,
    lastDataRefreshTime:'2018-08-26',
    nextDataRefreshTime: '2018-10-26',   
  },
  onLoad: function () {
  },
  onShareAppMessage: function () {

  },
  handleFetchCode: function () {
    wx.navigateTo({
      url: '../fetchcode/fetchcode'
    });
  },
  handleCheckResult: function () {
  },
})

