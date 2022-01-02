'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pruebas', [
      {"descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 15 (bajo), de 16 a 30 (medio) y de 31 a 45 (bueno)."},
      {"descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 10 (bajo), de 11 a 20 (medio) y de 21 a 30 (bueno)."},
      {"descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 5 (bajo), de 6 a 10 (medio) y de 11 a 15 (bueno)."},
      {"descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 7 (bajo), de 8 a 14 (medio) y de 15 a 21 (bueno)."},
      {"descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 3 (bajo), de 4 a 6 (medio) y de 7 a 9 (bueno)."},
      {"descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 10 (bajo), de 11 a 20 (medio) y de 21 a 30 (bueno)."},
      {"descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 15 (bajo), de 16 a 30 (medio) y de 31 a 45 (bueno)."},
      {"descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 8 (bajo), de 9 a 16 (medio) y de 17 a 24 (bueno)."},
      {"descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 5 (bajo), de 6 a 10 (medio) y de 11 a 15 (bueno)."},
      {"descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 20 (bajo), de 21 a 40 (medio) y de 41 a 60 (bueno)."},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('pruebas', null, {});

  }
};