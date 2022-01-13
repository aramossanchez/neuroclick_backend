'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('antecedentes_familiares', [
    {"descripcion": "Su madre tiene problemas renales.", "UsuarioID": 1},
    {"descripcion": "Su padre tiene problemas cardiacos.", "UsuarioID": 2},
    {"descripcion": "Su tía materna tuvo cancer de colón.", "UsuarioID": 3},
    {"descripcion": "Su tío paterno tiene esquizofrenia paranoide.", "UsuarioID": 4},
    {"descripcion": "Su abuelo tuvo cancer de pulmón.", "UsuarioID": 5},
    {"descripcion": "Su padre tiene diabetes.", "UsuarioID": 6},
    {"descripcion": "Su padre murió por ictus.", "UsuarioID": 7},
    {"descripcion": "Su hermano tiene TEA.", "UsuarioID": 8},
    {"descripcion": "Su madre tiene problemas hepáticos.", "UsuarioID": 9},
    {"descripcion": "Su abuelo murió de cancer de próstata.", "UsuarioID": 10},
    {"descripcion": "Su madre tiene problemas cardiacos.", "UsuarioID": 11},
    {"descripcion": "Su padre murió de neumonía.", "UsuarioID": 12},
    {"descripcion": "Su hermano tuvo depresión y se suicidó.", "UsuarioID": 13},
    {"descripcion": "Su hermana tuvo anorexia.", "UsuarioID": 14},
    {"descripcion": "Su padre murió de un infarto.", "UsuarioID": 15},
    {"descripcion": "Su madre murió de un infarto.", "UsuarioID": 16},
    {"descripcion": "Su abuela sufrió depresión.", "UsuarioID": 17},
    {"descripcion": "Su padre tuvo depresión.", "UsuarioID": 18},
    {"descripcion": "Su tia paterna se suicidó.", "UsuarioID": 19},
    {"descripcion": "Su madre tiene diabetes.", "UsuarioID": 20},
    {"descripcion": "Su abuelo murió de cancer de pulmón.", "UsuarioID": 21},
    {"descripcion": "Su abuela murió por cancer de pancreas.", "UsuarioID": 22},
    {"descripcion": "Su hermano pequeño murió de leucemia.", "UsuarioID": 23},
    {"descripcion": "Su hermano tiene TOC.", "UsuarioID": 24},
    {"descripcion": "Su tia materna tiene esquizofrenia.", "UsuarioID": 25},
    {"descripcion": "Su padre tiene cancer de próstata.", "UsuarioID": 26},
    {"descripcion": "Su abuelo tuvo cancer de pulmón.", "UsuarioID": 27},
    {"descripcion": "Su abuela murió por cancer de pancreas.", "UsuarioID": 28},
    {"descripcion": "Su tio materno se suicidó.", "UsuarioID": 29},
    {"descripcion": "Su abuelo tiene problemas cardiacos.", "UsuarioID": 30},
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('antecedentes_familiares', null, {});

  }
};