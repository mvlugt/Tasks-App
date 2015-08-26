//Requiring necessary dependencies
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var http = require('http');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//Creating express instance and setting port variable
var app = express();
var port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/chores-app');

//Setting up express app
app.use(express.static(__dirname + '/public')); //set /public as static directory
app.use(morgan('dev')); //logging requests to console
app.use(bodyParser.json()); //need for req.body json access


//app.disable('etag');

require('./routes.js')(app);

var server = http.createServer(app).listen(port, function() {
	console.log('Server listening on port ' + port);
});

//var io = require('socket.io').listen(server);
