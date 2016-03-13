var express = require('express');
var app = express();
var path = require("path");

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/node_modules/jquery/dist/jquery.js', function(req, res){
  res.sendFile(__dirname + '/node_modules/jquery/dist/jquery.js');
});

app.get('/node_modules/underscore/underscore.js', function(req, res){
  res.sendFile(__dirname + '/node_modules/underscore/underscore.js');
});

app.get('/node_modules/backbone/backbone.js', function(req, res){
  res.sendFile(__dirname + '/node_modules/backbone/backbone.js');
});

app.get('/node_modules/backbone.localstorage/backbone.localStorage.js', function(req, res){
  res.sendFile(__dirname + '/node_modules/backbone.localstorage/backbone.localStorage.js');
});

app.get('/models/message.js', function(req, res){
  res.sendFile(__dirname + '/models/message.js');
});

app.get('/collections/messages.js', function(req, res){
  res.sendFile(__dirname + '/collections/messages.js');
});

app.get('/views/message-view.js', function(req, res){
  res.sendFile(__dirname + '/views/message-view.js');
});

app.get('/views/app-view.js', function(req, res){
  res.sendFile(__dirname + '/views/app-view.js');
});

app.get('/routers/router.js', function(req, res){
  res.sendFile(__dirname + '/routers/router.js');
});

app.get('/app.js', function(req, res){
  res.sendFile(__dirname + '/app.js');
});


var server = app.listen(3000);