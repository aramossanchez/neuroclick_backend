const { pruebas_valoraciones } = require('../models/index');
const { pruebas } = require('../models/index');

const PruebaValoracionController = {};

//LISTADO DE TODAS LAS PRUEBAS_VALORACIONES

PruebaValoracionController.listadoCompleto = (req, res) => {

    pruebas_valoraciones.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar acceder a las pruebas_valoraciones."
            });
        });
};

//-------------------------------------------------------------------------------------

//OBTENER UNA UNICA PRUEBA_VALORACION, BUSCANDO POR ID
PruebaValoracionController.prueba_valoracionId = (req, res) => {

    const id = req.params.id;

    pruebas_valoraciones.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la prueba_valoracion con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la prueba_valoracion con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//OBTENER PRUEBAS_VALORACIONES, POR ID DE PRUEBA
PruebaValoracionController.prueba_valoracionPruebaId = (req, res) => {

    const id = req.params.id;

    pruebas_valoraciones.findAll({
        include: [{
            model: pruebas,
            where: {id: id}
       }]})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la prueba_valoracion con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la prueba_valoracion con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//CREAR PRUEBA_VALORACION NUEVA
PruebaValoracionController.nuevaPrueba_valoracion = (req, res) => {

    if (!req.body.PruebaID || !req.body.ValoracionID) {
        res.status(400).send({
          message: "No puede estar vacío ningún campo."
        });
        return;
    }
      
    const nuevaPrueba_valoracion = {
        PruebaID: req.body.PruebaID,
        ValoracionID: req.body.ValoracionID,
        createdAt: new Date(),
        updatedAt: new Date()
    };
      
    pruebas_valoraciones.create(nuevaPrueba_valoracion)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar crear la prueba_valoracion."
            });
        });

};

//-------------------------------------------------------------------------------------

//ACTUALIZAR PRUEBA_VALORACION, BUSCANDO POR ID
PruebaValoracionController.actualizarPrueba_valoracion = (req, res) => {

        const id = req.params.id;

        pruebas_valoraciones.update(req.body, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "La prueba_valoracion ha sido actualizada correctamente."
                });
              } else {
                res.send({
                  message: `No se ha podido actualizar la prueba_valoracion con el id ${id}`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Ha surgido algún error al intentar actualizar la prueba_valoracion con el id " + id + "."
              });
            });

};

//-------------------------------------------------------------------------------------

//BORRAR PRUEBA_VALORACION, BUSCANDO POR ID
PruebaValoracionController.borrarPrueba_valoracion = (req, res) => {

    const id = req.params.id;

    pruebas_valoraciones.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `La prueba_valoracion con id ${id} ha sido eliminada correctamente.`
                });
            } else {
                res.send({
                    message: `No se ha podido eliminar la prueba_valoracion con id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar borrar la prueba_valoracion con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

module.exports = PruebaValoracionController;