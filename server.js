var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var index = require('./routes/index');
var tasks = require('./api/tasks');
var users = require('./api/users');

mongoose.connect('mongodb://ravi:'+encodeURIComponent("Ravi@9999")+'@ds157223.mlab.com:57223/crm',['users']);
mongoose.connection;

var app = express();

//View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

// Set Static Folder
//app.use(express.static(path.join(__dirname),'clients'));
app.use(express.static('/clients'));

//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', index);
app.use('/api/tasks', tasks);
app.use('/api/users', users);

app.listen(3000, function(){
    console.log('Server started on port 3000');
});