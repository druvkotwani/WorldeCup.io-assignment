const express = require('express');
const http = require('http');
const Server = require('socket.io').Server;
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});



server.listen(3000, () => {
    console.log('Server is running on port 3000');
});