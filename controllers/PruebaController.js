const { pruebas } = require('../models/index');

const PruebaController = {};

//LISTADO DE TODAS LAS PRUEBAS

PruebaController.listadoCompleto = (req, res) => {

    pruebas.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar acceder a las pruebas."
            });
        });
};

//-------------------------------------------------------------------------------------

//OBTENER UNA UNICA PRUEBA, BUSCANDO POR ID
PruebaController.pruebaId = (req, res) => {

    const id = req.params.id;

    pruebas.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la prueba con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la prueba con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//OBTENER PRUEBAS, POR ROL DE PROFESIONAL
PruebaController.pruebaProfesionalRol = (req, res) => {

    const rol = req.params.rol;

    pruebas.findAll({where: { profesional: rol }})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la prueba con el profesional ${rol}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la prueba con el profesional " + rol
            });
        });

};

//-------------------------------------------------------------------------------------

//OBTENER PRUEBA, POR NOMBRE DE PRUEBA
PruebaController.pruebaNombre = (req, res) => {

    const nombre = req.params.nombre;

    pruebas.findAll({where: { nombre: nombre }})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la prueba con el nombre ${nombre}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la prueba con el nombre " + nombre
            });
        });

};

//-------------------------------------------------------------------------------------

//CREAR PRUEBA NUEVA
PruebaController.nuevaPrueba = (req, res) => {

    if (!req.body.nombre || !req.body.descripcion || !req.body.puntuacion_maxima || !req.body.profesional) {
        res.status(400).send({
          message: "No puede estar vacío ningún campo."
        });
        return;
    }
      
    const nuevaPrueba = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        puntuacion_maxima: req.body.puntuacion_maxima,
        profesional: req.body.profesional,
        createdAt: new Date(),
        updatedAt: new Date()
    };
      
    pruebas.create(nuevaPrueba)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar crear la prueba."
            });
        });

};

//-------------------------------------------------------------------------------------

//ACTUALIZAR PRUEBA, BUSCANDO POR ID
PruebaController.actualizarPrueba = (req, res) => {

        const id = req.params.id;

        pruebas.update(req.body, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "La prueba ha sido actualizada correctamente."
                });
              } else {
                res.send({
                  message: `No se ha podido actualizar la prueba con el id ${id}`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Ha surgido algún error al intentar actualizar la prueba con el id " + id + "."
              });
            });

};

//-------------------------------------------------------------------------------------

//BORRAR PRUEBA, BUSCANDO POR ID
PruebaController.borrarPrueba = (req, res) => {

    const id = req.params.id;

    pruebas.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `La prueba con id ${id} ha sido eliminada correctamente.`
                });
            } else {
                res.send({
                    message: `No se ha podido eliminar la prueba con id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar borrar la prueba con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

module.exports = PruebaController;