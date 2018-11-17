var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema=new Schema({
    Email:{
        type:String,
        required:true
    },
    pwd:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:false
    },
    dob:{
        type:Date,
        required:false
    },
    gender:{
        type:String,
        required:false
    }
});

var userM = module.exports  = mongoose.model('user', schema);
