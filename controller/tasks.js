var tasksmodel = require('./../models/tasks');
var tasksM = tasksmodel;

module.exports.getTasks = function(callback,limit){
    console.log('getTask function called');
    tasksM.find(callback).limit(limit);
};

module.exports.createTask = function(callback, limit){
    tasksM.create({});
}