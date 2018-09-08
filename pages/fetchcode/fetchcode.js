const app = getApp()

Page({
  data: {
    phoneNumber: '',
    password: '',
    code: '',           
  },
  onLoad: function () {
    wx.request({
      url: 'https://bjhjyd.westus2.cloudapp.azure.com:8080/test',
      success: (res) => {
        this.setData({phoneNumber : res.data.phone});
      }
    })
  },
  handleGoBack: function () {
    wx.navigateBack();
  },
  handleFetchCode: function () {
  },
})

