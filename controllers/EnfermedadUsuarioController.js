const { enfermedades_usuarios } = require('../models/index');
const { usuario } = require('../models/index');

const EnfermedadUsuarioController = {};

//LISTADO DE TODAS LAS ENFERMEDADES_USUARIOS

EnfermedadUsuarioController.listadoCompleto = (req, res) => {

    enfermedades_usuarios.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar acceder a las enfermedades_usuarios."
            });
        });
};

//-------------------------------------------------------------------------------------

//OBTENER UNA UNICA ENFERMEDAD_USUARIO, BUSCANDO POR ID
EnfermedadUsuarioController.enfermedad_usuarioId = (req, res) => {

    const id = req.params.id;

    enfermedades_usuarios.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la enfermedad_usuario con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la enfermedad_usuario con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//OBTENER ENFERMEDADES_USUARIOS, POR ID DE USUARIO
EnfermedadUsuarioController.enfermedad_usuarioUsuarioId = (req, res) => {

    const id = req.params.id;

    enfermedades_usuarios.findAll({
        include: [{
            model: usuario,
            where: {id: id}
       }]})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar la enfermedad_usuario con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder a la enfermedad_usuario con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//CREAR ENFERMEDAD_USUARIO NUEVA
EnfermedadUsuarioController.nuevaEnfermedad_usuario = (req, res) => {

    if (!req.body.UsuarioID || !req.body.EnfermedadID) {
        res.status(400).send({
          message: "No puede estar vacío ningún campo."
        });
        return;
    }
      
    const nuevaEnfermedad_usuario = {
        UsuarioID: req.body.UsuarioID,
        EnfermedadID: req.body.EnfermedadID,
        createdAt: new Date(),
        updatedAt: new Date()
    };
      
    enfermedades_usuarios.create(nuevaEnfermedad_usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar crear la enfermedad_usuario."
            });
        });

};

//-------------------------------------------------------------------------------------

//ACTUALIZAR ENFERMEDAD_USUARIO, BUSCANDO POR ID
EnfermedadUsuarioController.actualizarEnfermedad_usuario = (req, res) => {

        const id = req.params.id;

        enfermedades_usuarios.update(req.body, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "La enfermedad_usuario ha sido actualizada correctamente."
                });
              } else {
                res.send({
                  message: `No se ha podido actualizar la enfermedad_usuario con el id ${id}`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Ha surgido algún error al intentar actualizar la enfermedad_usuario con el id " + id + "."
              });
            });

};

//-------------------------------------------------------------------------------------

//BORRAR ENFERMEDAD_USUARIO, BUSCANDO POR ID
EnfermedadUsuarioController.borrarEnfermedad_usuario = (req, res) => {

    const id = req.params.id;

    enfermedades_usuarios.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `La enfermedad_usuario con id ${id} ha sido eliminada correctamente.`
                });
            } else {
                res.send({
                    message: `No se ha podido eliminar la enfermedad_usuario con id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar borrar la enfermedad_usuario con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

module.exports = EnfermedadUsuarioController;