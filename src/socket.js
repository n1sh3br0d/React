import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3001', {
  query: {
    token: localStorage.getItem('api-key'),
    user: localStorage.getItem('user')
  }
});

let messages = [];

socket.on('message', message => {
  const data = JSON.parse(message)
  messages.push(data);
});
socket.on('alert', (message) =>{
  localStorage.clear();
});

function Send(message, to) {
  let data = message;
  data.from = 'me';
  messages.push(data);
  socket.emit('message', JSON.stringify(message));
};

function SendPM(message, to) {
  message.to = to;
  let data = message;
  data.from = 'me';
  messages.push(data); 
  socket.emit('message', JSON.stringify(message));
}

export { socket, messages, Send, SendPM};