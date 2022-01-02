'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class pruebas_hechas extends Model {
    static associate(models) {
      this.belongsTo(models.pruebas, {
        foreignKey: 'PruebaID'
      });
      this.belongsTo(models.usuario, {
        foreignKey: 'UsuarioID'
      });
      this.belongsTo(models.profesionales, {
        foreignKey: 'ProfesionalID'
      });
    }
  };
  pruebas_hechas.init({
    puntuacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PruebaID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UsuarioID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProfesionalID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'pruebas_hechas',
  }, {
    freezeTableName: true
  });
  
  return pruebas_hechas;
};