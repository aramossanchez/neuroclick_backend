const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const MedicacionUsuarioController = require('../controllers/MedicacionUsuarioController');


router.get('/', auth, MedicacionUsuarioController.listadoCompleto);
router.get('/:id', auth, MedicacionUsuarioController.medicacion_usuarioId);
router.get('/usuario/:id', auth, MedicacionUsuarioController.medicacion_usuarioUsuarioId);
router.post('/', auth, MedicacionUsuarioController.nuevaMedicacion_usuario);
router.put('/:id', auth, MedicacionUsuarioController.actualizarMedicacion_usuario);
router.delete('/:id', auth, MedicacionUsuarioController.borrarMedicacion_usuario);

module.exports = router;
