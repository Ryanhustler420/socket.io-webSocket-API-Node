const http = require ('http');

// 3rd party module, ws!
const websocket = require ('ws');

const server = http.createServer ((req, res) => {
  res.end ('I Am Connected!');
});

const wsServer = new websocket.Server ({server});

wsServer.on ('headers', (headers, req) => {
  console.log (headers);
});

wsServer.on ('connection', (ws, req) => {
  ws.send ('welcome to the websocket server!');
  ws.on ('message', msg => {
    console.log (msg);
  });
});

server.listen (8000);
