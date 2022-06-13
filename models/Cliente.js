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
});

Cliente.associate = (models) => {
    Cliente.hasOne(models.Promo,
        { foreignKey: 'person_id', as: 'promos'});
};

module.exports = Cliente