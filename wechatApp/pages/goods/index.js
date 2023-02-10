import shopCarStore from '../../store/shopCar.js'
import userStore from '../../store/user.js'
import categoryApp from '../../apis/category/index'
import goodsApp from '../../apis/goods/index'
import orderApp from '../../apis/order/index'
import order from '../../apis/order/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [{
      id: '1',
      name: '女装'
    }, {
      id: '2',
      name: '男装'
    }],
    list: [{
        id: '1',
        price: '1099',
        name: '辣椒炒肉',
        categoryId: '1',
        thumbnail: '/assets/images/goods-hongshaorou.jpg'
      },
      {
        id: '2',
        price: '1099',
        name: '竹笋炒肉',
        categoryId: '1',
        thumbnail: '/assets/images/goods-hongshaorou.jpg'
      }
    ],
    activeKey: '1',
    goods: [
      []
    ],
    price: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    shopCarStore.bind(this)
    const eventChannel = this.getOpenerEventChannel()
    eventChannel?.on('acceptCodeInfo', function (data) {
      shopCarStore.setDesk(data.desk)
    })

    categoryApp.getList().then(res => {
      this.setData({
        category: res.data.map(item => {
          return {
            ...item,
            id: item.Id
          }
        }),
        activeKey: res.data[0]?.Id || ''
      })
    })

    goodsApp.getList().then(res => {
      console.log(res)
      this.setData({
        list: res.data.map(item => {
          return {
            ...item,
            id: item.Id,
          }
        })
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

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

  onChange(e) {
    this.setData({
      activeKey: e.detail
    })
  },

  changeGoods(e) {
    const item = e.detail
    shopCarStore.addGoods({
      isAppend: false,
      goodId: item.id,
      price: item.price,
      count: item.count
    })
  },

  addOrder() {
    const userInfo = userStore.data.userInfo
    orderApp.add({
      userId: userInfo.id,
      status: 0,
      goods: JSON.stringify(this.data.goods)
    }).then(res => {
      if (res.data.message === 'ok') {
        wx.switchTab({
          url: '/pages/usercenter/index',
        })
      }
    })
  }
})