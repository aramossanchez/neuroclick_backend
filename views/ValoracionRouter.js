const express = require('express');
const router = express.Router();

const ValoracionController = require('../controllers/ValoracionController');


router.get('/', ValoracionController.listadoCompleto);
router.get('/:id', ValoracionController.valoracionId);
router.post('/', ValoracionController.nuevaValoracion);
router.put('/:id', ValoracionController.actualizarValoracion);
router.delete('/:id', ValoracionController.borrarValoracion);

module.exports = router;
