var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('index.html');
});

router.get('/signup',function(req,res){
    res.send('signup page');
});

module.exports = router;