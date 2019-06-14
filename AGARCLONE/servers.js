// Server.js is only for the making of the socketio server and the express server
// Agar.io clone

const express = require('express');
const socketio = require('socket.io');

const app = express();
app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000);
const io = socketio(expressServer);
const helmet = require('helmet');
app.use(helmet());
console.log('express and socketio are listening on port 9000');

// App organization
module.exports = {
  app,
  io,
};
