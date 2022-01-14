'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('antecedentes_familiares', [
    {"descripcion": "Su madre tiene problemas renales.", "UsuarioID": 5},
    {"descripcion": "Su padre tiene problemas cardiacos.", "UsuarioID": 15},
    {"descripcion": "Su tía materna tuvo cancer de colón.", "UsuarioID": 25},
    {"descripcion": "Su tío paterno tiene esquizofrenia paranoide.", "UsuarioID": 35},
    {"descripcion": "Su abuelo tuvo cancer de pulmón.", "UsuarioID": 45},
    {"descripcion": "Su padre tiene diabetes.", "UsuarioID": 55},
    {"descripcion": "Su padre murió por ictus.", "UsuarioID": 65},
    {"descripcion": "Su hermano tiene TEA.", "UsuarioID": 75},
    {"descripcion": "Su madre tiene problemas hepáticos.", "UsuarioID": 85},
    {"descripcion": "Su abuelo murió de cancer de próstata.", "UsuarioID": 95},
    {"descripcion": "Su madre tiene problemas cardiacos.", "UsuarioID": 105},
    {"descripcion": "Su padre murió de neumonía.", "UsuarioID": 115},
    {"descripcion": "Su hermano tuvo depresión y se suicidó.", "UsuarioID": 125},
    {"descripcion": "Su hermana tuvo anorexia.", "UsuarioID": 135},
    {"descripcion": "Su padre murió de un infarto.", "UsuarioID": 145},
    {"descripcion": "Su madre murió de un infarto.", "UsuarioID": 155},
    {"descripcion": "Su abuela sufrió depresión.", "UsuarioID": 165},
    {"descripcion": "Su padre tuvo depresión.", "UsuarioID": 175},
    {"descripcion": "Su tia paterna se suicidó.", "UsuarioID": 185},
    {"descripcion": "Su madre tiene diabetes.", "UsuarioID": 195},
    {"descripcion": "Su abuelo murió de cancer de pulmón.", "UsuarioID": 205},
    {"descripcion": "Su abuela murió por cancer de pancreas.", "UsuarioID": 215},
    {"descripcion": "Su hermano pequeño murió de leucemia.", "UsuarioID": 225},
    {"descripcion": "Su hermano tiene TOC.", "UsuarioID": 235},
    {"descripcion": "Su tia materna tiene esquizofrenia.", "UsuarioID": 245},
    {"descripcion": "Su padre tiene cancer de próstata.", "UsuarioID": 255},
    {"descripcion": "Su abuelo tuvo cancer de pulmón.", "UsuarioID": 265},
    {"descripcion": "Su abuela murió por cancer de pancreas.", "UsuarioID": 275},
    {"descripcion": "Su tio materno se suicidó.", "UsuarioID": 285},
    {"descripcion": "Su abuelo tiene problemas cardiacos.", "UsuarioID": 295},
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('antecedentes_familiares', null, {});

  }
};