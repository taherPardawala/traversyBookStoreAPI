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

router.post('/genres', function(req, res){
    
});

router.put('/genres', function(req, res){
    
});

router.delete('/genres', function(req, res){
    
});

module.exports = router;