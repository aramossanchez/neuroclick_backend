const { antecedentes_familiares } = require('../models/index');
const { usuario } = require('../models/index');

const AntecedenteFamiliarController = {};

//LISTADO DE TODOS LOS ANTECEDENTES FAMILIARES

AntecedenteFamiliarController.listadoCompleto = (req, res) => {

    antecedentes_familiares.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar acceder a los antecedentes familiares."
            });
        });
};

//-------------------------------------------------------------------------------------

//OBTENER UN UNICO ANTECEDENTE FAMILIAR, BUSCANDO POR ID
AntecedenteFamiliarController.antecedenteFamiliarId = (req, res) => {

    const id = req.params.id;

    antecedentes_familiares.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el antecedente familiar con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder al antecedente familiar con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//OBTENER ANTECEDENTES FAMILIARES POR ID DE USUARIO
AntecedenteFamiliarController.antecedenteFamiliarUsuarioId = (req, res) => {

    const id = req.params.id;

    antecedentes_familiares.findAll({
        include: [{
            model: usuario,
            where: {id: id}
       }]})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el antecedente familiar con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder al antecedente familiar con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

//CREAR ANTECENDETE FAMILIAR NUEVO
AntecedenteFamiliarController.nuevoAntecedenteFamiliar = (req, res) => {

    if (!req.body.descripcion || !req.body.UsuarioID) {
        res.status(400).send({
          message: "No puede estar vacío ningún campo."
        });
        return;
    }
      
    const nuevoAntecedenteFamiliar = {
        descripcion: req.body.descripcion,
        UsuarioID: req.body.UsuarioID,
        createdAt: new Date(),
        updatedAt: new Date()
    };
      
    antecedentes_familiares.create(nuevoAntecedenteFamiliar)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha surgido algún error al intentar crear el antecedente familiar."
            });
        });

};

//-------------------------------------------------------------------------------------

//ACTUALIZAR ANTECEDENTE FAMILIAR, , BUSCANDO POR ID
AntecedenteFamiliarController.actualizarAntecedenteFamiliar = (req, res) => {

        const id = req.params.id;

        antecedentes_familiares.update(req.body, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "El antecedente familiar ha sido actualizado correctamente."
                });
              } else {
                res.send({
                  message: `No se ha podido actualizar el antecedente familiar con el id ${id}`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Ha surgido algún error al intentar actualizar el antecedente familiar con el id " + id + "."
              });
            });

};

//-------------------------------------------------------------------------------------

//BORRAR USUARIO, BUSCANDO POR ID
AntecedenteFamiliarController.borrarAntecedenteFamiliar = (req, res) => {

    const id = req.params.id;

    antecedentes_familiares.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `El antecedente familiar con id ${id} ha sido eliminado correctamente.`
                });
            } else {
                res.send({
                    message: `No se ha podido eliminar el antecedente familiar con id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar borrar el antecedente familiar con el id " + id
            });
        });

};

//-------------------------------------------------------------------------------------

module.exports = AntecedenteFamiliarController;