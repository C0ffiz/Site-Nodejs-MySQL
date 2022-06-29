const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Sobre = db.define('Sobre', {
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sobretxt: {
        type: DataTypes.STRING,
    },
})

module.exports = Sobre