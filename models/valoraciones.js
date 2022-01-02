'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class valoraciones extends Model {
    static associate(models) {
      // this.hasMany(models.enfermedades_usuarios, {
      //   foreignKey: 'EnfermedadID'
      // });
    }
  };
  valoraciones.init({
    pregunta: {
      type: DataTypes.STRING,
      allowNull: false
    },
    escala: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'valoraciones',
  }, {
    freezeTableName: true
  });
  
  return valoraciones;
};