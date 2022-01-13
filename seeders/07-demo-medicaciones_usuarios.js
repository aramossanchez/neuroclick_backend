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
      {"UsuarioID": 4, "MedicacionID": 15},
      {"UsuarioID": 5, "MedicacionID": 15},
      {"UsuarioID": 6, "MedicacionID": 1},
      {"UsuarioID": 6, "MedicacionID": 5},
      {"UsuarioID": 6, "MedicacionID": 7},
      {"UsuarioID": 7, "MedicacionID": 7},
      {"UsuarioID": 8, "MedicacionID": 17},
      {"UsuarioID": 9, "MedicacionID": 31},
      {"UsuarioID": 9, "MedicacionID": 21},
      {"UsuarioID": 9, "MedicacionID": 11},
      {"UsuarioID": 9, "MedicacionID": 12},
      {"UsuarioID": 9, "MedicacionID": 19},
      {"UsuarioID": 10, "MedicacionID": 25},
      {"UsuarioID": 11, "MedicacionID": 8},
      {"UsuarioID": 12, "MedicacionID": 5},
      {"UsuarioID": 12, "MedicacionID": 5},
      {"UsuarioID": 13, "MedicacionID": 5},
      {"UsuarioID": 14, "MedicacionID": 5},
      {"UsuarioID": 15, "MedicacionID": 5},
      {"UsuarioID": 15, "MedicacionID": 15},
      {"UsuarioID": 15, "MedicacionID": 25},
      {"UsuarioID": 15, "MedicacionID": 30},
      {"UsuarioID": 16, "MedicacionID": 6},
      {"UsuarioID": 17, "MedicacionID": 12},
      {"UsuarioID": 18, "MedicacionID": 26},
      {"UsuarioID": 19, "MedicacionID": 3},
      {"UsuarioID": 20, "MedicacionID": 5}
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('medicaciones_usuarios', null, {});

  }
};