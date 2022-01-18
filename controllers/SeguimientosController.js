const { seguimientos } = require('../models/index');
const { usuario } = require('../models/index');
const { profesionales } = require('../models/index');

const SeguimientosController = {};

//LISTADO DE TODOS LOS SEGUIMIENTOS

SeguimientosController.listadoCompleto = (req, res) => {

    seguimientos.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar acceder a los seguimientos."
            });
        });
};

//-------------------------------------------------------------------------------------

//OBTENER UN UNICO SEGUIMIENTO, BUSCANDO POR ID
SeguimientosController.seguimientoId = (req, res) => {

    const id = req.params.id;

    seguimientos.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el seguimiento con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder al seguimiento con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//OBTENER SEGUIMIENTOS POR ID DE USUARIO
SeguimientosController.seguimientoUsuarioId = (req, res) => {

    const id = req.params.id;

    seguimientos.findAll({
        include: [{
            model: usuario,
            where: {id: id}
        },{model:profesionales}],
        order: [
            ['id', 'DESC'],
        ],})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el seguimiento con el id de usuario ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder al seguimiento con el id de usuario " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//CREAR SEGUIMIENTO NUEVO
SeguimientosController.nuevoSeguimiento = (req, res) => {

    if (!req.body.descripcion || !req.body.UsuarioID || !req.body.ProfesionalID) {
        res.status(400).send({
          message: "No puede estar vacío ningún campo."
        });
        return;
    }
      
    const nuevoSeguimiento = {
        descripcion: req.body.descripcion,
        UsuarioID: req.body.UsuarioID,
        ProfesionalID: req.body.ProfesionalID,
        createdAt: new Date(),
        updatedAt: new Date()
    };
      
    seguimientos.create(nuevoSeguimiento)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar crear el seguimiento."
            });
        });

};

//-------------------------------------------------------------------------------------

//ACTUALIZAR SEGUIMIENTO, BUSCANDO POR ID
SeguimientosController.actualizarSeguimiento = (req, res) => {

        const id = req.params.id;

        seguimientos.update(req.body, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "El seguimiento ha sido actualizado correctamente."
                });
              } else {
                res.send({
                  message: `No se ha podido actualizar el seguimiento con el id ${id}`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Ha surgido algún error al intentar actualizar el seguimiento con el id " + id + "."
              });
            });

};

//-------------------------------------------------------------------------------------

//BORRAR SEGUIMIENTO, BUSCANDO POR ID
SeguimientosController.borrarSeguimiento = (req, res) => {

    const id = req.params.id;

    seguimientos.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `El seguimiento con id ${id} ha sido eliminado correctamente.`
                });
            } else {
                res.send({
                    message: `No se ha podido eliminar el seguimiento con id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar borrar el seguimiento con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

module.exports = SeguimientosController;