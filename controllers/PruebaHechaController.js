const { pruebas_hechas } = require('../models/index');
const { usuario } = require('../models/index');
const { profesionales } = require('../models/index');
const { pruebas } = require('../models/index');

const PruebaHechaController = {};

//LISTADO DE TODAS LAS PRUEBAS_HECHAS

PruebaHechaController.listadoCompleto = (req, res) => {

    pruebas_hechas.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar acceder a las pruebas_hechas."
            });
        });
};

//-------------------------------------------------------------------------------------

//OBTENER UNA UNICA PRUEBA_HECHA, BUSCANDO POR ID
PruebaHechaController.prueba_hechaId = (req, res) => {

    const id = req.params.id;

    pruebas_hechas.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la prueba_hecha con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la prueba_hecha con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//OBTENER PRUEBAS_HECHAS, POR ID DE USUARIO
PruebaHechaController.prueba_hechaUsuarioId = (req, res) => {

    const id = req.params.id;

    pruebas_hechas.findAll({
        include: [{
            model: usuario,
            where: {id: id}
       },{model: pruebas}]})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la prueba_hecha con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la prueba_hecha con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//OBTENER PRUEBAS_HECHAS, POR ID DE PROFESIONAL
PruebaHechaController.prueba_hechaProfesionalId = (req, res) => {

    const id = req.params.id;

    pruebas_hechas.findAll({
        include: [{
            model: profesionales,
            where: {id: id}
       }]})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la prueba_hecha con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la prueba_hecha con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//OBTENER PRUEBAS_HECHAS, POR ID DE PRUEBA
PruebaHechaController.prueba_hechaPruebaId = (req, res) => {

    const id = req.params.id;

    pruebas_hechas.findAll({
        include: [{
            model: pruebas,
            where: {id: id}
        }],
        order: [
            ['id', 'DESC'],
        ],})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la prueba_hecha con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la prueba_hecha con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//OBTENER PRUEBAS_HECHAS, POR NOMBRE DE PRUEBA E ID DE USUARIO
PruebaHechaController.prueba_hechaPruebaNombreUsuarioID = (req, res) => {

    if (!req.body.id || !req.body.nombre) {
        res.status(400).send({
          message: "No puede estar vacío ningún campo."
        });
        return;
    }

    const id = req.body.id;
    const nombre = req.body.nombre;

    pruebas_hechas.findAll({
        include: [{
            model: pruebas,
            where: {nombre: nombre}
            },
            {
            model: usuario,
            where: {id: id}
            }
        ],
        order: [
            ['id', 'ASC'],
        ],})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la prueba_hecha con el nombre ${nombre}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la prueba_hecha con el nombre " + nombre
            });
        });

};

//-------------------------------------------------------------------------------------

//CREAR PRUEBA_HECHA NUEVA
PruebaHechaController.nuevaPrueba_hecha = (req, res) => {

    if (!req.body.puntuacion || !req.body.PruebaID || !req.body.UsuarioID || !req.body.ProfesionalID) {
        res.status(400).send({
          message: "No puede estar vacío ningún campo."
        });
        return;
    }
      
    const nuevaPrueba_hecha = {
        puntuacion: req.body.puntuacion,
        PruebaID: req.body.PruebaID,
        UsuarioID: req.body.UsuarioID,
        ProfesionalID: req.body.ProfesionalID,
        createdAt: new Date(),
        updatedAt: new Date()
    };
      
    pruebas_hechas.create(nuevaPrueba_hecha)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar crear la prueba_hecha."
            });
        });

};

//-------------------------------------------------------------------------------------

//ACTUALIZAR PRUEBA_HECHA, BUSCANDO POR ID
PruebaHechaController.actualizarPrueba_hecha = (req, res) => {

        const id = req.params.id;

        pruebas_hechas.update(req.body, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "La prueba_hecha ha sido actualizada correctamente."
                });
              } else {
                res.send({
                  message: `No se ha podido actualizar la prueba_hecha con el id ${id}`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Ha surgido algún error al intentar actualizar la prueba_hecha con el id " + id + "."
              });
            });

};

//-------------------------------------------------------------------------------------

//BORRAR PRUEBA_HECHA, BUSCANDO POR ID
PruebaHechaController.borrarPrueba_hecha = (req, res) => {

    const id = req.params.id;

    pruebas_hechas.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `La prueba_hecha con id ${id} ha sido eliminada correctamente.`
                });
            } else {
                res.send({
                    message: `No se ha podido eliminar la prueba_hecha con id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar borrar la prueba_hecha con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

module.exports = PruebaHechaController;