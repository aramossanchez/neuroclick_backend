const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');


// router.post('/login', UsuarioController.signIn);
// router.post('/registro', auth, UsuarioController.signUp);
router.get('/', UsuarioController.listadoCompleto);
router.get('/:id', UsuarioController.usuarioId);
router.post('/', UsuarioController.nuevoUsuario);
router.put('/:id', UsuarioController.actualizarUsuario);
router.delete('/:id', UsuarioController.borrarUsuario);

module.exports = router;
