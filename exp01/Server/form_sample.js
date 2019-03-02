/*jshint esversion: 6 */

// Import the express module
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// A static website
var app = express();
var staticRoot = path.join(path.dirname(__dirname), 'webstatic');
console.log(`Serving static files from ${staticRoot}`);
app.use('/web', express.static(staticRoot));

// Form handling
// Add body parser middleware to parse application/xwww-urlencoded post
app.use(express.urlencoded({extended: false}));

// Receive the posted form data
app.post('/web/userInfo', function(req, res){
    console.log(req.body);
    var receivedData = {
        name: req.body.name,
        age: req.body.age
    };
    res.send(`Posted data: ${JSON.stringify(receivedData, space=' ')}`);
 });

// listen at port 8080
app.listen(8080);