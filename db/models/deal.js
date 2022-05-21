const { db, DataTypes} = require('../db')
//const Sequelize = require('sequelize')

const Deal = db.define('deal', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT
    },
    origin: {
        type: DataTypes.STRING
    }
})

module.exports = Deal