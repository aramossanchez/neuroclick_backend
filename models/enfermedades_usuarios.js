'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class enfermedades_usuarios extends Model {
    static associate(models) {
      this.belongsTo(models.usuario, {
        foreignKey: 'UsuarioID'
      });
      this.belongsTo(models.enfermedades, {
        foreignKey: 'EnfermedadID'
      });
    }
  };
  enfermedades_usuarios.init({
    UsuarioID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EnfermedadID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'enfermedades_usuarios',
  }, {
    freezeTableName: true
  });
  
  return enfermedades_usuarios;
};