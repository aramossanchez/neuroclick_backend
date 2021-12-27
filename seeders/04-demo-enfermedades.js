'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('enfermedades', [
    {"nombre": "Ántrax"},
    {"nombre": "Asma"},
    {"nombre": "Autismo"},
    {"nombre": "Artritis"},
    {"nombre": "Cáncer"},
    {"nombre": "Clamidia"},
    {"nombre": "Culebrilla (herpes zóster)"},
    {"nombre": "Diabetes"},
    {"nombre": "Ébola"},
    {"nombre": "Enfermedad inflamatoria pélvica (EIP)"},
    {"nombre": "Enfermedad pulmonar obstructiva crónica"},
    {"nombre": "Covid"},
    {"nombre": "Epilepsia"},
    {"nombre": "Escarlatina"},
    {"nombre": "Estreptococo del grupo B"},
    {"nombre": "Gonorrhea"},
    {"nombre": "Hemofilia"},
    {"nombre": "Herpes genital"},
    {"nombre": "Gripe"},
    {"nombre": "Listeriosis"},
    {"nombre": "Meningitis"},
    {"nombre": "Neumonía"},
    {"nombre": "Paperas"},
    {"nombre": "Poliomielitis"},
    {"nombre": "Rabia"},
    {"nombre": "Rotavirus"},
    {"nombre": "Sífilis"},
    {"nombre": "Silicosis"},
    {"nombre": "Síndrome de Tourette"},
    {"nombre": "Tosferina"},
    {"nombre": "Tricomoniasis"},
    {"nombre": "Tuberculosis (TB)"},
    {"nombre": "Vaginosis bacteriana"},
    {"nombre": "VIH/Sida"},
    {"nombre": "Zika"},
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('enfermedades', null, {});

  }
};