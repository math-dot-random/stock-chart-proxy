const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;
const cors = require('cors');
const request = require('request');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname + '/../public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log('Server is listening on port 3000')
});

app.get('/stocks/:ticker', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/index.html'));
});

//port 3001: Stock Chart
app.get('/api/stocks/:ticker/prices/:type', (req, res) => {
  request(`http://localhost:3001/api/stocks/${req.params.ticker}/prices/${req.params.type}`, (err, response) => {
    if(err) {
      console.error(err)
    }
  }).pipe(res);
});

//port 3002: Earnings Chart
app.get('/api/stocks/:stock/earnings', (req, res) => {
  request(`http://localhost:3003/api/stocks/${req.params.stock}/earnings`, (err, response) => {
    if(err) {
      console.error(err)
    }
  }).pipe(res);
});
'/api/stocks/:stock/earnings'

//port 3003: Trade Panel
app.get('/api/stocks/:stock/price', (req, res) => {
  request(`http://localhost:3002/api/stocks/${req.params.tock}/price`, (err, response) => {
    if(err) {
      console.error(err)
    }
  }).pipe(res);
});

//port 3004: Price Paid Chart 
app.get('/api/stocks/:stock/', (req, res) => {
  request(`http://localhost:3004/api/stocks/${req.params.stock}`, (err, response) => {
    if(err) {
      console.error(err)
    }
  }).pipe(res);
});

//port 3005: Suggested
app.get('/api/stocks/:stock/', (req, res) => {
  request(`http://localhost:3004/api/stocks/${req.params.ticker}`, (err, response) => {
    if(err) {
      console.error(err)
    }
  }).pipe(res);
});



