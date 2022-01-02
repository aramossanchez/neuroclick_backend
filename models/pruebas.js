'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class pruebas extends Model {
    static associate(models) {
      // this.hasMany(models.medicaciones_usuarios, {
      //   foreignKey: 'MedicacionID'
      // });
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