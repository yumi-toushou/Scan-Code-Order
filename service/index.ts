const express = require('express')
import bodyParser from "body-parser"
import {sql} from './db/squelize'

import userRouter from "./routes/user"
import appRouter from "./routes/app"

const app = express()
const port = 9528

app.use(bodyParser.urlencoded({extended: false}))

app.use((req: any,res: any,next:any) => {
  console.log('LOG：' + req.path)
  next()
})

app.use('/user', userRouter)
app.use('/app', appRouter)

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  try {
    await sql.authenticate();
    console.log('Connection has been established successfully.');
    await sql.sync()
    console.log('Data Table have been synchronized.');
  } catch (error) {
    console.error('Unable to connect to the database:');
  }
})