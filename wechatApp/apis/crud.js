import request from './request'

export class Crud {
  constructor({ app }) {
    this.data = {
      app
    }
    this.baseUrl = `/app/${app}`
  }

  async getAppModel() {
    return request({
      url: this.baseUrl,
      method: 'get',
    }).then(res => {
      return res.data
    })
  }

  async getList() {
    return request({
      url: `${this.baseUrl}/getList`,
      method: 'get',
    }).then(res => {
      return res.data
    })
  }

  async get() {
    return {}
  }

  async add(data) {
    return request({
      url: `${this.baseUrl}/add`,
      method: 'post',
      data,
    })
  }

  async update(data) {
    return request({
      url: `${this.baseUrl}/update/${data.Id}`,
      method: 'post',
      data
    })
  }

  async remove(id) {
    return request({
      url: `${this.baseUrl}/remove/${id}`,
      method: 'post',
    })
  }
}