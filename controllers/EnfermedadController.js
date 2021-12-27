const { enfermedades } = require('../models/index');

const EnfermedadController = {};

//LISTADO DE TODAS LAS ENFERMEDADES

EnfermedadController.listadoCompleto = (req, res) => {

    enfermedades.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar acceder a las enfermedades."
            });
        });
};

//-------------------------------------------------------------------------------------

//OBTENER UNA UNICA ENFERMEDAD, BUSCANDO POR ID
EnfermedadController.enfermedadId = (req, res) => {

    const id = req.params.id;

    enfermedades.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la enfermedad con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la enfermedad con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//CREAR ENFERMEDAD NUEVA
EnfermedadController.nuevaEnfermedad = (req, res) => {

    if (!req.body.nombre) {
        res.status(400).send({
          message: "No puede estar vacío ningún campo."
        });
        return;
    }
      
    const nuevaEnfermedad = {
        nombre: req.body.nombre,
        createdAt: new Date(),
        updatedAt: new Date()
    };
      
    enfermedades.create(nuevaEnfermedad)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar crear la enfermedad."
            });
        });

};

//-------------------------------------------------------------------------------------

//ACTUALIZAR ENFERMEDAD, BUSCANDO POR ID
EnfermedadController.actualizarEnfermedad = (req, res) => {

        const id = req.params.id;

        enfermedades.update(req.body, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "La enfermedad ha sido actualizado correctamente."
                });
              } else {
                res.send({
                  message: `No se ha podido actualizar la enfermedad con el id ${id}`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Ha surgido algún error al intentar actualizar la enfermedad con el id " + id + "."
              });
            });

};

//-------------------------------------------------------------------------------------

//BORRAR ENFERMEDAD, BUSCANDO POR ID
EnfermedadController.borrarEnfermedad = (req, res) => {

    const id = req.params.id;

    enfermedades.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `La enfermedad con id ${id} ha sido eliminado correctamente.`
                });
            } else {
                res.send({
                    message: `No se ha podido eliminar la enfermedad con id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar borrar la enfermedad con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

module.exports = EnfermedadController;