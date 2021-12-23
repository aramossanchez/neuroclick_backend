const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');


// router.post('/login', UsuarioController.signIn);
// router.post('/registro', auth, UsuarioController.signUp);
router.get('/', UsuarioController.listadoCompleto);
// router.get('/:id', auth, UsuarioController.getById);
// router.put('/:id', auth, UsuarioController.update);
// router.delete('/', auth, UsuarioController.deleteAll);
// router.delete('/:id', auth, UsuarioController.delete);

module.exports = router;
