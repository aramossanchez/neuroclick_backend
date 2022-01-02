const express = require('express');
const router = express.Router();

const PruebaValoracionController = require('../controllers/PruebaValoracionController');


router.get('/', PruebaValoracionController.listadoCompleto);
router.get('/:id', PruebaValoracionController.prueba_valoracionId);
router.get('/prueba/:id', PruebaValoracionController.prueba_valoracionPruebaId);
router.post('/', PruebaValoracionController.nuevaPrueba_valoracion);
router.put('/:id', PruebaValoracionController.actualizarPrueba_valoracion);
router.delete('/:id', PruebaValoracionController.borrarPrueba_valoracion);

module.exports = router;
