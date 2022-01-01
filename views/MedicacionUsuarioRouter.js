const express = require('express');
const router = express.Router();

const MedicacionUsuarioController = require('../controllers/MedicacionUsuarioController');


router.get('/', MedicacionUsuarioController.listadoCompleto);
router.get('/:id', MedicacionUsuarioController.medicacion_usuarioId);
router.get('/usuario/:id', MedicacionUsuarioController.medicacion_usuarioUsuarioId);
router.post('/', MedicacionUsuarioController.nuevaMedicacion_usuario);
router.put('/:id', MedicacionUsuarioController.actualizarMedicacion_usuario);
router.delete('/:id', MedicacionUsuarioController.borrarMedicacion_usuario);

module.exports = router;
