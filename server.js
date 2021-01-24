const express = require('express');
const calculator = require('./calculator');
const bodyparser = require('body-parser');

let app = express();
//app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true }));
/*
app.get('/add', (req, res) => {
  let x = parseInt(req.query.x);
  let y = parseInt(req.query.y);
  let sum = calculator.add(x, y);
  res.send(calculator.printline(x, y, sum));
});
*/

app.get('/mirror', (req, res) => {
  //res.send(JSON.stringify(req.query));
  res.send('4');
});
/*
app.post('/add', (req, res) => {
  let x = parseInt(req.body.x);
  let y = parseInt(req.body.y);
  let sum = calculator.add(x, y);
  res.send(calculator.printline(x, y, sum));
});

app.get('/sub', (req, res) => {
});

app.get('/mult', (req, res) => {
});

app.get('/div', (req, res) => {

});
*/
let port = 3000;
app.listen(port);
