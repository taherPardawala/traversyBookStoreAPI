var express = require('express')
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;