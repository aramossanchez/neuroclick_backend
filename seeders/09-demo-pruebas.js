'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pruebas', [
      {"nombre": "Prueba1", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 15 (bajo), de 16 a 30 (medio) y de 31 a 45 (bueno).", "puntuacion_maxima": 45, "profesional": "Fisioterapia"},
      {"nombre": "Prueba2", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 10 (bajo), de 11 a 20 (medio) y de 21 a 30 (bueno).", "puntuacion_maxima": 30, "profesional": "Fisioterapia"},
      {"nombre": "Prueba3", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 5 (bajo), de 6 a 10 (medio) y de 11 a 15 (bueno).", "puntuacion_maxima": 15, "profesional": "Fisioterapia"},
      {"nombre": "Prueba4", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 7 (bajo), de 8 a 14 (medio) y de 15 a 21 (bueno).", "puntuacion_maxima": 21, "profesional": "Terapia Ocupacional"},
      {"nombre": "Prueba5", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 3 (bajo), de 4 a 6 (medio) y de 7 a 9 (bueno).", "puntuacion_maxima": 9, "profesional": "Terapia Ocupacional"},
      {"nombre": "Prueba6", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 10 (bajo), de 11 a 20 (medio) y de 21 a 30 (bueno).", "puntuacion_maxima": 30, "profesional": "Terapia Ocupacional"},
      {"nombre": "Prueba7", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 15 (bajo), de 16 a 30 (medio) y de 31 a 45 (bueno).", "puntuacion_maxima": 45, "profesional": "Terapia Ocupacional"},
      {"nombre": "Prueba8", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 8 (bajo), de 9 a 16 (medio) y de 17 a 24 (bueno).", "puntuacion_maxima": 24, "profesional": "Neuropsicología"},
      {"nombre": "Prueba9", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 5 (bajo), de 6 a 10 (medio) y de 11 a 15 (bueno).", "puntuacion_maxima": 15, "profesional": "Neuropsicología"},
      {"nombre": "Prueba10", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 20 (bajo), de 21 a 40 (medio) y de 41 a 60 (bueno).", "puntuacion_maxima": 60, "profesional": "Logopedia"},
      {"nombre": "Prueba11", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 5 (bajo), de 6 a 10 (medio) y de 11 a 15 (bueno).", "puntuacion_maxima": 15, "profesional": "Logopedia"},
      {"nombre": "Prueba12", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 10 (bajo), de 11 a 20 (medio) y de 21 a 30 (bueno).", "puntuacion_maxima": 30, "profesional": "Logopedia"},
      {"nombre": "Prueba13", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 6 (bajo), de 7 a 12 (medio) y de 13 a 18 (bueno).", "puntuacion_maxima": 18, "profesional": "Fisioterapia"},
      {"nombre": "Prueba14", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 8 (bajo), de 9 a 16 (medio) y de 17 a 24 (bueno).", "puntuacion_maxima": 24, "profesional": "Neuropsicología"},
      {"nombre": "Prueba15", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 9 (bajo), de 10 a 18 (medio) y de 19 a 27 (bueno).", "puntuacion_maxima": 27, "profesional": "Terapia Ocupacional"},
      {"nombre": "Prueba16", "descripcion": "Esta prueba se valora de la siguiente manera: de 0 a 6 (bajo), de 7 a 12 (medio) y de 13 a 18 (bueno).", "puntuacion_maxima": 18, "profesional": "Neuropsicología"},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('pruebas', null, {});

  }
};