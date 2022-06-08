const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Cliente = db.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
    },
    cpf: {
        type: DataTypes.STRING,
    },
})

module.exports = Cliente