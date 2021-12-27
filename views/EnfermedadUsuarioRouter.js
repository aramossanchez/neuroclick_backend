const express = require('express');
const router = express.Router();

const EnfermedadUsuarioController = require('../controllers/EnfermedadUsuarioController');


router.get('/', EnfermedadUsuarioController.listadoCompleto);
router.get('/:id', EnfermedadUsuarioController.enfermedad_usuarioId);
router.get('/usuario/:id', EnfermedadUsuarioController.enfermedad_usuarioUsuarioId);
router.post('/', EnfermedadUsuarioController.nuevaEnfermedad_usuario);
router.put('/:id', EnfermedadUsuarioController.actualizarEnfermedad_usuario);
router.delete('/:id', EnfermedadUsuarioController.borrarEnfermedad_usuario);

module.exports = router;
