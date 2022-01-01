const router = require('express').Router();

/*IMPORTO ROUTERS */
const UsuarioRouter = require('./views/UsuarioRouter');
const AntecedenteFamiliarRouter = require('./views/AntecedenteFamiliarRouter');
const EnfermedadRouter = require('./views/EnfermedadRouter');
const EnfermedadUsuarioRouter = require('./views/EnfermedadUsuarioRouter');
const MedicacionRouter = require('./views/MedicacionRouter');
const MedicacionUsuarioRouter = require('./views/MedicacionUsuarioRouter');
const ProfesionalRouter = require('./views/ProfesionalRouter');

/*RUTAS*/
router.use('/usuarios', UsuarioRouter);
router.use('/antecedentes_familiares', AntecedenteFamiliarRouter);
router.use('/enfermedades', EnfermedadRouter);
router.use('/enfermedades_usuarios', EnfermedadUsuarioRouter);
router.use('/medicaciones', MedicacionRouter);
router.use('/medicaciones_usuarios', MedicacionUsuarioRouter);
router.use('/profesionales', ProfesionalRouter);

module.exports = router;