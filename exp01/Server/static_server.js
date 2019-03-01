// Import the express module
var express = require('express');
// Import serve-static module to serve static contents
var serveStatic = require('serve-static');
var path = require('path');
// Create an object of express
var app = express();
var staticRoot = path.join(path.dirname(__dirname), 'webstatic');
console.log(staticRoot);
app.use('/web', serveStatic(staticRoot));
// HTTP GET handler for root url (/) will return "Hello world!" message
app.get('/', function(req, res){
    res.send("Hello world!");
});
// Listen in the target port
app.listen(8080);