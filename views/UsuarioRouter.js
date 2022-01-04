const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const UsuarioController = require('../controllers/UsuarioController');

router.get('/', auth, UsuarioController.listadoCompleto);
router.get('/:id', auth, UsuarioController.usuarioId);
router.post('/', auth, UsuarioController.nuevoUsuario);
router.put('/:id', auth, UsuarioController.actualizarUsuario);
router.delete('/:id', auth, UsuarioController.borrarUsuario);

module.exports = router;
