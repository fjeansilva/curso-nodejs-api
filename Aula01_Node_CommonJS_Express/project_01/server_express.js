const express = require('express');

// chamamos o express
const app = express();

// criar uma rota
app.get('/', function(req, res){
  res.send('Bem-vindo ao NODEJS');
});

// criar o listen
app.listen(3000);
