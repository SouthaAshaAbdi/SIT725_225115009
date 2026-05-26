console.log("scripts.js loaded");

const socket = io();

socket.on("connect", () => {
  console.log("Socket connected");
});

window.vote = function(choice) {
  console.log("Button clicked:", choice);
  socket.emit("vote", choice);
};

// receive updates
socket.on('updateVotes', (data) => {
  console.log("Votes updated:", data);

  document.getElementById('node').innerText = data.node;
  document.getElementById('mongodb').innerText = data.mongodb;
  document.getElementById('react').innerText = data.react;
  document.getElementById('express').innerText = data.express;
});