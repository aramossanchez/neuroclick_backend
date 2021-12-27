const router = require('express').Router();

/*IMPORTO ROUTERS */
const UsuarioRouter = require('./views/UsuarioRouter');
const AntecedenteFamiliarRouter = require('./views/AntecedenteFamiliarRouter');
const EnfermedadRouter = require('./views/EnfermedadRouter');

/*RUTAS*/
router.use('/usuarios', UsuarioRouter);
router.use('/antecedentes_familiares', AntecedenteFamiliarRouter);
router.use('/enfermedades', EnfermedadRouter);

module.exports = router;

//sequelize model:generate --name antecedente_familiar --attributes descripcion:string,UsuarioID:integer