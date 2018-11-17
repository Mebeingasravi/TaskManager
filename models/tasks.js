var mongoose = require('mongoose');
var  Schema= mongoose.Schema;

var taskSchema=new Schema({
    title:{
        type:String,
        required:false
    },
    isDone:{
        type:String,
        required:false
    }
});

var taskModel = module.exports = mongoose.model('tasks',taskSchema);