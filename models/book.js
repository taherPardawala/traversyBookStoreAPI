var mongoose = require('mongoose');

//Genre Schema
var bookSchema = mongoose.Schema({
    title:{
        type:String,
        require: true
    },
    genre:{
        type:String,
        require: true
    },
    author:{
        type:String,
        require: true
    },
    publisher:{
        type:String,
    },
    pages:{
        type:String,
    },
    image_url:{
        type:String,
    },
    buy_url:{
        type:String,
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

//Get Books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id, callback){
    Book.findById(id, callback);
}

//Add Genre
module.exports.addBook = function(book, callback){
    Book.create(book, callback);
}

//Update Book
module.exports.updateBook = function(id, book, options, callback){
    var query = {_id:id};
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url
    }
    Book.findByIdAndUpdate(query,update, options, callback);
}

//Remove Book
module.exports.deleteBook = function(id, callback){
    var query = {_id:id};
    Book.remove(query, callback);
}