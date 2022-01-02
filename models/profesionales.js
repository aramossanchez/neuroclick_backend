'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class profesionales extends Model {
    static associate(models) {
      this.hasMany(models.pruebas_hechas, {
        foreignKey: 'ProfesionalID'
      });
    }
  };
  profesionales.init({
    correo_electronico: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clave_acceso: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono_contacto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'profesionales',
  }, {
    freezeTableName: true
  });
  
  return profesionales;
};