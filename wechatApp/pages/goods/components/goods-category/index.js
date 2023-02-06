// pages/goods/components/goods-category/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    category: {
      type: Array,
      value: []
    },
    activeKey: {
      type: String,
      value: '女装'
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
    changeCategory(e) {
      this.triggerEvent('changeCategory', e.target.dataset.category)
    }
  }
})
