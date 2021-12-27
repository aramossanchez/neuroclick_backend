const express = require('express');
const router = express.Router();

const EnfermedadController = require('../controllers/EnfermedadController');


router.get('/', EnfermedadController.listadoCompleto);
router.get('/:id', EnfermedadController.enfermedadId);
router.post('/', EnfermedadController.nuevaEnfermedad);
router.put('/:id', EnfermedadController.actualizarEnfermedad);
router.delete('/:id', EnfermedadController.borrarEnfermedad);

module.exports = router;
