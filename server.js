var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var passport	= require('passport');
//var config      = require('./config/database'); // get db config file
//var User        = require('./app/models/user'); // get the mongoose model
var port        = process.env.PORT || 3000;
var jwt         = require('jwt-simple');

app.use(express.static(__dirname + '/public'));  
 
// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
// log to console
app.use(morgan('dev'));
 
// Use the passport package in our application
app.use(passport.initialize());
 
// demo Route (GET http://localhost:8080)
// app.get('/', function(req, res) {
//   	res.send('Hello! The API is at http://localhost:' + port + '/api');
// });

app.get('*', function(req, res) {
        res.sendFile('Tour_Home.html', { root: './public' }); // load the single view file (angular will handle the page changes on the front-end)
    });
 
// Start the server
app.listen(port);
console.log('Server is up: http://localhost:' + port);