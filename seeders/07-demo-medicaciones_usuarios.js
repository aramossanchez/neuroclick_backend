'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('medicaciones_usuarios', [
    {"UsuarioID": 1, "MedicacionID": 1},
    {"UsuarioID": 1, "MedicacionID": 2},
    {"UsuarioID": 1, "MedicacionID": 3},
    {"UsuarioID": 1, "MedicacionID": 4},
    {"UsuarioID": 2, "MedicacionID": 15},
    {"UsuarioID": 2, "MedicacionID": 18},
    {"UsuarioID": 3, "MedicacionID": 21},
    {"UsuarioID": 3, "MedicacionID": 11},
    {"UsuarioID": 3, "MedicacionID": 12},
    {"UsuarioID": 3, "MedicacionID": 13},
    {"UsuarioID": 3, "MedicacionID": 14},
    {"UsuarioID": 3, "MedicacionID": 15},
    {"UsuarioID": 6, "MedicacionID": 1},
    {"UsuarioID": 6, "MedicacionID": 5},
    {"UsuarioID": 6, "MedicacionID": 7},
    {"UsuarioID": 9, "MedicacionID": 31},
    {"UsuarioID": 9, "MedicacionID": 21},
    {"UsuarioID": 9, "MedicacionID": 11},
    {"UsuarioID": 9, "MedicacionID": 12},
    {"UsuarioID": 9, "MedicacionID": 19},
    {"UsuarioID": 11, "MedicacionID": 8},
    {"UsuarioID": 11, "MedicacionID": 5},
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('medicaciones_usuarios', null, {});

  }
};