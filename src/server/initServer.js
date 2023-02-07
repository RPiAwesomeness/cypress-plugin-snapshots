const http = require('http');
const socketio = require('socket.io');
const { SAVE_IMAGE } = require('./actions');
const { saveImageSnapshot } = require('../utils/tasks/imageSnapshots');

function initServer(config) {
  const server = http.createServer();
  const io = socketio(server);

  io.on('connection', (client) => {
    const { token } = client.handshake.query;

    if (config.serverEnabled) {
      client.on(SAVE_IMAGE, (data) => {
        if (token === config.token) {
          saveImageSnapshot(data);
        }
      });
    }
  });

  if (config.serverEnabled) {
    server.listen(config.serverPort, config.serverHost);
  }
}

module.exports = initServer;
