var express = require('express');
var router = express.Router();

router.get('/genres', function(req, res){
    res.send({type : 'GET'});
});

router.post('/genres', function(req, res){
    
});

router.put('/genres', function(req, res){
    
});

router.delete('/genres', function(req, res){
    
});

module.exports = router;