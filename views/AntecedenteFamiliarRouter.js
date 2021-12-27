const express = require('express');
const router = express.Router();

const AntecedenteFamiliarController = require('../controllers/AntecedenteFamiliarController');


router.get('/', AntecedenteFamiliarController.listadoCompleto);
router.get('/:id', AntecedenteFamiliarController.antecedenteFamiliarId);
router.get('/usuario/:id', AntecedenteFamiliarController.antecedenteFamiliarUsuarioId);
router.post('/', AntecedenteFamiliarController.nuevoAntecedenteFamiliar);
router.put('/:id', AntecedenteFamiliarController.actualizarAntecedenteFamiliar);
router.delete('/:id', AntecedenteFamiliarController.borrarAntecedenteFamiliar);

module.exports = router;
