'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('medicaciones_usuarios', [
    {"UsuarioID": 1, "MedicacionID": 1},
    {"UsuarioID": 1, "MedicacionID": 11},
    {"UsuarioID": 1, "MedicacionID": 21},
    {"UsuarioID": 1, "MedicacionID": 31},
    {"UsuarioID": 11, "MedicacionID": 151},
    {"UsuarioID": 11, "MedicacionID": 181},
    {"UsuarioID": 21, "MedicacionID": 201},
    {"UsuarioID": 21, "MedicacionID": 101},
    {"UsuarioID": 21, "MedicacionID": 111},
    {"UsuarioID": 21, "MedicacionID": 121},
    {"UsuarioID": 21, "MedicacionID": 131},
    {"UsuarioID": 21, "MedicacionID": 141},
    {"UsuarioID": 31, "MedicacionID": 141},
    {"UsuarioID": 41, "MedicacionID": 141},
    {"UsuarioID": 51, "MedicacionID": 1},
    {"UsuarioID": 51, "MedicacionID": 41},
    {"UsuarioID": 51, "MedicacionID": 61},
    {"UsuarioID": 61, "MedicacionID": 61},
    {"UsuarioID": 71, "MedicacionID": 131},
    {"UsuarioID": 81, "MedicacionID": 251},
    {"UsuarioID": 81, "MedicacionID": 201},
    {"UsuarioID": 81, "MedicacionID": 91},
    {"UsuarioID": 81, "MedicacionID": 101},
    {"UsuarioID": 81, "MedicacionID": 191},
    {"UsuarioID": 91, "MedicacionID": 241},
    {"UsuarioID": 101, "MedicacionID": 91},
    {"UsuarioID": 111, "MedicacionID": 41},
    {"UsuarioID": 111, "MedicacionID": 41},
    {"UsuarioID": 121, "MedicacionID": 41},
    {"UsuarioID": 131, "MedicacionID": 41},
    {"UsuarioID": 141, "MedicacionID": 41},
    {"UsuarioID": 141, "MedicacionID": 111},
    {"UsuarioID": 141, "MedicacionID": 281},
    {"UsuarioID": 141, "MedicacionID": 301},
    {"UsuarioID": 151, "MedicacionID": 71},
    {"UsuarioID": 161, "MedicacionID": 131},
    {"UsuarioID": 171, "MedicacionID": 261},
    {"UsuarioID": 181, "MedicacionID": 21},
    {"UsuarioID": 191, "MedicacionID": 41}
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('medicaciones_usuarios', null, {});

  }
};