'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('antecedentes_familiares', [
    {"descripcion": "Su madre tiene problemas renales.", "UsuarioID": 1},
    {"descripcion": "Su padre tiene problemas cardiacos.", "UsuarioID": 11},
    {"descripcion": "Su tía materna tuvo cancer de colón.", "UsuarioID": 21},
    {"descripcion": "Su tío paterno tiene esquizofrenia paranoide.", "UsuarioID": 31},
    {"descripcion": "Su abuelo tuvo cancer de pulmón.", "UsuarioID": 41},
    {"descripcion": "Su padre tiene diabetes.", "UsuarioID": 51},
    {"descripcion": "Su padre murió por ictus.", "UsuarioID": 61},
    {"descripcion": "Su hermano tiene TEA.", "UsuarioID": 71},
    {"descripcion": "Su madre tiene problemas hepáticos.", "UsuarioID": 81},
    {"descripcion": "Su abuelo murió de cancer de próstata.", "UsuarioID": 91},
    {"descripcion": "Su madre tiene problemas cardiacos.", "UsuarioID": 101},
    {"descripcion": "Su padre murió de neumonía.", "UsuarioID": 111},
    {"descripcion": "Su hermano tuvo depresión y se suicidó.", "UsuarioID": 121},
    {"descripcion": "Su hermana tuvo anorexia.", "UsuarioID": 131},
    {"descripcion": "Su padre murió de un infarto.", "UsuarioID": 141},
    {"descripcion": "Su madre murió de un infarto.", "UsuarioID": 151},
    {"descripcion": "Su abuela sufrió depresión.", "UsuarioID": 161},
    {"descripcion": "Su padre tuvo depresión.", "UsuarioID": 171},
    {"descripcion": "Su tia paterna se suicidó.", "UsuarioID": 181},
    {"descripcion": "Su madre tiene diabetes.", "UsuarioID": 191},
    {"descripcion": "Su abuelo murió de cancer de pulmón.", "UsuarioID": 201},
    {"descripcion": "Su abuela murió por cancer de pancreas.", "UsuarioID": 211},
    {"descripcion": "Su hermano pequeño murió de leucemia.", "UsuarioID": 221},
    {"descripcion": "Su hermano tiene TOC.", "UsuarioID": 231},
    {"descripcion": "Su tia materna tiene esquizofrenia.", "UsuarioID": 241},
    {"descripcion": "Su padre tiene cancer de próstata.", "UsuarioID": 251},
    {"descripcion": "Su abuelo tuvo cancer de pulmón.", "UsuarioID": 261},
    {"descripcion": "Su abuela murió por cancer de pancreas.", "UsuarioID": 271},
    {"descripcion": "Su tio materno se suicidó.", "UsuarioID": 281},
    {"descripcion": "Su abuelo tiene problemas cardiacos.", "UsuarioID": 291},
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('antecedentes_familiares', null, {});

  }
};