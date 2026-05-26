const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

// vote storage
let votes = {
  node: 0,
  mongodb: 0,
  react: 0,
  express: 0
};

io.on('connection', (socket) => {
  console.log('User connected');

  // send initial data
  socket.emit('updateVotes', votes);

  // receive vote
  socket.on('vote', (choice) => {
    console.log("Vote received:", choice);

    if (choice === 'node') votes.node++;
    else if (choice === 'mongodb') votes.mongodb++;
    else if (choice === 'react') votes.react++;
    else if (choice === 'express') votes.express++;

    io.emit('updateVotes', votes);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});