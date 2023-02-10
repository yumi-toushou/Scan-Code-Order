// pages/usercenter/components/order-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  externalClasses: ['custom-class'],
  /**
   * 组件的初始数据
   */
  data: {
    activeValues: [],
    currentGoods: [{
      name: '红烧肉',
      count: 2,
      price: 2000
    }, {
      name: '红烧肉',
      count: 2,
      price: 2000
    }, 
    {
      name: '红烧肉',
      count: 2,
      price: 2000
    }, 
    {
      name: '红烧肉',
      count: 2,
      price: 2000
    }, 
    {
      name: '红烧肉',
      count: 2,
      price: 2000
    }, 
    {
      name: '红烧肉',
      count: 2,
      price: 2000
    }, 
    {
      name: '红烧肉',
      count: 2,
      price: 2000
    }, 
    {
      name: '红烧肉',
      count: 2,
      price: 2000
    }, ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange(e) {
      const activeValues = JSON.parse(JSON.stringify(this.data.activeValues))
      const index = activeValues.findIndex(i => i === e.target.dataset.value)
      if (index === -1) {
        activeValues.push(e.target.dataset.value)
      } else {
        activeValues.splice(index, 1)
      }
      this.setData({
        activeValues: activeValues
      });
    },
  }
})
