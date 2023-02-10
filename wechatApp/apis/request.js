import {
  baseUrl
} from './configs.js'
export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      header: {
        "content-type": 'application/x-www-form-urlencoded'
      },
      ...options,
      url: baseUrl + options?.url,
      method: options.method || 'get',
      data: options.data || {},
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}