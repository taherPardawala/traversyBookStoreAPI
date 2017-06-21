var express = require('express');
var router = express.Router();
var Genre = require('../models/genre');
var Book = require('../models/book');

router.get('/genres', function(req, res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

router.get('/books', function(req, res){
    Book.getBooks(function(err, books){
        if(err){
            throw err;
        }
        res.json(books);
    });
});

router.get('/books/:_id', function(req, res){
    Book.getBookById(req.params._id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

router.post('/genres', function(req, res){
    Genre.addGenre(req.body, function(err, genere){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

router.post('/books', function(req, res){
    Book.addBook(req.body, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });    
});

router.put('/genres', function(req, res){
    
});

router.delete('/genres', function(req, res){
    
});

module.exports = router;