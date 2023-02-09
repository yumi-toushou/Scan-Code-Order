
const {
  Store
} = require('../miniprogram_npm/westore/index');

class OrderStore extends Store {
  constructor(options) {
    super()
    this.options = options

    this.data = {
      currentOrder: {
        Id: '1675830735742'
      },
      historyOrderList: []
    }
  }

  init() {
    this.data.userInfo = {
      id: '1675830735742'
    }
    this.update()
  }
}

export default new OrderStore()