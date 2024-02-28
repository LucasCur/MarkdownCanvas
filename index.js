const express = require('express');
const http = require('http');
const markdownIt = require('markdown-it');

const app = express();
const md = markdownIt();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/markdown', express.json(), (req, res) => {
  const { markdown } = req.body;
  const html = md.render(markdown);
  res.send(html);
});

// Check if port 3000 is available, if not, find a different available port.
const port = 3000;
const server = http.createServer(app);
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${port} is already in use. Trying another port...`);
    server.listen(0); // 0 indicates the system should choose an available port
  }
});
server.on('listening', () => {
  const actualPort = server.address().port;
  console.log(`Server is running on port ${actualPort}`);
});

server.listen(port);