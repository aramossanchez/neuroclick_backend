'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('antecedentes_familiares', [
    {"descripcion": "Su madre está malita. Su padre está malito. ", "UsuarioID": 1},
    {"descripcion": "Su padre está malito", "UsuarioID": 2},
    {"descripcion": "Su tía está malita", "UsuarioID": 3},
    {"descripcion": "Su tío está malito", "UsuarioID": 4},
    {"descripcion": "Su abuelo está malito", "UsuarioID": 5},
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('antecedentes_familiares', null, {});

  }
};