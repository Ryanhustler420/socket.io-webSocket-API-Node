const express = require('express');
const app = express();
const scoketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000);

const io = scoketio(expressServer);

io.on('connection', socket => {
  socket.emit('messageFromServer', {data: 'Hey Client'});
  socket.on('dataToServer', dataFromClient => {
    console.log(dataFromClient);
  });
  socket.on('newMessageToServer', msg => {
    io.emit('messageToClient', {text: msg.text});
  });
});
