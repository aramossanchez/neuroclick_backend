const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const ProfesionalController = require('../controllers/ProfesionalController');


router.post('/login', ProfesionalController.login);
router.get('/', auth, ProfesionalController.listadoCompleto);
router.get('/:id', auth, ProfesionalController.profesionalId);
router.post('/', auth, ProfesionalController.nuevoProfesional);
router.put('/:id', auth, ProfesionalController.actualizarProfesional);
router.delete('/:id', auth, ProfesionalController.borrarProfesional);

module.exports = router;
