const router = require('express').Router();

/*IMPORTO ROUTERS */
const UsuarioRouter = require('./views/UsuarioRouter');
const AntecedenteFamiliarRouter = require('./views/AntecedenteFamiliarRouter');
const EnfermedadRouter = require('./views/EnfermedadRouter');
const EnfermedadUsuarioRouter = require('./views/EnfermedadUsuarioRouter');
const MedicacionRouter = require('./views/MedicacionRouter');
const MedicacionUsuarioRouter = require('./views/MedicacionUsuarioRouter');
const ProfesionalRouter = require('./views/ProfesionalRouter');
const PruebaRouter = require('./views/PruebaRouter');
const ValoracionRouter = require('./views/ValoracionRouter');
const PruebaValoracionRouter = require('./views/PruebaValoracionRouter');
const PruebaHechaRouter = require('./views/PruebaHechaRouter');
const SeguimientoRouter = require('./views/SeguimientoRouter');
const CitaRouter = require('./views/CitaRouter');

/*RUTAS*/
router.use('/usuarios', UsuarioRouter);
router.use('/antecedentes_familiares', AntecedenteFamiliarRouter);
router.use('/enfermedades', EnfermedadRouter);
router.use('/enfermedades_usuarios', EnfermedadUsuarioRouter);
router.use('/medicaciones', MedicacionRouter);
router.use('/medicaciones_usuarios', MedicacionUsuarioRouter);
router.use('/profesionales', ProfesionalRouter);
router.use('/pruebas', PruebaRouter);
router.use('/valoraciones', ValoracionRouter);
router.use('/pruebas_valoraciones', PruebaValoracionRouter);
router.use('/pruebas_hechas', PruebaHechaRouter);
router.use('/seguimientos', SeguimientoRouter);
router.use('/citas', CitaRouter);

module.exports = router;