var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    console.log('tasks router called');
    res.send('/ router in tasks');
});


router.get('/page',function(req,res){
    console.log('tasks/page router called');
    res.send('/page router in tasks');
});

module.exports = router;










// var mongojs = require('mongojs');
// var db = mongojs('mongodb://ravi:'+encodeURIComponent("Ravi@9999")+'@ds157223.mlab.com:57223/crm',['tasks']);

// router.get('/tasks',function(req,res,next){
//     // res.send('API Page');
//     db.tasks.find(function(err,tasks){
//         if(err){
//             res.send(err);
//         }
//         res.json(tasks);
//     });
// });

// router.get('/task/:id',function(req,res,next){
//     db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,task){
//         if(err) res.send(err);
//         res.json(task);
//     });
// });

// router.post('/task',function(req,res,next){
//     var task=req.body;
//     if(!task.title || (task.isDone==='')){
//         res.status(400);
//         res.json({
//             'error':'Bad Data'
//         });
//     } else{
//         db.tasks.save(task,function(err,task){
//             if(err){
//                 res.send(err);
//             }
//             res.send(task);
//         });
//     }
// });

// router.put('/task/:id', function(req,res,next){
//     var task=req.body;
//     var updTask={};

//     console.log('1');
//     if(!task.title){
//         console.log('2');
//         res.status(400);
//         res.json({
//             "error":"Bad Data"
//         });
//     } else{
//         db.tasks.update({_id:mongojs.ObjectId(req.params.id)}, task, function(err,task){
//             if(err){ res.send(err);}
//             res.json(getTasks);
//             console.log('3');
//         });
//     }
// });

// router.delete('/task/:id',function(req, res, nex){
//     db.task.remove({_id:mongojs.ObjectID(req.params.id)},function(err, task){
//         if(err){
//             res.send(err);
//             console.log('1');
//         }
//         res.json(task);
//         console.log('task id '+req.params.id+" is deleted");
//     });
// });

// module.exports = router;