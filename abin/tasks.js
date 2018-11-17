var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var path=require('path');
var db=require(path.join(__dirname)+'\\db.js');

//get all id
router.get('/',function(req,res,next){
    // res.send('API Page');
    db.tasks.find(function(err,tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

// Get task by id
router.get('/:id',function(req,res,next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,task){
        if(err) res.send(err);
        res.json(task);
    });
});

// Post
router.post('/',function(req,res,next){
    var task=req.body;
    if(!task.title || (task.isDone==='')){
        res.status(400);
        res.json({
            'error':'Bad Data'
        });
    } else{
        db.tasks.save(task,function(err,task){
            if(err){
                res.send(err);
            }
            res.send(task);
        });
    }
});

// update value by id
router.put('/:id', function(req,res,next){
    var task=req.body;

    console.log('1');
    if(!task.title){
        console.log('2');
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else{
        db.tasks.update({_id:mongojs.ObjectId(req.params.id)}, task, function(err,task){
            if(err){ res.send(err);}
            res.json();
            console.log('updated');
        });
    }
});

router.delete('/:id',function(req, res, next){
    db.tasks.remove({_id:mongojs.ObjectId(req.params.id)},function(err, task){
        if(err){
            res.send(err);
            console.log('1');
        }
        res.json('task id '+req.params.id+" is deleted");
        console.log('task id '+req.params.id+" is deleted");
    });
});

module.exports = router;