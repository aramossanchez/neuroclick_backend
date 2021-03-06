# NEUROCLICK (BACKEND)

## API CON LA QUE CONECTAR LA PARTE FRONTEND (https://github.com/aramossanchez/neuroclick_frontend) Y LA BASE DE DATOS DE LA APLICACI脫N 馃馃

![LOGO APLICACION](img/logo-login.png)

## APLICACI脫N PARA LA GESTI脫N DE UNA CL脥NICA DE NEUROREHABILITACI脫N 馃

Aplicaci贸n con la que gestionar los diferentes usuarios y profesionales de una cl铆nica de neurorehabiliaci贸n.
Entre las diferentes funciones que tiene la aplicaci贸n cabe destacar:
* Login en la aplicaci贸n.
* Existencia de diferentes roles dentro de la aplicaci贸n (admin, Administraci贸n, y profesionales encargados de los tratamientos a los usuarios).
* La posibilidad de dejar guardados los resultados de las pruebas estandarizadas realizadas al usuario, por cada tipo de profesional trabajando en la cl铆nica (Fisioterapia, Terapia Ocupacional, Neuropsicolog铆a y Logopedia).
* La posibilidad de que cualquier profesional (de los mencionados anteriormente) pueda acceder al hist贸rico de cada una de las pruebas realizadas a cualquier usuario.
* La limitaci贸n de crear nuevas pruebas solamente del mismo tipo de profesional logado en la aplicaci贸n.
* Solo los profesionales con perfil de Administraci贸n podr谩n editar los datos de los usuarios, as铆 como dar de alta a nuevos usuarios y profesionales, pero no tendr谩n acceso a las pruebas.
* El profesional con perfil de admin tendr谩 acceso a todas las tablas de la base de datos. Podr谩 crear registros nuevos y leer, modificar y borrar los registros ya existentes.

## TECNOLOG脥AS UTILIZADAS 馃敤
* express
* nodemon
* bcrypt
* cors
* jsonwebtoken
* mysql2
* sequelize

## REQUISITOS PARA HACERLO FUNCIONAR EN UN EQUIPO LOCAL 馃捇
* Es necesario tener instalado en el equipo **Nodejs**. Si no lo est谩, se puede descargar de su p谩gina oficial https://nodejs.org/
* Clonar el proyecto en nuestro equipo con git bash:
```
$git clone 'url-del-repositorio'
```
* Instalar todas las dependecias con el siguiente comando:
```
npm install
```
* Arrancamos el servidor con el siguiente comando:
```
npm run start
```

## URL DE DEPLOY 馃挜
https://ars-neuroclick.herokuapp.com/
