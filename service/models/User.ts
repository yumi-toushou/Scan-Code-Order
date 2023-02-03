import {sql} from '../db/squelize'
import Sequelize from 'sequelize'

export const user = sql.define('user', {
    Id: {
        type: Sequelize.STRING,
        primaryKey: true,
        field: 'Id'
    },
    Username: {
        type: Sequelize.STRING,
        field: 'Username',
        allowNull:false
    },
    Password: {
        type: Sequelize.STRING,
        field: 'Password',
        allowNull:false
    },
    Authority: {
        type: Sequelize.INTEGER,
        field: 'Authority',
        allowNull:false
    }
}, {
    freezeTableName:true,
    timestamps:false
})