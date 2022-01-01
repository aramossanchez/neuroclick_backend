'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      this.hasOne(models.antecedentes_familiares, {
        foreignKey: 'UsuarioID'
      });
      this.hasMany(models.enfermedades_usuarios, {
        foreignKey: 'UsuarioID'
      });
      this.hasMany(models.medicaciones_usuarios, {
        foreignKey: 'UsuarioID'
      });
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