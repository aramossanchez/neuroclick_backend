const { profesionales } = require('../models/index');

const ProfesionalController = {};

//LISTADO DE TODOS LOS PROFESIONALES

ProfesionalController.listadoCompleto = (req, res) => {

    profesionales.findAll({
        order: [
            ['apellidos', 'ASC'],
        ],
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar acceder a los profesionales."
            });
        });
};

//-------------------------------------------------------------------------------------

//OBTENER UN UNICO PROFESIONAL, BUSCANDO POR ID
ProfesionalController.profesionalId = (req, res) => {

    const id = req.params.id;

    profesionales.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el profesional con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder al profesional con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//CREAR PROFESIONAL NUEVO
ProfesionalController.nuevoProfesional = (req, res) => {

    if (!req.body.correo_electronico || !req.body.clave_acceso || !req.body.nombre || !req.body.apellidos || !req.body.direccion || !req.body.telefono_contacto || !req.body.rol) {
        res.status(400).send({
          message: "No puede estar vacío ningún campo."
        });
        return;
    }
      
    const nuevoProfesional = {
        correo_electronico: req.body.correo_electronico,
        clave_acceso: req.body.clave_acceso,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        telefono_contacto: req.body.telefono_contacto,
        rol: req.body.rol,
        createdAt: new Date(),
        updatedAt: new Date()
    };
      
    profesionales.create(nuevoProfesional)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar crear el profesional."
            });
        });

};

//-------------------------------------------------------------------------------------

//ACTUALIZAR PROFESIONAL, BUSCANDO POR ID
ProfesionalController.actualizarProfesional = (req, res) => {

        const id = req.params.id;

        profesionales.update(req.body, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "El profesional ha sido actualizado correctamente."
                });
              } else {
                res.send({
                  message: `No se ha podido actualizar el profesional con el id ${id}`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Ha surgido algún error al intentar actualizar el profesional con el id " + id + "."
              });
            });

};

//-------------------------------------------------------------------------------------

//BORRAR PROFESIONAL, BUSCANDO POR ID
ProfesionalController.borrarProfesional = (req, res) => {

    const id = req.params.id;

    profesionales.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `El profesional con id ${id} ha sido eliminado correctamente.`
                });
            } else {
                res.send({
                    message: `No se ha podido eliminar el profesional con id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar borrar el profesional con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

module.exports = ProfesionalController;