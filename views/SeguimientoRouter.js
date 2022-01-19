const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const SeguimientoController = require('../controllers/SeguimientoController');


router.get('/', auth, SeguimientoController.listadoCompleto);
router.get('/:id', auth, SeguimientoController.seguimientoId);
router.get('/usuario/:id', auth, SeguimientoController.seguimientoUsuarioId);
router.post('/', auth, SeguimientoController.nuevoSeguimiento);
router.put('/:id', auth, SeguimientoController.actualizarSeguimiento);
router.delete('/:id', auth, SeguimientoController.borrarSeguimiento);

module.exports = router;
