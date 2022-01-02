const express = require('express');
const router = express.Router();

const PruebaController = require('../controllers/PruebaController');


router.get('/', PruebaController.listadoCompleto);
router.get('/:id', PruebaController.pruebaId);
router.get('/profesional/:rol', PruebaController.pruebaProfesionalRol);
router.post('/', PruebaController.nuevaPrueba);
router.put('/:id', PruebaController.actualizarPrueba);
router.delete('/:id', PruebaController.borrarPrueba);

module.exports = router;
