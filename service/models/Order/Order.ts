import {sql} from '../../db/squelize'
import Sequelize from 'sequelize'
import BaseModel from '../BaseModel'
import {user} from '../User/User'

export const order = sql.define('order', {
   ...BaseModel,
   userId: {
        type: Sequelize.STRING,
        field: 'userId',
        allowNull:false
    },
    status: {
        type: Sequelize.STRING,
        field: "status", // 0: 已下单 1：已支付
        allowNull: true,
    },
    // 单位是分
    goods: {
        type: Sequelize.STRING,
        field: 'goods',
        allowNull: false,
        defaultValue: ''
    }
}, {
    freezeTableName:true,
    timestamps:false
})

order.belongsTo(user, {
    foreignKey: 'userId'
})
