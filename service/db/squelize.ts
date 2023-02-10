import { Sequelize } from "sequelize";
import dbmysql from "../config/sql"

const { user, password, database, host, port } = dbmysql
export const sql = new Sequelize(database, user, password, {
    host,
    port,
    dialect:'mysql',
    pool:{  //数据库连接池
        max:10,
        min:3,
        idle:10000
    }
})
