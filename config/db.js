var mongoose = require('mongoose');

module.exports.dbconnect = function(callback,connection){
    mongoose.connect('mongodb://ravi:'+encodeURIComponent("Ravi@9999")+'@ds157223.mlab.com:57223/crm',['users']);
    mongoose.connection;
};

module.exports.dbdisconnect = function(){
    mongoose.disconnect();
};