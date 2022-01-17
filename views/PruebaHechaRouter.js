const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const PruebaHechaController = require('../controllers/PruebaHechaController');


router.get('/', PruebaHechaController.listadoCompleto);
router.get('/:id', PruebaHechaController.prueba_hechaId);
router.get('/usuario/:id', PruebaHechaController.prueba_hechaUsuarioId);
router.get('/profesional/:id', PruebaHechaController.prueba_hechaProfesionalId);
router.get('/prueba/:id', auth, PruebaHechaController.prueba_hechaPruebaId);
router.post('/prueba/nombre/id', auth, PruebaHechaController.prueba_hechaPruebaNombreUsuarioID);
router.post('/', auth, PruebaHechaController.nuevaPrueba_hecha);
router.put('/:id', PruebaHechaController.actualizarPrueba_hecha);
router.delete('/:id', PruebaHechaController.borrarPrueba_hecha);

module.exports = router;
