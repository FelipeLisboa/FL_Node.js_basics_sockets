const { io } = require('../server'); //exportando el objeto IO para usarlo en el server

io.on('connection', (client) => { //client tiene toda la info de la conexión que se hizo 

    console.log('Usuario conectado'); //conexión activo/activo

    client.emit('enviarMensaje', { //el cliente emite mensaje al servidor
        usuario: 'Administrador',
        mensaje: 'Bienvenido al servidor'
    });

    client.on('disconnect', () => { //saber si se desconecta el usuario
        console.log('Usuario desconectado');
    });

    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => { //accion enviar mensaje, data es la data y callback para saber si se realizó la accion
        console.log(data);

        client.broadcast.emit('enviarMensaje', data); //btoadcast envía a todo el mundo

        /*if (mensaje.usuario) {
            callback({
                respuesta: 'Todo salió bien'
            });
        } else {
            callback({
                respuesta: 'Todo salió MAL!!!!!'
            });
        }*/
    });
});