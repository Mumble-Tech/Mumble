import { WebSocket } from 'ws';

var socket = new WebSocket('ws://localhost:8000/ws');

socket.on('open', function open() {
  socket.send('something');
});
