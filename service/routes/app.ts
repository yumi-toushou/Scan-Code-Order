import { Router } from 'express'

import DeskController from '../controller/DeskController';
import DeskModel from '../models/Desk/index'

import CategoryController from '../controller/CategoryController';
import CategoryModel from '../models/Category/index'

import GoodController from '../controller/GoodController';
import GoodModel from '../models/Good/index'

import OrderController from '../controller/OrderController';
import OrderModel from '../models/Order/index'

import UserController from '../controller/UserController';
import UserModel from '../models/User/index'

const generateApp = (type: string) => {
    switch (type) {
        case 'desk':
            return { controller: DeskController, model: DeskModel }; break;
        case 'category':
            return { controller: CategoryController, model: CategoryModel }; break;
        case 'good':
            return { controller: GoodController, model: GoodModel }; break;
        case 'order':
            return { controller: OrderController, model: OrderModel }; break;
        case 'user':
            return { controller: UserController, model: UserModel }; break;
        default:
            return { controller: DeskController, model: [] }
    }
}

const appRouter = Router();

appRouter.get('/:app', async (req: any, res: any) => {
    try {
        const { app: appType } = req.params
        const app = generateApp(appType)
        res.status(200).send({
            message: 'ok',
            data: app.model
        })
    } catch (err) {
        res.status(200).send({
            message: 'error',
            data: err
        })
    }
})

appRouter.get('/:app/getList', async (req: any, res: any) => {
    try {
        const { app: appType } = req.params

        const app = generateApp(appType)
        const data = await app.controller.getList({})

        res.status(200).send({
            message: 'ok',
            data
        })
    } catch (err) {
        res.status(200).send({
            message: 'error',
            data: err
        })
    }
})

appRouter.post('/:app/add', async (req: any, res: any) => {
    try {
        const { app: appType } = req.params
        const app = generateApp(appType)
        console.log(req)
        const data = await app.controller.add(req.body)
        res.send({
            message: 'ok',
            data,
        })
    } catch (e) {
        res.send({
            message: 'error',
            data: e,
        })
    }
})

appRouter.post('/:app/update/:id', async (req: any, res: any) => {
    try {
        const { app: appType, id } = req.params
        const app = generateApp(appType)
        const data = req.body
        console.log(Object.keys(req.body))
        console.log(data)
        const result = await app.controller.update(data, { where: { Id: id } })
        res.send({
            message: 'ok',
            data: result,
        })
    } catch (e) {
        res.send({
            message: 'error',
            data: e,
        })
    }
})

appRouter.post('/:app/remove/:id', async (req: any, res: any) => {
    try {
        const { app: appType, id } = req.params
        const app = generateApp(appType)
        console.log(id)
        const data = await app.controller.remove({
            where: {
                Id: id
            }
        })
        res.send({
            message: 'ok',
            data,
        })
    } catch (e) {
        console.log(e)
        res.send({
            message: 'error',
            data: e,
        })
    }
})

export default appRouter