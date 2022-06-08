const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Promo = db.define('Promo', {
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    produto: {
        type: DataTypes.STRING,
    },
    preco: {
        type: DataTypes.STRING,
    },
})

module.exports = Promo