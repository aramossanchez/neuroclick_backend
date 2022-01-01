const express = require('express');
const router = express.Router();

const MedicacionController = require('../controllers/MedicacionController');


router.get('/', MedicacionController.listadoCompleto);
router.get('/:id', MedicacionController.medicacionId);
router.post('/', MedicacionController.nuevaMedicacion);
router.put('/:id', MedicacionController.actualizarMedicacion);
router.delete('/:id', MedicacionController.borrarMedicacion);

module.exports = router;
