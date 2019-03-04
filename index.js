const http = require('https');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Prachi is running\n');
});

server.listen(port, hostname, () => {
  console.log(`Prachi is running at http://${hostname}:${port}/`);
});