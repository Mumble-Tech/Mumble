import { io } from 'socket.io-client';

const socket = io("http://localhost:200/connect");

socket.on("connect", () => {
    console.log('Working dev');
})