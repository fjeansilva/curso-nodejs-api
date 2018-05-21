const express     = require('express');
const bodyParser  = require('body-parser');
const app = express();

const logger = (req, res, next) => {
  console.log('logger');
  next();
}

app.use(logger);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the NodeJS');
});

app.listen(3000, () => console.log('Server running'));