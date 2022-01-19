const { citas } = require('../models/index');
const { profesionales } = require('../models/index');

const CitaController = {};

//LISTADO DE TODAS LAS CITAS

CitaController.listadoCompleto = (req, res) => {

    citas.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar acceder a las citas."
            });
        });
};

//-------------------------------------------------------------------------------------

//OBTENER UNA UNICA CITA, BUSCANDO POR ID
CitaController.citaId = (req, res) => {

    const id = req.params.id;

    citas.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la cita con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la cita con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//OBTENER CITAS, POR ID DE USUARIO
CitaController.citaUsuarioID = (req, res) => {

    const id = req.params.id;
    
    citas.findAll({where: { UsuarioID: id }, include: [{model:profesionales}]})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la cita con el id de usuario ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la cita con el id de usuario " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//OBTENER CITAS, POR ID DE PROFESIONAL
CitaController.citaProfesionalID = (req, res) => {

    const id = req.params.id;

    citas.findAll({where: { ProfesionalID: id }})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la cita con el id de profesinal ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la cita con el id de profesinal " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//CREAR CITA NUEVA
CitaController.nuevaCita = (req, res) => {

    if (!req.body.descripcion || !req.body.horario_cita || !req.body.UsuarioID || !req.body.ProfesionalID) {
        res.status(400).send({
          message: "No puede estar vacío ningún campo."
        });
        return;
    }
      
    const nuevaCita = {
        descripcion: req.body.descripcion,
        horario_cita: new Date(req.body.horario_cita),
        UsuarioID: req.body.UsuarioID,
        ProfesionalID: req.body.ProfesionalID,
        createdAt: new Date(),
        updatedAt: new Date()
    };
      
    citas.create(nuevaCita)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar crear la cita."
            });
        });

};

//-------------------------------------------------------------------------------------

//ACTUALIZAR CITA, BUSCANDO POR ID
CitaController.actualizarCita = (req, res) => {

        const id = req.params.id;

        citas.update(req.body, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "La cita ha sido actualizada correctamente."
                });
              } else {
                res.send({
                  message: `No se ha podido actualizar la cita con el id ${id}`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Ha surgido algún error al intentar actualizar la cita con el id " + id + "."
              });
            });

};

//-------------------------------------------------------------------------------------

//BORRAR CITA, BUSCANDO POR ID
CitaController.borrarCita = (req, res) => {

    const id = req.params.id;

    citas.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `La cita con id ${id} ha sido eliminada correctamente.`
                });
            } else {
                res.send({
                    message: `No se ha podido eliminar la cita con id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar borrar la cita con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

module.exports = CitaController;