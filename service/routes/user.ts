import {Router} from 'express'

const userRouter = Router();


userRouter.post('/login', (req: any, res: any) => {
    res.status(200).send({
        data: 'ok',
        token: 'abcdefg'
    })
})

userRouter.post('/register', async (req: any, res: any) => {
    res.send({
        data: 'ok'
    })
})


export default userRouter