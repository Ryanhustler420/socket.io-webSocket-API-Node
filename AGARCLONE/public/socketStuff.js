let socket = io.connect('http://localhost:9000');

socket.on('init', data => {
  // console.log(data.orbs);
  orbs = data.orbs;
});
