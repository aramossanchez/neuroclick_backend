'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
    /* 1 - 10 */
    {"nombre": "Francisco Javier", "apellidos": "Suarez Hastión", "direccion": "Calle Parla, número 13, piso 2, puerta C", "pension": 1500, "persona_contacto": "Francisca Robles San Juan", "telefono_contacto": 611222555, "fecha_nacimiento": "12/02/1970", "peso": 78, "estatura": 158},
    {"nombre": "Melinda", "apellidos": "Gonzalez Carrión", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Julian Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Hugo", "apellidos": "González Gómez", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Javier Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Lucas", "apellidos": "Rodríguez	González", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Marcos Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Martín", "apellidos": "Fernández Díaz", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Izan Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Daniel", "apellidos": "Díaz	Fernández", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Diefo Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Mateo", "apellidos": "Pérez	López", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Enzo Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Pablo", "apellidos": "Gómez	Rodríguez", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Marco Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Alejandro", "apellidos": "Lucero Romero", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Sergio Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Leo", "apellidos": "Sosa Sánchez", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Alex Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    /* 11 - 20 */
    {"nombre": "Lucía", "apellidos": "Quiroga Ruiz", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Miguel Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Sofía", "apellidos": "Martínez Pérez", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Alma Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Martina", "apellidos": "Calama Rojas", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Vega Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "María", "apellidos": "Ovalle Cortés", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Ana Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Paula", "apellidos": "Los Andes	González", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Olivia Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Julia", "apellidos": "Valparaíso Muñoz", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Lola Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Emma", "apellidos": "Viña del Mar González", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Chloe Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Valeria", "apellidos": "Peñaflor Leiva", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Elena Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Daniela", "apellidos": "Ñuñoa Muñoz", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Aitana Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Alba", "apellidos": "Pucón Muñoz", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Lara Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    /* 21 - 30 */
    {"nombre": "Alejandro", "apellidos": "Lautaro Castro", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Gonzalo Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Emma", "apellidos": "Linares Muñoz", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Oliver Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Valeria", "apellidos": "Villarrica Muñoz", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Nicolás Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Daniela", "apellidos": "La Unión Martínez", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Saul Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Alba", "apellidos": "Valdivia Muñoz", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Adam Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Sara", "apellidos": "Ancud Barría", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Ivan Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Carla", "apellidos": "Castro Cárdenas", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Dario Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Carmen", "apellidos": "Punta Arenas	Díaz", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Saul Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Noa", "apellidos": "Flores Rojas", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Inés Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
    {"nombre": "Claudia", "apellidos": "Vázque Ramos", "direccion": "Calle Madrid, número 1, piso 7, puerta E", "pension": 2000, "persona_contacto": "Rocio Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": "13/07/1960", "peso": 58, "estatura": 152},
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};