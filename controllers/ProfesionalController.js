const { profesionales } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const ProfesionalController = {};

//LOGIN EN LA APLICACION

ProfesionalController.login = (req, res) => {

    let correo_electronico = req.body.correo_electronico;
    let clave_acceso = req.body.clave_acceso;

    profesionales.findOne({
        where: { correo_electronico: correo_electronico }
    }).then(profesional => {
        if (!profesional) {
            res.status(404).json({ msg: "No se ha podido encontrar a ningún profesional con ese correo electrónico" });
        } else {
            if (bcrypt.compareSync(clave_acceso, profesional.clave_acceso)) { //COMPARA CONTRASEÑA INTRODUCIDA CON CONTRASEÑA GUARDADA, TRAS DESENCRIPTAR
                let token = jwt.sign({ profesional: profesional }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });
                res.json({
                    profesional: profesional,
                    token: token
                })
            } else {
                res.status(401).json({ msg: "Contraseña incorrecta" })
            }
        }
    }).catch(err => {
        res.status(500).json(err);
    })
};

//-------------------------------------------------------------------------------------

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

    let clave_acceso = req.body.clave_acceso;

    if (clave_acceso.length >= 8) {//SE ENCRIPTA LA CONTRASEÑA SI MÍNIMO TIENE 8 CARACTERES
        var password = bcrypt.hashSync(req.body.clave_acceso, Number.parseInt(authConfig.rounds));   
      
        const nuevoProfesional = {
            correo_electronico: req.body.correo_electronico,
            clave_acceso: password,
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
    }else{
        res.send({
            message: `La contraseña tiene que tener un mínimo de 8 caracteres. ${clave}`
        });
    }

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