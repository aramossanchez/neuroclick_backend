const { valoraciones } = require('../models/index');

const ValoracionController = {};

//LISTADO DE TODAS LAS VALORACIONES

ValoracionController.listadoCompleto = (req, res) => {

    valoraciones.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar acceder a las valoraciones."
            });
        });
};

//-------------------------------------------------------------------------------------

//OBTENER UNA UNICA VALORACION, BUSCANDO POR ID
ValoracionController.valoracionId = (req, res) => {

    const id = req.params.id;

    valoraciones.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la valoración con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la valoración con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//CREAR VALORACION NUEVA
ValoracionController.nuevaValoracion = (req, res) => {

    if (!req.body.pregunta || !req.body.escala) {
        res.status(400).send({
          message: "No puede estar vacío ningún campo."
        });
        return;
    }
      
    const nuevaValoracion = {
        pregunta: req.body.pregunta,
        escala: req.body.escala,
        createdAt: new Date(),
        updatedAt: new Date()
    };
      
    valoraciones.create(nuevaValoracion)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar crear la valoración."
            });
        });

};

//-------------------------------------------------------------------------------------

//ACTUALIZAR VALORACION, BUSCANDO POR ID
ValoracionController.actualizarValoracion = (req, res) => {

        const id = req.params.id;

        valoraciones.update(req.body, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "La valoración ha sido actualizada correctamente."
                });
              } else {
                res.send({
                  message: `No se ha podido actualizar la valoración con el id ${id}`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Ha surgido algún error al intentar actualizar la valoración con el id " + id + "."
              });
            });

};

//-------------------------------------------------------------------------------------

//BORRAR VALORACION, BUSCANDO POR ID
ValoracionController.borrarValoracion = (req, res) => {

    const id = req.params.id;

    valoraciones.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `La valoración con id ${id} ha sido eliminada correctamente.`
                });
            } else {
                res.send({
                    message: `No se ha podido eliminar la valoración con id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar borrar la valoración con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

module.exports = ValoracionController;