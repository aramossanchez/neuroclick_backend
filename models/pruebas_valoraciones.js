'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class pruebas_valoraciones extends Model {
    static associate(models) {
      this.belongsTo(models.pruebas, {
        foreignKey: 'PruebaID'
      });
      this.belongsTo(models.valoraciones, {
        foreignKey: 'ValoracionID'
      });
    }
  };
  pruebas_valoraciones.init({
    PruebaID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ValoracionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'pruebas_valoraciones',
  }, {
    freezeTableName: true
  });
  
  return pruebas_valoraciones;
};