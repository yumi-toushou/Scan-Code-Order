// pages/usercenter/components/user-center-card/index.js
const AuthStepType = {
  ONE: 1,
  TWO: 2
};

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currAuthStep: {
      type: Number,
      value: AuthStepType.ONE,
    },
    userInfo: {
      type: Object,
      value: {},
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    defaultAvatarUrl:
      'https://cdn-we-retail.ym.tencent.com/miniapp/usercenter/icon-user-center-avatar@2x.png',
    AuthStepType,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo() {
      this.triggerEvent('getUserInfo')
    }
  },
})
