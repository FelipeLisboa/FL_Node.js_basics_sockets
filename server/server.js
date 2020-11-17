const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app); //montado el servidor con toda la configuración que se le hará a express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO = es la comunicación del backend
module.exports.io = socketIO(server); //se levanta el server de http
//con el module se exporta todo el objeto IO
require('./sockets/socket.js'); // se llama para poder tomar el objeto IO desde socket.js




//localhost:3000/socket.io/socket.io.js --> se ve un documento para saber que está correctamente configurado

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${port}`);
});