const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

var port = 3001;

app.use(express.static(path.join(__dirname + '/../public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log('Server is listening on port 3001')
});

//at this path, load this webpage
app.get('/stocks/:stock', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/index.html'));
  });