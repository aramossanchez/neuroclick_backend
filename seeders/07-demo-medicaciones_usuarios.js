'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('medicaciones_usuarios', [
      {"UsuarioID": 5, "MedicacionID": 5},
    {"UsuarioID": 5, "MedicacionID": 15},
    {"UsuarioID": 5, "MedicacionID": 25},
    {"UsuarioID": 5, "MedicacionID": 35},
    {"UsuarioID": 15, "MedicacionID": 155},
    {"UsuarioID": 15, "MedicacionID": 185},
    {"UsuarioID": 25, "MedicacionID": 205},
    {"UsuarioID": 25, "MedicacionID": 105},
    {"UsuarioID": 25, "MedicacionID": 115},
    {"UsuarioID": 25, "MedicacionID": 125},
    {"UsuarioID": 25, "MedicacionID": 135},
    {"UsuarioID": 25, "MedicacionID": 145},
    {"UsuarioID": 35, "MedicacionID": 145},
    {"UsuarioID": 45, "MedicacionID": 145},
    {"UsuarioID": 55, "MedicacionID": 5},
    {"UsuarioID": 55, "MedicacionID": 45},
    {"UsuarioID": 55, "MedicacionID": 65},
    {"UsuarioID": 65, "MedicacionID": 65},
    {"UsuarioID": 75, "MedicacionID": 135},
    {"UsuarioID": 85, "MedicacionID": 255},
    {"UsuarioID": 85, "MedicacionID": 205},
    {"UsuarioID": 85, "MedicacionID": 95},
    {"UsuarioID": 85, "MedicacionID": 105},
    {"UsuarioID": 85, "MedicacionID": 195},
    {"UsuarioID": 95, "MedicacionID": 245},
    {"UsuarioID": 105, "MedicacionID": 95},
    {"UsuarioID": 115, "MedicacionID": 45},
    {"UsuarioID": 115, "MedicacionID": 45},
    {"UsuarioID": 125, "MedicacionID": 45},
    {"UsuarioID": 135, "MedicacionID": 45},
    {"UsuarioID": 145, "MedicacionID": 45},
    {"UsuarioID": 145, "MedicacionID": 115},
    {"UsuarioID": 145, "MedicacionID": 285},
    {"UsuarioID": 145, "MedicacionID": 305},
    {"UsuarioID": 155, "MedicacionID": 75},
    {"UsuarioID": 165, "MedicacionID": 135},
    {"UsuarioID": 175, "MedicacionID": 265},
    {"UsuarioID": 185, "MedicacionID": 25},
    {"UsuarioID": 195, "MedicacionID": 45}
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('medicaciones_usuarios', null, {});

  }
};