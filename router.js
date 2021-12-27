const router = require('express').Router();

/*IMPORTO ROUTERS */
const UsuarioRouter = require('./views/UsuarioRouter');
const AntecedenteFamiliarRouter = require('./views/AntecedenteFamiliarRouter');
const EnfermedadRouter = require('./views/EnfermedadRouter');
const EnfermedadUsuarioRouter = require('./views/EnfermedadUsuarioRouter');

/*RUTAS*/
router.use('/usuarios', UsuarioRouter);
router.use('/antecedentes_familiares', AntecedenteFamiliarRouter);
router.use('/enfermedades', EnfermedadRouter);
router.use('/enfermedades_usuarios', EnfermedadUsuarioRouter);

module.exports = router;