const { medicaciones_usuarios } = require('../models/index');
const { medicaciones } = require('../models/index');
const { usuario } = require('../models/index');

const MedicacionUsuarioController = {};

//LISTADO DE TODAS LAS MEDICACIONES_USUARIOS

MedicacionUsuarioController.listadoCompleto = (req, res) => {

    medicaciones_usuarios.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar acceder a las medicaciones_usuarios."
            });
        });
};

//-------------------------------------------------------------------------------------

//OBTENER UNA UNICA MEDICACION_USUARIO, BUSCANDO POR ID
MedicacionUsuarioController.medicacion_usuarioId = (req, res) => {

    const id = req.params.id;

    medicaciones_usuarios.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la medicacion_usuario con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la medicacion_usuario con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//OBTENER MEDICACIONES_USUARIOS, POR ID DE USUARIO
MedicacionUsuarioController.medicacion_usuarioUsuarioId = (req, res) => {

    const id = req.params.id;

    medicaciones_usuarios.findAll({
        include: [{
            model: usuario,
            where: {id: id}
       },{
            model:medicaciones
        }]})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la medicacion_usuario con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la medicacion_usuario con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//CREAR MEDICACION_USUARIO NUEVA
MedicacionUsuarioController.nuevaMedicacion_usuario = (req, res) => {

    if (!req.body.UsuarioID || !req.body.MedicacionID) {
        res.status(400).send({
          message: "No puede estar vacío ningún campo."
        });
        return;
    }
      
    const nuevaMedicacion_usuario = {
        UsuarioID: req.body.UsuarioID,
        MedicacionID: req.body.MedicacionID,
        createdAt: new Date(),
        updatedAt: new Date()
    };
      
    medicaciones_usuarios.create(nuevaMedicacion_usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar crear la medicacion_usuario."
            });
        });

};

//-------------------------------------------------------------------------------------

//ACTUALIZAR MEDICACION_USUARIO, BUSCANDO POR ID
MedicacionUsuarioController.actualizarMedicacion_usuario = (req, res) => {

        const id = req.params.id;

        medicaciones_usuarios.update(req.body, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "La medicacion_usuario ha sido actualizada correctamente."
                });
              } else {
                res.send({
                  message: `No se ha podido actualizar la medicacion_usuario con el id ${id}`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Ha surgido algún error al intentar actualizar la medicacion_usuario con el id " + id + "."
              });
            });

};

//-------------------------------------------------------------------------------------

//BORRAR MEDICACION_USUARIO, BUSCANDO POR ID
MedicacionUsuarioController.borrarMedicacion_usuario = (req, res) => {

    const id = req.params.id;

    medicaciones_usuarios.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `La medicacion_usuario con id ${id} ha sido eliminada correctamente.`
                });
            } else {
                res.send({
                    message: `No se ha podido eliminar la medicacion_usuario con id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar borrar la medicacion_usuario con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

module.exports = MedicacionUsuarioController;