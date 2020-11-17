var socket = io(); //es la comunicación entre el backend(server) y el frontend(html)


//on es para escuchar sucesos (conectar, desconectar, etc)
socket.on('connect', function() {
    console.log('Conectado al servidor'); //si se baja el servidor, seguirá haciendo intentos de conexión hasta que se levante el servidor de nuevo
    //conexión activo/activo
});

socket.on('disconnect', function() { //si se desconecta el servidor
    console.log('Perdimos conexión con el servidor');
});

//emit son para enviar información
//emit solo habla entre servidor y cliente de forma privada
socket.emit('enviarMensaje', { //objeto que se quiere enviar al servidor, el servidor lo recibirar cuando yo emita "enviarMensaje"
    usuario: 'Felipe',
    mensaje: 'Hola mundo'
}, function(resp) { //CONFIRMAR SI SE ENVIÓ EL EMIT 
    console.log('Respuesta server :', resp);
}); //se hace instantáneamente




//escucha información que envió el cliente
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});