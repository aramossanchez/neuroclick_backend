const { usuario } = require('../models/index');

const UsuarioController = {};

//LISTADO DE TODAS LOS USUARIOS

UsuarioController.listadoCompleto = (req, res) => {

    usuario.findAll()
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

// //OBTENEMOS UN UNICO USUARIO, BUSCANDO POR ID
// UsuarioController.getById = (req, res) => {

//     const id = req.params.id;

//     if (req.user.usuario.rol == "administrador" || req.user.usuario.id == id) {// HACEMOS QUE SOLO PUEDA VERLO EL ADMINISTRADOR O EL USUARIO DUEÑO DEL PERFIL

//         usuario.findByPk(id)
//             .then(data => {
//                 if (data) {
//                     res.send(data);
//                 } else {
//                     res.status(404).send({
//                         message: `No se puede encontrar el usuario con el id ${id}.`
//                     });
//                 }
//             })
//             .catch(err => {
//                 res.status(500).send({
//                     message: "Ha surgido algún error al intentar acceder al usuario con el id " + id
//                 });
//             });
//     }else{
//       res.send({
//         message: `No tienes permisos para acceder al perfil indicado.`
//       });
//     }
// };

// //-------------------------------------------------------------------------------------

// UsuarioController.update = (req, res) => {

//         const id = req.params.id;

//         if (req.user.usuario.rol == "administrador" || req.user.usuario.id == id) {// HACEMOS QUE SOLO PUEDA ACTULIZARLO EL ADMINISTRADOR O EL USUARIO DUEÑO DEL PERFIL

              
            
//               usuario.update(req.body, {
//                 where: { id: id }
//               })
//                 .then(num => {
//                   if (num == 1) {
//                     res.send({
//                       message: "El usuario ha sido actualizado correctamente."
//                     });
//                   } else {
//                     res.send({
//                       message: `No se ha podido actualizar el usuario con el id ${id}`
//                     });
//                   }
//                 })
//                 .catch(err => {
//                   res.status(500).send({
//                     message: "Ha surgido algún error al intentar actualizar el usuario con el id " + id + "."
//                   });
//                 });
//         }else{
//           res.send({
//             message: `No tienes permisos para modificar el perfil indicado.`
//           });
//         }
// };

// //BORRAMOS A USUARIO, BUSCANDO POR ID
// UsuarioController.delete = (req, res) => {

//     const id = req.params.id;

//     if (req.user.usuario.rol == "administrador" || req.user.usuario.id == id) {// HACEMOS QUE SOLO PUEDA BORRARLO EL ADMINISTRADOR O EL USUARIO DUEÑO DEL PERFIL

//             usuario.destroy({
//                 where: { id: id }
//             })
//                 .then(num => {
//                     if (num == 1) {
//                         res.send({
//                             message: `El usuario con id ${id} ha sido eliminado correctamente.`
//                         });
//                     } else {
//                         res.send({
//                             message: `No se ha podido eliminar el usuario con id ${id}.`
//                         });
//                     }
//                 })
//                 .catch(err => {
//                     res.status(500).send({
//                         message: "Ha surgido algún error al intentar borrar el usuario con el id " + id
//                     });
//                 });
//     }else{
//       res.send({
//         message: `No tienes permisos para borrar el perfil indicado.`
//       });
//     }
// };

// //-------------------------------------------------------------------------------------

// //BORRAMOS TODOS LOS USUARIOS
// UsuarioController.deleteAll = (req, res) => {

//   if (req.user.usuario.rol == "administrador") {// HACEMOS QUE SOLO PUEDA BORRARLO EL ADMINISTRADOR

//               usuario.destroy({
//                 where: {},
//                 truncate: false
//               })
//                 .then(nums => {
//                   res.send({ message: `Se han borrado ${nums} usuarios de la base de datos` });
//                 })
//                 .catch(err => {
//                   res.status(500).send({
//                     message:
//                       err.message || "Ha surgido algún error al intentar eliminar a los usuarios."
//                   });
//                 });
//   }else{
//     res.send({
//       message: `No tienes permisos para borrar usuarios. Contacta con un administrador.`
//     });
//   }
// };

module.exports = UsuarioController;