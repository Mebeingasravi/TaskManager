var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var tasksM = require('./../controller/tasks');

router.get('/',function(req,res){
    tasksM.getTasks(function(err,tasks){
        console.log('/ of tasks called from route');
        res.send(tasks);
    });
});

module.exports = router;