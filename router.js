const router = require('express').Router();

/*IMPORTO ROUTERS */
const UsuarioRouter = require('./views/UsuarioRouter');

/*RUTAS*/
router.use('/usuarios', UsuarioRouter); 

module.exports = router;