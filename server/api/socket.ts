import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 1338 });

// Server testing connection
server.on('connection', (socket) => {
    // send a message to the client;
    socket.send(JSON.stringify({
        type: 'hello from server',
        content: [1, '2'],
    }));

    // recieve a message from the cleint
    socket.on('message', (data: string) => {
        const packet = JSON.parse(data);

        switch(packet.type) {
            case 'hello from client':
                // ...
                break;
        }
    });
});