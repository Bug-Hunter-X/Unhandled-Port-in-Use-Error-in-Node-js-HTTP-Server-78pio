const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//The issue is that the server doesn't handle the error properly if the port is already in use.  This can lead to unexpected behavior or crashes in a production environment.
