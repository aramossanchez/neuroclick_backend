const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const ProfesionalController = require('../controllers/ProfesionalController');


router.post('/login', ProfesionalController.login);
router.get('/', ProfesionalController.listadoCompleto);
router.get('/:id', ProfesionalController.profesionalId);
router.post('/', ProfesionalController.nuevoProfesional);
router.put('/:id', ProfesionalController.actualizarProfesional);
router.delete('/:id', ProfesionalController.borrarProfesional);

module.exports = router;
