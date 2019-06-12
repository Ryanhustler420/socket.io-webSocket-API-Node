const rootSocket = io('http://localhost:9000');
// this is the endpoint as root `/` as default [namespace]

const socket2 = io('http://localhost:9000/admin');
// this is the endpoint as `/admin` [namespace]

rootSocket.on('messageFromServer', dataFromServer => {
  console.log(rootSocket.id);
  console.log(dataFromServer);
  rootSocket.emit('dataToServer', {data: 'Data from the Client'});
});

socket2.on('connect', () => {
  console.log(socket2.id);
});

socket2.on('welcome', msg => {
  console.log(msg);
});

// this is not in /admin namespace so it won't works
rootSocket.on('welcome', msg => {
  console.log(msg);
});

document.querySelector('#message-form').addEventListener('submit', e => {
  e.preventDefault();
  const newMessage = document.querySelector('#user-message').value;
  rootSocket.emit('newMessageToServer', {text: newMessage});
});

rootSocket.on('messageToClient', msg => {
  document.querySelector('#messages').innerHTML += `<li>${msg.text}</li>`;
});
