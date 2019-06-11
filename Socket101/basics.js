// We need http because we dont have epress server
const http = require('http');

// We need socketio ... its 3rd party!
const socketio = require('socket.io');

// We make an http server with node!
const server = http.createServer((req, res) => {
  res.end('I Am Connected!');
});

// If you have express server pass the app express()
// constructor const withen socketio(argas)

const io = socketio(server);

io.on('connection', (socket, req) => {
  // ws.send become socket.emit
  socket.emit('welcome', 'welcome to the websocket server!');
  
  socket.on('message', msg => {
    console.log(msg);
  });
});

server.listen(8000);
