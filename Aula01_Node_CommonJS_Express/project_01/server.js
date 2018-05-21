const http = require('http');
const funcao = require('./helpers.js');

http.createServer(function(request, response){
  response.write(`Hello Node WEB ${funcao.mult(4, 6)}`);
  response.end();
}).listen(7000, function(){
  console.log('estou rodando');
});