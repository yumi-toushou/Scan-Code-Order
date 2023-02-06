const {
  Store
} = require('../miniprogram_npm/westore/index');

class ShopCar extends Store {
  constructor(options) {
    super()
    this.options = options
    this.data = {
      // 二維數組
      // {goodId, price, count}
      goods: [
        []
      ],
      price: 0
    }
  }

  addGoods({
    isAppend = false, // 是否是追加
    goodId,
    price,
    count
  }) {
    // 如果是加菜
    if (isAppend) {
      this.data.goods.push([])
      return
    }

    let lastIndex = this.data.goods.length - 1
    let lastItem = this.data.goods[lastIndex]
    let alreadyItemIndex = lastItem.findIndex(i => {
      return i.goodId === goodId
    })
    if (alreadyItemIndex === -1) {
      lastItem.push({
        goodId,
        price,
        count
      })
    } else {
      lastItem[alreadyItemIndex].count = count
    }
    this.data.goods[lastIndex] = lastItem
    this.calcPrice()
    this.calcCount()
    this.update()
  }

  calcPrice() {
    let result = 0; // 以分为单位
    this.data.goods?.forEach(item1 => {
      item1.forEach(item2 => {
        result += (item2.price * item2.count)
      })
    })
    this.data.price = result
  }

  calcCount() {
    let result = {}; // 以分为单位

    this.data.goods?.[this.data.goods?.length - 1].forEach(item => {
      result[item.goodId] = item.count
    })
    this.data.good2count = result
  }
}

export default new ShopCar()