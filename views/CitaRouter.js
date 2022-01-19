const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const CitaController = require('../controllers/CitaController');


router.get('/', auth, CitaController.listadoCompleto);
router.get('/:id', auth, CitaController.citaId);
router.get('/usuario/:id', auth, CitaController.citaUsuarioID);
router.get('/profesional/:id', auth, CitaController.citaProfesionalID);
router.post('/', CitaController.nuevaCita);
router.put('/:id', CitaController.actualizarCita);
router.delete('/:id', CitaController.borrarCita);

module.exports = router;
