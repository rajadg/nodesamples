// Import the express module
var express = require('express');


// ------------ Static Content ----------
// Import serve-static module to serve static contents
var serveStatic = require('serve-static');
var path = require('path');
// Create an object of express
var app = express();
var staticRoot = path.join(path.dirname(__dirname), 'webstatic');
console.log(staticRoot);
app.use('/web', serveStatic(staticRoot));


// ------------ Basic HTTP GET handler ----------
// HTTP GET handler for root url (/) will return "Hello world!" message
app.get('/', function(req, res){
    res.send("Hello world!");
});


// ----------- Basic route --------------
// Add a route
var api_about = express.Router();
// Add a get handler which returns some string
api_about.get('/', function(req, res) {
    res.send('<h1>Basic express application</h1>');
});
// Add the router for relative url /api/about
app.use('/api/about', api_about);


// Listen in the target port
app.listen(8080);