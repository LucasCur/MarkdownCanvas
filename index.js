const express = require('express');
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

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
