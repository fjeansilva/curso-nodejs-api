// Importando o Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/firstDB');


// Definindo o Schema do documento
const bookSchema = new mongoose.Schema({
  name: String,
  author: String
});

// Criando o model MyBook
const MyBook = mongoose.model('book', bookSchema);

// Criando um book
MyBook.create({
  name: 'Avengers - Infinity War',
  author: 'Jean Silva'
}).then(function(err, book){
  console.log(err, book);
});
