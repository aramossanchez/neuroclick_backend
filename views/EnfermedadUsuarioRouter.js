const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const EnfermedadUsuarioController = require('../controllers/EnfermedadUsuarioController');


router.get('/', auth, EnfermedadUsuarioController.listadoCompleto);
router.get('/:id', auth, EnfermedadUsuarioController.enfermedad_usuarioId);
router.get('/usuario/:id', auth, EnfermedadUsuarioController.enfermedad_usuarioUsuarioId);
router.post('/', auth, EnfermedadUsuarioController.nuevaEnfermedad_usuario);
router.put('/:id', auth, EnfermedadUsuarioController.actualizarEnfermedad_usuario);
router.delete('/:id', auth, EnfermedadUsuarioController.borrarEnfermedad_usuario);

module.exports = router;
