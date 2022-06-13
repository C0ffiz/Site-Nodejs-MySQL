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
        type: DataTypes.FLOAT,
    },
})

Promo.associate = (models) => {
    Promo.hasMany(models.Cliente,
        { foreignKey: 'person_id', as: 'clientes'});
};

module.exports = Promo