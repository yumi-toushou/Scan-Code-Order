import { sql } from '../../db/squelize'
import Sequelize from 'sequelize'
import BaseModel from '../BaseModel'

export const desk = sql.define('desk', {
    ...BaseModel,
    name: {
        type: Sequelize.STRING,
        field: 'name',
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})
