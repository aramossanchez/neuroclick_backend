'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class citas extends Model {
    static associate(models) {
      this.belongsTo(models.usuario, {
        foreignKey: 'UsuarioID'
      });
      this.belongsTo(models.profesionales, {
        foreignKey: 'ProfesionalID'
      });
    }
  };
  citas.init({
    descripcion: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    horario_cita: {
      type: DataTypes.DATE,
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
    modelName: 'citas',
  }, {
    freezeTableName: true
  });
  
  return citas;
};