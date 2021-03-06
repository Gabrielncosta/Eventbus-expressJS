const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/posts', (req, res) => {
  res.send(posts);
});


app.post('/events', (req, res) => {
  res.send(posts);
});

app.listen(4002, () => {
  console.log('Listening on 4002');
})