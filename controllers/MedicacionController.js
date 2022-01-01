const { medicaciones } = require('../models/index');

const MedicacionController = {};

//LISTADO DE TODAS LAS MEDICACIONES

MedicacionController.listadoCompleto = (req, res) => {

    medicaciones.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar acceder a las medicaciones."
            });
        });
};

//-------------------------------------------------------------------------------------

//OBTENER UNA UNICA MEDICACION, BUSCANDO POR ID
MedicacionController.medicacionId = (req, res) => {

    const id = req.params.id;

    medicaciones.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la medicación con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la medicación con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//CREAR MEDICACION NUEVA
MedicacionController.nuevaMedicacion = (req, res) => {

    if (!req.body.nombre) {
        res.status(400).send({
          message: "No puede estar vacío ningún campo."
        });
        return;
    }
      
    const nuevaMedicacion = {
        nombre: req.body.nombre,
        createdAt: new Date(),
        updatedAt: new Date()
    };
      
    medicaciones.create(nuevaMedicacion)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar crear la medicación."
            });
        });

};

//-------------------------------------------------------------------------------------

//ACTUALIZAR MEDICACION, BUSCANDO POR ID
MedicacionController.actualizarMedicacion = (req, res) => {

        const id = req.params.id;

        medicaciones.update(req.body, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "La medicación ha sido actualizado correctamente."
                });
              } else {
                res.send({
                  message: `No se ha podido actualizar la medicación con el id ${id}`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Ha surgido algún error al intentar actualizar la medicación con el id " + id + "."
              });
            });

};

//-------------------------------------------------------------------------------------

//BORRAR MEDICACIÓN, BUSCANDO POR ID
MedicacionController.borrarMedicacion = (req, res) => {

    const id = req.params.id;

    medicaciones.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `La medicación con id ${id} ha sido eliminado correctamente.`
                });
            } else {
                res.send({
                    message: `No se ha podido eliminar la medicación con id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar borrar la medicación con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

module.exports = MedicacionController;