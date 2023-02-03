
import { v4 as uuid } from 'uuid'
export default class BaseController {
    declare model;
    constructor({ model }: any) {
        this.model = model
    }

    public async getList(options: any) {
        return await this.model.findAll(options)
    }

    public async add(options: any) {
        return await this.model.create({
            Id: uuid(),
            Created_time: new Date().getTime(),
            ...options
        })
    }

    public async update(fields: any, options: any) {
        return await this.model.update(fields, options)
    }

    public async remove(options: any) {
        return await this.model.destroy(options)
    }
}