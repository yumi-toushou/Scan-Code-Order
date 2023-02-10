
const {
  Store
} = require('../miniprogram_npm/westore/index');

class UserStore extends Store {
  constructor(options) {
    super()
    this.options = options

    this.data = {
      userInfo: {
        id: '1675830735742'
      }
    }
  }

  init() {
    this.data.userInfo = {
      id: '1675830735742'
    }
    this.update()
  }

}

export default new UserStore()
