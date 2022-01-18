'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class seguimientos extends Model {
    static associate(models) {
      this.belongsTo(models.usuario, {
        foreignKey: 'UsuarioID'
      });
      this.belongsTo(models.profesionales, {
        foreignKey: 'ProfesionalID'
      });
    }
  };
  seguimientos.init({
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UsuarioID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ProfesionalID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'seguimientos',
  }, {
    freezeTableName: true
  });
  
  return seguimientos;
};