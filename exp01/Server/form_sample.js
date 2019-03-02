/*jshint esversion: 6 */

// Import the express module
var express = require('express');
var path = require('path');

// A static website
var app = express();
var staticRoot = path.join(path.dirname(__dirname), 'webstatic');
console.log(`Serving static files from ${staticRoot}`);
app.use('/web', express.static(staticRoot));


// listen at port 8080
app.listen(8080);