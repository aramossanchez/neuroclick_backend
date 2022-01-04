const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const AntecedenteFamiliarController = require('../controllers/AntecedenteFamiliarController');


router.get('/', auth, AntecedenteFamiliarController.listadoCompleto);
router.get('/:id', auth, AntecedenteFamiliarController.antecedenteFamiliarId);
router.get('/usuario/:id', auth, AntecedenteFamiliarController.antecedenteFamiliarUsuarioId);
router.post('/', auth, AntecedenteFamiliarController.nuevoAntecedenteFamiliar);
router.put('/:id', auth, AntecedenteFamiliarController.actualizarAntecedenteFamiliar);
router.delete('/:id', auth, AntecedenteFamiliarController.borrarAntecedenteFamiliar);

module.exports = router;
