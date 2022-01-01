'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class medicaciones_usuarios extends Model {
    static associate(models) {
      this.belongsTo(models.usuario, {
        foreignKey: 'UsuarioID'
      });
      this.belongsTo(models.medicaciones, {
        foreignKey: 'MedicacionID'
      });
    }
  };
  medicaciones_usuarios.init({
    UsuarioID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MedicacionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'medicaciones_usuarios',
  }, {
    freezeTableName: true
  });
  
  return medicaciones_usuarios;
};