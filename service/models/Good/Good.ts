import {sql} from '../../db/squelize'
import Sequelize from 'sequelize'
import BaseModel from '../BaseModel'
import {category} from '../Category/Category'

export const good = sql.define('good', {
   ...BaseModel,
   name: {
        type: Sequelize.STRING,
        field: 'name',
        allowNull:false
    },
    categoryId: {
        type: Sequelize.STRING,
        field: "categoryId",
        allowNull: true,
    },
    // 单位是分
    price: {
        type: Sequelize.STRING,
        field: 'price',
        allowNull: false,
        defaultValue: 0
    }
}, {
    freezeTableName:true,
    timestamps:false
})

good.belongsTo(category, {
    foreignKey: 'categoryId'
})
