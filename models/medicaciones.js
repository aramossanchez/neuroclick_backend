'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class medicaciones extends Model {
    static associate(models) {
      this.hasMany(models.medicaciones_usuarios, {
        foreignKey: 'MedicacionID'
      });
    }
  };
  medicaciones.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'medicaciones',
  }, {
    freezeTableName: true
  });
  
  return medicaciones;
};