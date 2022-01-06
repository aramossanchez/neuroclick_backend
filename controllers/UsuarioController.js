const { usuario } = require('../models/index');

const UsuarioController = {};

//LISTADO DE TODOS LOS USUARIOS

UsuarioController.listadoCompleto = (req, res) => {

    usuario.findAll({
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
                err.message || "Ha surgido algún error al intentar acceder a los usuarios."
            });
        });
};

//-------------------------------------------------------------------------------------

//OBTENER UN UNICO USUARIO, BUSCANDO POR ID
UsuarioController.usuarioId = (req, res) => {

    const id = req.params.id;

    usuario.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el usuario con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder al usuario con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//CREAR USUARIO NUEVO
UsuarioController.nuevoUsuario = (req, res) => {

    if (!req.body.nombre || !req.body.apellidos || !req.body.direccion || !req.body.telefono_usuario ||!req.body.pension || !req.body.persona_contacto || !req.body.telefono_contacto || !req.body.fecha_nacimiento || !req.body.peso || !req.body.estatura) {
        res.status(400).send({
          message: "No puede estar vacío ningún campo."
        });
        return;
    }
      
    const nuevoUsuario = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        telefono_usuario: req.body.telefono_usuario,
        pension: req.body.pension,
        persona_contacto: req.body.persona_contacto,
        telefono_contacto: req.body.telefono_contacto,
        fecha_nacimiento: req.body.fecha_nacimiento,
        peso: req.body.peso,
        estatura: req.body.estatura,
        createdAt: new Date(),
        updatedAt: new Date()
    };
      
    usuario.create(nuevoUsuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar crear el usuario."
            });
        });

};

//-------------------------------------------------------------------------------------

//ACTUALIZAR USUARIO, BUSCANDO POR ID
UsuarioController.actualizarUsuario = (req, res) => {

        const id = req.params.id;

        usuario.update(req.body, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "El usuario ha sido actualizado correctamente."
                });
              } else {
                res.send({
                  message: `No se ha podido actualizar el usuario con el id ${id}`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Ha surgido algún error al intentar actualizar el usuario con el id " + id + "."
              });
            });

};

//-------------------------------------------------------------------------------------

//BORRAR USUARIO, BUSCANDO POR ID
UsuarioController.borrarUsuario = (req, res) => {

    const id = req.params.id;

    usuario.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `El usuario con id ${id} ha sido eliminado correctamente.`
                });
            } else {
                res.send({
                    message: `No se ha podido eliminar el usuario con id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar borrar el usuario con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------


module.exports = UsuarioController;