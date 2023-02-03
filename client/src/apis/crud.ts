import request from './utils/request'

export class Crud {
  constructor({ app }) {
    this.data = {
      app
    }
    this.baseUrl = `/api/app/${app}`

  }

  public getAppModel() {
    return request({
      url: this.baseUrl,
      method: 'get',
    }).then(res => {
      return res.data
    })
  }

  public async getList() {
    return request({
      url: `${this.baseUrl}/getList`,
      method: 'get',
    }).then(res => {
      return res.data
    })
  }

  public async get() {return {}}

  public async add(data) {
    return request({
      url: `${this.baseUrl}/add`,
      method: 'post',
      data,
    })
  }
  
  public async update(data) { 
    return request({
      url: `${this.baseUrl}/update/${data.Id}`,
      method: 'post',
      data
    })
  }

  public async remove(id:string) {
    return request({
      url: `${this.baseUrl}/remove/${id}`,
      method: 'post',
    })
  }
}
