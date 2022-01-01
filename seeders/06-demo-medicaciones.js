'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('medicaciones', [
    {"nombre": "Halothano"},
    {"nombre": "Ketamina"},
    {"nombre": "Tiopental"},
    {"nombre": "Bupivacaína"},
    {"nombre": "Lidocaína"},
    {"nombre": "Atropina"},
    {"nombre": "Diazepán"},
    {"nombre": "Prometazina"},
    {"nombre": "Ibuprofeno"},
    {"nombre": "Paracetamol"},
    {"nombre": "Codeína"},
    {"nombre": "Alopurinol"},
    {"nombre": "Cloroquina"},
    {"nombre": "Azatioprina"},
    {"nombre": "Metotrexato"},
    {"nombre": "Penicilamina"},
    {"nombre": "Sulfasalazina"},
    {"nombre": "Dexametasona"},
    {"nombre": "Hidrocortisona"},
    {"nombre": "Prednisolona"},
    {"nombre": "Carbamazepina"},
    {"nombre": "Fenitoína"},
    {"nombre": "Fenobarbital"},
    {"nombre": "Etosuximida"},
    {"nombre": "Levamisol"},
    {"nombre": "Clorpromazina"},
    {"nombre": "Flufenazina"},
    {"nombre": "Haloperidol"},
    {"nombre": "Amitriptilina"},
    {"nombre": "Fluoxetina"},
    {"nombre": "Beclometasona"},
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('medicaciones', null, {});

  }
};