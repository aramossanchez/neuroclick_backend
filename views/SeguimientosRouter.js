const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const SeguimientosController = require('../controllers/SeguimientosController');


router.get('/', auth, SeguimientosController.listadoCompleto);
router.get('/:id', auth, SeguimientosController.seguimientoId);
router.get('/usuario/:id', auth, SeguimientosController.seguimientoUsuarioId);
router.post('/', auth, SeguimientosController.nuevoSeguimiento);
router.put('/:id', auth, SeguimientosController.actualizarSeguimiento);
router.delete('/:id', auth, SeguimientosController.borrarSeguimiento);

module.exports = router;
