'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('enfermedades_usuarios', [
    {"UsuarioID": 1, "EnfermedadID": 1},
    {"UsuarioID": 1, "EnfermedadID": 11},
    {"UsuarioID": 1, "EnfermedadID": 21},
    {"UsuarioID": 1, "EnfermedadID": 31},
    {"UsuarioID": 11, "EnfermedadID": 151},
    {"UsuarioID": 11, "EnfermedadID": 181},
    {"UsuarioID": 21, "EnfermedadID": 201},
    {"UsuarioID": 21, "EnfermedadID": 101},
    {"UsuarioID": 21, "EnfermedadID": 111},
    {"UsuarioID": 21, "EnfermedadID": 121},
    {"UsuarioID": 21, "EnfermedadID": 131},
    {"UsuarioID": 21, "EnfermedadID": 141},
    {"UsuarioID": 31, "EnfermedadID": 141},
    {"UsuarioID": 41, "EnfermedadID": 141},
    {"UsuarioID": 51, "EnfermedadID": 1},
    {"UsuarioID": 51, "EnfermedadID": 41},
    {"UsuarioID": 51, "EnfermedadID": 61},
    {"UsuarioID": 61, "EnfermedadID": 61},
    {"UsuarioID": 71, "EnfermedadID": 131},
    {"UsuarioID": 81, "EnfermedadID": 251},
    {"UsuarioID": 81, "EnfermedadID": 201},
    {"UsuarioID": 81, "EnfermedadID": 91},
    {"UsuarioID": 81, "EnfermedadID": 101},
    {"UsuarioID": 81, "EnfermedadID": 191},
    {"UsuarioID": 91, "EnfermedadID": 241},
    {"UsuarioID": 101, "EnfermedadID": 91},
    {"UsuarioID": 111, "EnfermedadID": 41},
    {"UsuarioID": 111, "EnfermedadID": 41},
    {"UsuarioID": 121, "EnfermedadID": 41},
    {"UsuarioID": 131, "EnfermedadID": 41},
    {"UsuarioID": 141, "EnfermedadID": 41},
    {"UsuarioID": 141, "EnfermedadID": 111},
    {"UsuarioID": 141, "EnfermedadID": 281},
    {"UsuarioID": 141, "EnfermedadID": 301},
    {"UsuarioID": 151, "EnfermedadID": 71},
    {"UsuarioID": 161, "EnfermedadID": 131},
    {"UsuarioID": 171, "EnfermedadID": 261},
    {"UsuarioID": 181, "EnfermedadID": 21},
    {"UsuarioID": 191, "EnfermedadID": 41}
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('enfermedades_usuarios', null, {});

  }
};