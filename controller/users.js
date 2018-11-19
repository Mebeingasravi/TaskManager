var usermodole = require('./../models/users');
var userM = usermodole;

module.exports.getUsers = function(callback, limit){
    console.log('getUsers Users from module');
    userM.find().limit(limit).exec(callback);
};

module.exports.getUsersById = function(callback,limit){
    console.log('getUserById from module');
    userM.findById('5be8897ffb6fc06239e11081').exec(callback);
};

module.exports.createUser = function(){
    userM.create({Email:'abcd@gmail.com',pwd:'123456',fname:'a',lname:'b'});
};

module.exports.updateOne = function(){
    var conditions = {email:'mebeingasravi@gmail.com'};
    var update = {fname:'updaed_name_updateOne'};
    var option = {multi: false};

    userM.updateOne(conditions, update, (err, res)=>{
        if(err) console.log(err);
        console.log(`Affected Row ${res.modifiedCount}`);
    });
};