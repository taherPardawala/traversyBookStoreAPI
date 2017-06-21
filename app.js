var express = require('express')
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.use(express.static('./public'));
app.use(bodyparser.json());
app.use('/api',require('./routes/api'));

app.get('/', function(req, res){
    res.send('User the API end point /api/books or /api/genres');
});

app.listen(3000, function(){
    console.log('Listening on porty 3000');
});