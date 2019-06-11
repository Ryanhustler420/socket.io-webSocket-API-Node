const express = require('express');
const app = express();
const scoketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000);

const io = scoketio(expressServer);

io.on('connection', socket => {
  console.log(socket.id);
  socket.emit('messageFromServer', {data: 'Welcome to the socketio server!'});
  socket.on('dataToServer', dataFromClient => {
    console.log(dataFromClient);
  });
});
