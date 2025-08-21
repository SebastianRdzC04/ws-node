const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer();
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id);

  socket.on('LTR1', (msg) => {
    // Emitir el mensaje a todos los clientes suscritos al evento 'LTR'
    io.emit('LTR1', msg);
  });

  socket.on('FDR1', (msg) => {
    // Emitir el mensaje a todos los clientes suscritos al evento 'FDR1'
    io.emit('FDR1', msg);
  });

});

server.listen(3000, () => {
  console.log('Servidor Socket.IO escuchando en el puerto 3000');
});