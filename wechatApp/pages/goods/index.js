
import shopCarStore from '../../store/shopCar.js'

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
    list: [
      {
        id: '1',
        price: '1099',
        title: '辣椒炒肉',
        categoryId: '1'
      },
      {
        id: '2',
        price: '1099',
        title: '竹笋炒肉',
        categoryId: '1'
      },
      {
        id: '3',
        price: '1099',
        title: '小鸡炖蘑菇',
        categoryId: '1'
      },
      {
        id: '4',
        price: '1099',
        title: '小炒肉',
        categoryId: '1'
      },
      {
        id: '5',
        price: '1099',
        title: '豆角炒肉',
        categoryId: '1'
      },
      {
        id: '6',
        price: '1099',
        title: '酸辣土豆丝',
        categoryId: '1'
      },
      {
        id: '7',
        price: '1099',
        title: '西红柿炒蛋',
        categoryId: '1'
      },
      {
        id: '8',
        price: '1099',
        title: '土豆炖牛肉',
        categoryId: '1'
      },
      {
        id: '9',
        price: '1099',
        title: '蒜苔炒肉',
        categoryId: '2'
      },
    ],
    activeKey: '1',
    goods: [[]],
    price: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    shopCarStore.bind(this)
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

  onChange(e) {
    this.setData({
      activeKey: e.detail
    })
  },

  changeGoods(e) {
    const item = e.detail
    shopCarStore.addGoods({isAppend: false, goodId: item.id, price: item.price, count: item.count})
  }
})