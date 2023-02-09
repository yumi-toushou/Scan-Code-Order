// pages/usercenter/index.js
import shopCarStore from '../../store/shopCar'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    currAuthStep: 1,
    visible: false,
    haveOrder: false,
    historyOrderList: [{Id: 1}, {Id: 2}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().init()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  onLogin() {
    this.setData({
      visible: true
    })
  },
  getUserInfo() {
    const _this = this
    return new Promise((resolve, reject) => {
      wx.getUserProfile({
        desc: 'login',
        success: function (res) {
          console.log(res)
          _this.setData({
            userInfo: res.userInfo,
            currAuthStep: 2
          })
          resolve()
        },
        fail: function (err) {
          reject(err)
        }
      })
    })
  },
  onVisibleChange() {
    const visible = this.data.visible
    this.setData({
      visible: !visible
    })
  },
  getPhoneNumber(e) {
    console.log(e.detail.code)
    this.getUserInfo().then(() => {
      this.setData({
        visible: false
      })
    })
  },
  onOtherLoginMethod() {
    wx.navigateTo({
      url: '/pages/usercenter/login/index',
    })
  },
  goOrder() {
    // 二维码包含的信息：桌位
    wx.scanCode({
      success(res) {
        const codeInfo = JSON.parse(res.result)
        wx.navigateTo({
          url: '/pages/goods/index',
          success: function (res) {
            res.eventChannel.emit('acceptCodeInfo', codeInfo)
          }
        })
      }
    })
  }
})