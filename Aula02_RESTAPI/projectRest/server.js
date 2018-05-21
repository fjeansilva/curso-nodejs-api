const express = require('express');
const app = express();
app.use(express.static('public'));
const todos = [];

app.get('/', function(req, res){
  res.send('sdfsdf');
});

app.get('/todos', function(req, res){
  const todo = req.body.todo;
  todos.push(todo);
  res.json(todos)
})


app.listen(5000);