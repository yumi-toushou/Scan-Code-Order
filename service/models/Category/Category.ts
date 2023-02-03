import {sql} from '../../db/squelize'
import Sequelize from 'sequelize'
import BaseModel from '../BaseModel'

export const category = sql.define('category', {
   ...BaseModel,
   name: {
        type: Sequelize.STRING,
        field: 'name',
        allowNull:false
    },
}, {
    freezeTableName:true,
    timestamps:false
})