'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class antecedentes_familiares extends Model {
    static associate(models) {
      this.belongsTo(models.usuario, {
        foreignKey: 'UsuarioID'
      });
    }
  };
  antecedentes_familiares.init({
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UsuarioID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'antecedentes_familiares',
  }, {
    freezeTableName: true
  });
  
  return antecedentes_familiares;
};