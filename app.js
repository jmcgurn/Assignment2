var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

//Setup for first route
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/Views/index.html"));
})

app.get('/todo', function(req, res){
    res.sendFile(path.join(__dirname+"/Views/todo.json"));
    
})

app.get('/readtodo', function(req, res){
    res.sendFile(path.join(__dirname+"/Views/readtodo.html"));
})

app.use(express.static(__dirname+'/Views'));

app.use('/', router);


app.listen(3000, function(){
console.log("Server is running on port 3000")
});