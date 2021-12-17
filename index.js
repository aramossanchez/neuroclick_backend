const express = require('express');
const db = require('./db.js');
const router = require('./router.js');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000; //CONFIGURO PUERTO HEROKU

var corsOptions = {//CONFIGURO OPCIONES DE CORS
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

//Middleware --> FUNCIONES QUE SE EJECUTARÁN SIEMPRE ANTES DE CUALQUIER ACCIÓN QUE HAGAMOS DE APP
app.use(express.json()); //PUEDO OBTENER JSON DEL BODY
app.use(cors(corsOptions));  //USO CORS

//RUTAS
app.get('/', (req, res) => {res.send(//PANTALLA DE BIENVENIDA EN PANTALLA DE INICIO
    '<body style="margin: 0;background-color:rgb(179, 179, 255);font-family: Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;"><div style="width:100%;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:space-between"><div style="background-color:black; width:100vw; height:3em"></div><h1 style="font-size:4em">NeuroClick API</h1><p style="font-size:2em">API CONECTADA Y FUNCIONANDO<div style="background-color:black; width:100vw; height:3em; margin-top:3em"></div></div></body>'
);});
app.use(router);

db.then(()=>{
        app.listen(PORT, ()=> console.log(`Server on port ${PORT}`)); //ARRANCO SERVIDOR
    })
    .catch((err)=> console.log(err.message));   