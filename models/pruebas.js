'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class pruebas extends Model {
    static associate(models) {
      this.hasMany(models.pruebas_valoraciones, {
        foreignKey: 'PruebaID'
      });
      this.hasMany(models.pruebas_hechas, {
        foreignKey: 'PruebaID'
      });
    }
  };
  pruebas.init({
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'pruebas',
  }, {
    freezeTableName: true
  });
  
  return pruebas;
};