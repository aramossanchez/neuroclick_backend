'use strict';

const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('profesionales', [
    {"correo_electronico": "armando@neuroclick.com", "clave_acceso":bcrypt.hashSync("12345678", Number.parseInt(authConfig.rounds)), "nombre": "Armando", "apellidos": "Ramos Sánchez", "direccion": "Calle Toledo, número 6, piso 1, puerta C", "telefono_contacto": "608806608", "rol": "admin"},
    {"correo_electronico": "rocio@neuroclick.com", "clave_acceso":bcrypt.hashSync("87654321", Number.parseInt(authConfig.rounds)), "nombre": "Rocío", "apellidos": "San Juan Montero", "direccion": "Calle Juicio, número 17, piso 7, puerta 4", "telefono_contacto": "655203203", "rol": "administracion"},
    {"correo_electronico": "joseramon@neuroclick.com", "clave_acceso":bcrypt.hashSync("12457896", Number.parseInt(authConfig.rounds)), "nombre": "Jose Ramón", "apellidos": "García Iglesias", "direccion": "Calle Getafe, número 81, piso 5, puerta E", "telefono_contacto": "654125000", "rol": "fisioterapia"},
    {"correo_electronico": "sandra@neuroclick.com", "clave_acceso":bcrypt.hashSync("32659812", Number.parseInt(authConfig.rounds)), "nombre": "Sandra", "apellidos": "Santa Fernandez", "direccion": "Calle Segovia, número 21, piso 2, puerta 3", "telefono_contacto": "612548744", "rol": "terapiaocupacional"},
    {"correo_electronico": "carmina@neuroclick.com", "clave_acceso":bcrypt.hashSync("mdeurikflo", Number.parseInt(authConfig.rounds)), "nombre": "Carmina", "apellidos": "Zamora Fernandez", "direccion": "Calle Villamalea, número 26, piso 1, puerta B", "telefono_contacto": "612357806", "rol": "neuropsicologia"},
    {"correo_electronico": "vega@neuroclick.com", "clave_acceso":bcrypt.hashSync("za25de8741a", Number.parseInt(authConfig.rounds)), "nombre": "Vega", "apellidos": "Maestre Sarrión", "direccion": "Calle General, número 48, piso 4, puerta A", "telefono_contacto": "611023859", "rol": "logopedia"},
  ], {});
},

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('profesionales', null, {});

  }
};