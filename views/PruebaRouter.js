const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const PruebaController = require('../controllers/PruebaController');


router.get('/', PruebaController.listadoCompleto);
router.get('/:id', auth, PruebaController.pruebaId);
router.get('/profesional/:rol', auth, PruebaController.pruebaProfesionalRol);
router.get('/nombre/:nombre', auth, PruebaController.pruebaNombre);
router.post('/', PruebaController.nuevaPrueba);
router.put('/:id', PruebaController.actualizarPrueba);
router.delete('/:id', PruebaController.borrarPrueba);

module.exports = router;
