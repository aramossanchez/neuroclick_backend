'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('enfermedades_usuarios', [
    {"UsuarioID": 5, "EnfermedadID": 5},
    {"UsuarioID": 5, "EnfermedadID": 15},
    {"UsuarioID": 5, "EnfermedadID": 25},
    {"UsuarioID": 5, "EnfermedadID": 35},
    {"UsuarioID": 15, "EnfermedadID": 155},
    {"UsuarioID": 15, "EnfermedadID": 185},
    {"UsuarioID": 25, "EnfermedadID": 205},
    {"UsuarioID": 25, "EnfermedadID": 105},
    {"UsuarioID": 25, "EnfermedadID": 115},
    {"UsuarioID": 25, "EnfermedadID": 125},
    {"UsuarioID": 25, "EnfermedadID": 135},
    {"UsuarioID": 25, "EnfermedadID": 145},
    {"UsuarioID": 35, "EnfermedadID": 145},
    {"UsuarioID": 45, "EnfermedadID": 145},
    {"UsuarioID": 55, "EnfermedadID": 5},
    {"UsuarioID": 55, "EnfermedadID": 45},
    {"UsuarioID": 55, "EnfermedadID": 65},
    {"UsuarioID": 65, "EnfermedadID": 65},
    {"UsuarioID": 75, "EnfermedadID": 135},
    {"UsuarioID": 85, "EnfermedadID": 255},
    {"UsuarioID": 85, "EnfermedadID": 205},
    {"UsuarioID": 85, "EnfermedadID": 95},
    {"UsuarioID": 85, "EnfermedadID": 105},
    {"UsuarioID": 85, "EnfermedadID": 195},
    {"UsuarioID": 95, "EnfermedadID": 245},
    {"UsuarioID": 105, "EnfermedadID": 95},
    {"UsuarioID": 115, "EnfermedadID": 45},
    {"UsuarioID": 115, "EnfermedadID": 45},
    {"UsuarioID": 125, "EnfermedadID": 45},
    {"UsuarioID": 135, "EnfermedadID": 45},
    {"UsuarioID": 145, "EnfermedadID": 45},
    {"UsuarioID": 145, "EnfermedadID": 115},
    {"UsuarioID": 145, "EnfermedadID": 285},
    {"UsuarioID": 145, "EnfermedadID": 305},
    {"UsuarioID": 155, "EnfermedadID": 75},
    {"UsuarioID": 165, "EnfermedadID": 135},
    {"UsuarioID": 175, "EnfermedadID": 265},
    {"UsuarioID": 185, "EnfermedadID": 25},
    {"UsuarioID": 195, "EnfermedadID": 45}
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('enfermedades_usuarios', null, {});

  }
};