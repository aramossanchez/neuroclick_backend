'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('citas', [
    {"descripcion": "Cita para revisión de cadera.", "horario_cita": new Date("2022/01/20 10:00:00"), "UsuarioID": 1, "ProfesionalID": 3},
    {"descripcion": "Cita para revisión de percepción temporal.", "horario_cita": new Date("2022/01/20 11:00:00"), "UsuarioID": 1, "ProfesionalID": 5},
    {"descripcion": "Cita para revisión de gasto de la casa.", "horario_cita": new Date("2022/01/21 13:00:00"), "UsuarioID": 2, "ProfesionalID": 4},
    {"descripcion": "Cita para revisión de dicción en la lectura de un texto sencillo.", "horario_cita": new Date("2022/01/21 12:00:00"), "UsuarioID": 2, "ProfesionalID": 6},
    {"descripcion": "Cita para revisión de percepción espacial.", "horario_cita": new Date("2022/01/20 13:00:00"), "UsuarioID": 3, "ProfesionalID": 5},
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('citas', null, {});

  }
};