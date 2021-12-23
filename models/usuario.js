'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
    //   this.hasMany(models.pedido, {
    //     foreignKey: 'usuarioId'
    //   });
    }
  };
  usuario.init({
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
    pension: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    persona_contacto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono_contacto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_nacimiento: {
      type: DataTypes.DATE,
      allowNull: false
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estatura: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};