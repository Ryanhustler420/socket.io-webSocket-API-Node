const express = require('express');
const app = express();
const scoketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000);

// const io = scoketio(expressServer);

// OR

const io = scoketio();
io.attach(expressServer);

// io.on == io.of('/').on

// Main Namespace
io.on('connection', socket => {
  socket.emit('messageFromServer', {data: 'Hey Client'});
  socket.on('dataToServer', dataFromClient => {
    console.log(dataFromClient);
  });
  socket.on('newMessageToServer', msg => {
    io.emit('messageToClient', {text: msg.text});
    io.of('/').emit('messageToClient', {text: msg.text}); //<- as same as above code
  });

  // The server can still communicate across namespace
  // but on the clientInformation, the socket needs to be in THAT namespace
  // in order to get the events

  // Dont use this
  //   The root socket has all the namesapce contacts

  //   setTimeout(() => {
  //     io.of('/admin').emit(
  //       'welcome',
  //       'Welcome to the admin channle, form the root channel!'
  //     );
  //   }, 2000);
});

io.of('/admin').on('connection', socket => {
  console.log('Someone connected to the admin namespace');
  io.of('/admin').emit('welcome', 'Welcome to the admin channel!');
});
