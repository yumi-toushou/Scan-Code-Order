import {sql} from '../../db/squelize'
import Sequelize from 'sequelize'
import BaseModel from '../BaseModel'

export const user = sql.define('user', {
   ...BaseModel,
    username: {
        type: Sequelize.STRING,
        field: 'username',
        allowNull:false
    },
    password: {
        type: Sequelize.STRING,
        field: 'password',
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        field: 'phone',
        allowNull: true
    },
    avatar: {
        type: Sequelize.STRING,
        field: 'avatar',
        allowNull: true
    },
    authority: {
        type: Sequelize.INTEGER,
        field: 'authority',
        allowNull: false
    }
}, { 
    freezeTableName:true,
    timestamps:false
})