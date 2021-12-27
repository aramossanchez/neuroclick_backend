'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class enfermedades extends Model {
    static associate(models) {
      this.hasMany(models.enfermedades_usuarios, {
        foreignKey: 'EnfermedadID'
      });
    }
  };
  enfermedades.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'enfermedades',
  }, {
    freezeTableName: true
  });
  
  return enfermedades;
};