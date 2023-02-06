// pages/goods/components/goods-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    good2count: {
      type: Object,
      value: {}
    }
  },

  externalClasses: ['custom-class'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeGoods(e) {
      this.triggerEvent('changeGoods', e.detail)
    }
  }
})
