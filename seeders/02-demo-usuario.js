'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
    /* 1 - 10 */
    {"nombre": "Francisco Javier", "apellidos": "Suarez Hastión", "direccion": "Calle Parla, número 13, piso 2, puerta C, Gandía, Valencia, 46125", "telefono_usuario": 658745210, "pension": 1500, "persona_contacto": "Francisca Robles San Juan", "telefono_contacto": 611222555, "fecha_nacimiento": new Date(1970,2,12), "peso": 78, "estatura": 158},
    {"nombre": "Melinda", "apellidos": "Gonzalez Carrión", "direccion": "Calle Madrid, número 1, piso 7, puerta E, Sagunto, Valencia, 46458", "telefono_usuario": 666123000, "pension": 2000, "persona_contacto": "Julian Salcedo Alameda", "telefono_contacto": 655987562, "fecha_nacimiento": new Date(1960,7,13), "peso": 58, "estatura": 152},
    {"nombre": "Hugo", "apellidos": "González Gómez", "direccion": "Calle Leganés, número 3, piso 7, puerta A, Valencia, Valencia, 46002", "telefono_usuario": 621305874, "pension": 1250, "persona_contacto": "Javier Los Hernández Rodríguez", "telefono_contacto": 622333102, "fecha_nacimiento": new Date(1999,2,1), "peso": 65, "estatura": 180},
    {"nombre": "Lucas", "apellidos": "Rodríguez González", "direccion": "Calle Vallecas, número 23, piso 7, puerta 3, Paterna, Valencia, 46225", "telefono_usuario": 621587452, "pension": 1750, "persona_contacto": "Marcos López Martínez", "telefono_contacto": 611222222, "fecha_nacimiento": new Date(1975,10,5), "peso": 80, "estatura": 170},
    {"nombre": "Martín", "apellidos": "Fernández Díaz", "direccion": "Calle Fuenlabrada, número 121, piso 7, puerta F, Alboraya, Valencia, 46174", "telefono_usuario": 600000002, "pension": 1000, "persona_contacto": "Izan Sánchez Vargas", "telefono_contacto": 635215478, "fecha_nacimiento": new Date(1956,4,12), "peso": 78, "estatura": 175},
    {"nombre": "Daniel", "apellidos": "Díaz Fernández", "direccion": "Calle Fuencarral, número 43, piso 7, puerta 2, Requena, Valencia, 46022", "telefono_usuario": 632548123, "pension": 2100, "persona_contacto": "Diego Mora Castro", "telefono_contacto": 6227856, "fecha_nacimiento": new Date(1954,9,20), "peso": 59, "estatura": 150},
    {"nombre": "Mateo", "apellidos": "Pérez López", "direccion": "Calle Vicálvaro, número 6, piso 7, puerta 7, Torrent, Valencia, 46007", "telefono_usuario": 698525850, "pension": 2000, "persona_contacto": "Enzo Reyes Morales", "telefono_contacto": 633021410, "fecha_nacimiento": new Date(1949,11,2), "peso": 65, "estatura": 180},
    {"nombre": "Pablo", "apellidos": "Gómez Rodríguez", "direccion": "Calle Centro, número 72, piso 7, puerta B, Utiel, Valencia, 46111", "telefono_usuario": 621548752, "pension": 1200, "persona_contacto": "Marco Calderón Pérez", "telefono_contacto": 600325523, "fecha_nacimiento": new Date(1988,10,4), "peso": 60, "estatura": 165},
    {"nombre": "Alejandro", "apellidos": "Lucero Romero", "direccion": "Calle Aranjuez, número 17, piso 7, puerta C, Mislata, Valencia, 46099", "telefono_usuario": 632000588, "pension": 1100, "persona_contacto": "Sergio Ramírez Reyes", "telefono_contacto": 611254652, "fecha_nacimiento": new Date(1945,12,9), "peso": 67, "estatura": 180},
    {"nombre": "Leo", "apellidos": "Sosa Sánchez", "direccion": "Calle Alcalá, número 8, piso 7, puerta C, Manises, Valencia, 46119", "telefono_usuario": 601458753, "pension": 1000, "persona_contacto": "Alex Rivera Cruz", "telefono_contacto": 678541253, "fecha_nacimiento": new Date(1981,1,19), "peso": 80, "estatura": 149},
    /* 11 - 20 */
    {"nombre": "Lucía", "apellidos": "Quiroga Ruiz", "direccion": "Calle Valencia, número 93, piso 7, puerta A, Madrid, Madrid, 28002", "telefono_usuario": 632000555, "pension": 1500, "persona_contacto": "Miguel Mejía Rivas", "telefono_contacto": 601254850, "fecha_nacimiento": new Date(1974,5,30), "peso": 85, "estatura": 180},
    {"nombre": "Sofía", "apellidos": "Martínez Pérez", "direccion": "Calle Villafranca, número 12, piso 7, puerta D, Alcalá de Henares, Madrid, 28088", "telefono_usuario": 655555847, "pension": 1200, "persona_contacto": "Alma Ramos Gómez", "telefono_contacto": 632054021, "fecha_nacimiento": new Date(1974,12,12), "peso": 75, "estatura": 190},
    {"nombre": "Martina", "apellidos": "Calama Rojas", "direccion": "Calle Torrejón, número 35 , piso 7, puerta A, Móstoles, Madrid, 28111", "telefono_usuario": 615477789, "pension": 1300, "persona_contacto": "Vega Escobar Orellana", "telefono_contacto": 630125541, "fecha_nacimiento": new Date(1950,11,14), "peso": 58, "estatura": 178},
    {"nombre": "María", "apellidos": "Ovalle Cortés", "direccion": "Calle Inframundo, número 75, piso 7, puerta F, Fuenlabrada, Madrid, 28444", "telefono_usuario": 602158966, "pension": 1200, "persona_contacto": "Ana Romero Aguilar", "telefono_contacto": 622013521, "fecha_nacimiento": new Date(1990,10,17), "peso": 69, "estatura": 185},
    {"nombre": "Paula", "apellidos": "Los Andes González", "direccion": "Calle Alicante, número 5, piso 7, puerta 4, Alcorcón, Madrid, 28258", "telefono_usuario": 666666666, "pension": 1500, "persona_contacto": "Olivia Alvarado Zambrano", "telefono_contacto": 603201201, "fecha_nacimiento": new Date(1997,10,21), "peso": 65, "estatura": 174},
    {"nombre": "Julia", "apellidos": "Valparaíso Muñoz", "direccion": "Calle Castellón, número 102, piso 7, puerta A, Parla, Madrid, 28777", "telefono_usuario": 632000147, "pension": 1600, "persona_contacto": "Lola Cedeño López", "telefono_contacto": 611023328, "fecha_nacimiento": new Date(1974,5,25), "peso": 75, "estatura": 169},
    {"nombre": "Emma", "apellidos": "Viña del Mar González", "direccion": "Calle ALbacete, número 133, piso 7, puerta E, Leganés, Madrid, 28102", "telefono_usuario": 674101478, "pension": 1700, "persona_contacto": "Chloe Zabala Jimenez", "telefono_contacto": 600200100, "fecha_nacimiento": new Date(1949,4,5), "peso": 88, "estatura": 196},
    {"nombre": "Valeria", "apellidos": "Peñaflor Leiva", "direccion": "Calle Villamalea, número 57, piso 7, puerta 6, Getafe, Madrid, 28091", "telefono_usuario": 666598789, "pension": 1700, "persona_contacto": "Elena García Castillo", "telefono_contacto": 600357820, "fecha_nacimiento": new Date(1980,0,7), "peso": 102, "estatura": 186},
    {"nombre": "Daniela", "apellidos": "Ñuñoa Muñoz", "direccion": "Calle Roda, número 46, piso 7, puerta A, Alcobendas, Madrid, 28874", "telefono_usuario": 623568978, "pension": 1250, "persona_contacto": "Aitana Vera Flores", "telefono_contacto": 611487110, "fecha_nacimiento": new Date(1975,11,20), "peso": 58, "estatura": 174},
    {"nombre": "Alba", "apellidos": "Pucón Muñoz", "direccion": "Calle Rojas, número 28, piso 7, puerta C, Aranjuez, Madrid, 28239", "telefono_usuario": 654789123, "pension": 1600, "persona_contacto": "Lara Bermudez León", "telefono_contacto": 600210350, "fecha_nacimiento": new Date(1967,4,5), "peso": 90, "estatura": 179},
    /* 21 - 30 */
    {"nombre": "Alejandro", "apellidos": "Lautaro Castro", "direccion": "Calle Galicia, número 10, piso 7, puerta D, Albacete, Albacete, 02001", "telefono_usuario": 612300058, "pension": 1000, "persona_contacto": "Gonzalo Jaramillo Mendoza", "telefono_contacto": 699521902, "fecha_nacimiento": new Date(1981,3,29), "peso": 74, "estatura": 180},
    {"nombre": "Emma", "apellidos": "Linares Muñoz", "direccion": "Calle Lugo, número 12, piso 7, puerta E, Almansa, Albacete, 02058", "telefono_usuario": 612548759, "pension": 1300, "persona_contacto": "Oliver Villavicencio García", "telefono_contacto": 612850777, "fecha_nacimiento": new Date(1948,7,11), "peso": 58, "estatura": 185},
    {"nombre": "Valeria", "apellidos": "Villarrica Muñoz", "direccion": "Calle Barcelona, número 76, piso 7, puerta 2, Hellín, Albacete, 02874", "telefono_usuario": 632598632, "pension": 1400, "persona_contacto": "Nicolás Pérez Gómez", "telefono_contacto": 652741023, "fecha_nacimiento": new Date(1971,11,7), "peso": 98, "estatura": 160},
    {"nombre": "Daniela", "apellidos": "La Unión Martínez", "direccion": "Calle Cataluña, número 77, piso 7, puerta 1, Villamalea, Albacete, 02875", "telefono_usuario": 632541458, "pension": 1450, "persona_contacto": "Saul Romero Alonso", "telefono_contacto": 655021017, "fecha_nacimiento": new Date(1952,8,8), "peso": 67, "estatura": 155},
    {"nombre": "Alba", "apellidos": "Valdivia Muñoz", "direccion": "Calle Zaragoza, número 85, piso 7, puerta 5, Villarrobledo, Albacete, 02111", "telefono_usuario": 654879650, "pension": 1560, "persona_contacto": "Adam Gutierrez Navarro", "telefono_contacto": 631200850, "fecha_nacimiento": new Date(1949,11,6), "peso": 74, "estatura": 140},
    {"nombre": "Sara", "apellidos": "Ancud Barría", "direccion": "Calle Viacrucis, número 225, piso 7, puerta 3, Alcaraz, Albacete, 02330", "telefono_usuario": 632222222, "pension": 1200, "persona_contacto": "Ivan Torres Dominguez", "telefono_contacto": 699852000, "fecha_nacimiento": new Date(1935,11,12), "peso": 71, "estatura": 178},
    {"nombre": "Carla", "apellidos": "Castro Cárdenas", "direccion": "Calle Sevilla, número 20, piso 7, puerta A, Ayna, Albacete, 02369", "telefono_usuario": 658796522, "pension": 1350, "persona_contacto": "Dario Vázquez Ramos", "telefono_contacto": 633021777, "fecha_nacimiento": new Date(1972,10,20), "peso": 59, "estatura": 190},
    {"nombre": "Carmen", "apellidos": "Punta Arenas	Díaz", "direccion": "Calle Granada, número 13, piso 7, puerta D, Yeste, Albacete, 02555", "telefono_usuario": 645888999, "pension": 1800, "persona_contacto": "Saul Hernandez López", "telefono_contacto": 666985201, "fecha_nacimiento": new Date(1947,6,27), "peso": 64, "estatura": 172},
    {"nombre": "Noa", "apellidos": "Flores Rojas", "direccion": "Calle Málaga, número 75, piso 7, puerta C, La Roda, Albacete, 02007", "telefono_usuario": 611452036, "pension": 1500, "persona_contacto": "Inés Cruz Flores", "telefono_contacto": 633210000, "fecha_nacimiento": new Date(1970,6,27), "peso": 62, "estatura": 169},
    {"nombre": "Claudia", "apellidos": "Vázquez Ramos", "direccion": "Calle Segovia, número 48, piso 7, puerta B, Alcalá del Jucar, Albacete, 02773", "telefono_usuario": 666988744, "pension": 1700, "persona_contacto": "Armando Casas Rojas ", "telefono_contacto": 600123456, "fecha_nacimiento": new Date(1969,1,26), "peso": 70, "estatura": 165},
], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};