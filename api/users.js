const express=require('express');
const router=express.Router();
const dbConfig = require('./../config/db');
const users = require('./../controller/users');

router.get('/', function(req,res){
    users.getUsers(function(err,users){
        console.log('get user function from / router of users');
        res.send(users);
    });
});

router.get('/create', function(req, res){
    users.createUser(function(err){
        if(err) console.log(err);
    });
    res.send('Created');
});

router.get('/update', function(req, res){
    users.updateOne();
    res.send('User data updated');
});

module.exports = router;