'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('enfermedades_usuarios', [
    {"UsuarioID": 1, "EnfermedadID": 1},
    {"UsuarioID": 1, "EnfermedadID": 2},
    {"UsuarioID": 1, "EnfermedadID": 3},
    {"UsuarioID": 1, "EnfermedadID": 4},
    {"UsuarioID": 2, "EnfermedadID": 15},
    {"UsuarioID": 2, "EnfermedadID": 18},
    {"UsuarioID": 3, "EnfermedadID": 21},
    {"UsuarioID": 3, "EnfermedadID": 11},
    {"UsuarioID": 3, "EnfermedadID": 12},
    {"UsuarioID": 3, "EnfermedadID": 13},
    {"UsuarioID": 3, "EnfermedadID": 14},
    {"UsuarioID": 3, "EnfermedadID": 15},
    {"UsuarioID": 6, "EnfermedadID": 1},
    {"UsuarioID": 6, "EnfermedadID": 5},
    {"UsuarioID": 6, "EnfermedadID": 7},
    {"UsuarioID": 9, "EnfermedadID": 31},
    {"UsuarioID": 9, "EnfermedadID": 21},
    {"UsuarioID": 9, "EnfermedadID": 11},
    {"UsuarioID": 9, "EnfermedadID": 12},
    {"UsuarioID": 9, "EnfermedadID": 19},
    {"UsuarioID": 11, "EnfermedadID": 8},
    {"UsuarioID": 11, "EnfermedadID": 5},
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('enfermedades_usuarios', null, {});

  }
};