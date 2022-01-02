const express = require('express');
const router = express.Router();

const PruebaHechaController = require('../controllers/PruebaHechaController');


router.get('/', PruebaHechaController.listadoCompleto);
router.get('/:id', PruebaHechaController.prueba_hechaId);
router.get('/usuario/:id', PruebaHechaController.prueba_hechaUsuarioId);
router.get('/profesional/:id', PruebaHechaController.prueba_hechaProfesionalId);
router.get('/prueba/:id', PruebaHechaController.prueba_hechaPruebaId);
router.post('/', PruebaHechaController.nuevaPrueba_hecha);
router.put('/:id', PruebaHechaController.actualizarPrueba_hecha);
router.delete('/:id', PruebaHechaController.borrarPrueba_hecha);

module.exports = router;
