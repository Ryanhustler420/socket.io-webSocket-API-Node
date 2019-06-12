const express = require('express');
const app = express();
const scoketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000);

const io = scoketio();
io.attach(expressServer);

io.on('connection', socket => {
  socket.emit('messageFromServer', {data: 'Hey Client'});
  socket.on('dataToServer', dataFromClient => {
    console.log(dataFromClient);
  });
  socket.join('level1');
  //   socket
  //     .to('level1')
  //     .emit('joined', `${socket.id} I have joined the level 1 room!`);
  io.of('/')
    .to('level1')
    .emit('joined', `${socket.id} I have joined the level 1 room!`);
});

// Only for /admin namespace
io.of('/admin').on('connection', socket => {
  socket.emit('welcome', 'Welcome to the admin channel!');
  socket.on('fuck', data => {
    console.log(data);
  });
});
