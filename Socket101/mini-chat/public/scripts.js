const rootSocket = io('http://localhost:9000'); // Main namespace
const adminSocket = io('http://localhost:9000/admin'); // admin namespace
// this is the endpoint as `/admin` [namespace]

rootSocket.on('messageFromServer', dataFromServer => {
  console.log(dataFromServer);
  rootSocket.emit('dataToServer', {data: 'Data from the Client'});
});

adminSocket.on('welcome', datafromserver => {
  console.log(datafromserver);
});

adminSocket.emit('fuck', {data: 'Client Wants To Fuck The Server!'});

document.querySelector('#message-form').addEventListener('submit', e => {
  e.preventDefault();
  const newMessage = document.querySelector('#user-message').value;
  rootSocket.emit('newMessageToServer', {text: newMessage});
});
