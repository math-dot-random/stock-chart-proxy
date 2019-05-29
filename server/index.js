const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;
const cors = require('cors');
var httpProxy = require('http-proxy');
const request = require('request');

const app = express();

//create a proxy server
const proxy = httpProxy.createProxyServer({});

app.use(cors());
app.use(express.static(path.join(__dirname + '/../public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log('Server is listening on port 3000')
});

app.get('/api/stocks/:ticker/prices/:type', (req, res) => {
  request(`http://localhost:3001/api/stocks/${req.params.ticker}/prices/${req.params.type}`, (err, response) => {
    if(err) {
      console.error(err)
    }
  }).pipe(res);
  })

  