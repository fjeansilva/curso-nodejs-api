const express     = require('express');
const bodyParser  = require('body-parser');
const app = express();

const logger = (req, res, next) => {
  console.log('logger');
  next();
}

const validate = (req, res, next) => {
  if (!req.query.token) {
    res.send('Invalid request');
  }
  next();
}

app.use(logger);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/route', validate, (req, res) => {
  res.send('That is ok' + req.query.token);
});

app.get('/', (req, res) => {
  res.send('Welcome to the NodeJS');
});

app.listen(3000, () => console.log('Server running'));