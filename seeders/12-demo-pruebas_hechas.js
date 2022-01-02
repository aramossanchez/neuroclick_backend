'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pruebas_hechas', [
    {"puntuacion": "3,2,5", "PruebaID": 3, "UsuarioID": 1, "ProfesionalID": 3},
    {"puntuacion": "6,2,7", "PruebaID": 4, "UsuarioID": 1, "ProfesionalID": 4},
    {"puntuacion": "0,2,4,3,4,0", "PruebaID": 8, "UsuarioID": 1, "ProfesionalID": 6},
    {"puntuacion": "2,1,0", "PruebaID": 5, "UsuarioID": 3, "ProfesionalID": 5},
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('pruebas_hechas', null, {});

  }
};