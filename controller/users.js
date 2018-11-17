var usermodole = require('./../models/users');
var userM = usermodole;

module.exports.getUsers = function(callback,limit){
    console.log('getUsers Users from module');
    userM.find(callback).limit(limit);
};

module.exports.getUsersById = function(callback,limit){
    console.log('getUserById from module');
    userM.findById(callback);
};

module.exports.createUser = function(){
    userM.create({Email:'abcd@gmail.com',pwd:'123456',fname:'a',lname:'b'});
};

module.exports.updateOne = function(){
    userM.findOne({email:'abcd@gmail.com'}, function(err, res){
        if(err) console.log(err);
        res.fname = 'test_update';
        res.save();
        console.log('successfully updated');
    });
};