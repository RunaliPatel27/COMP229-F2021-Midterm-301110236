let mongoose = require('mongoose');

// create a model class

let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
  collection: "books_list"
});

module.exports = mongoose.model('Book', bookModel);