// Import the express module
var express = require('express');
// Create an object of express
var app = express();
// HTTP GET handler for root url (/) will return "Hello world!" message
app.get('/', function(req, res){
    res.send("Hello world!");
});
// Listen in the target port
app.listen(8080);