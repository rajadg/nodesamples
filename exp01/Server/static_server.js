/*jshint esversion: 6 */

// Import the express module
var express = require('express');

var path = require('path');


// ------------ Static Content ----------
// Create an object of express
var app = express();

app.use('*', function(req, res, next){
    var timeStamp = new Date();
    console.log(`[${timeStamp.toJSON()}] ${req.method} ${req.originalUrl}`);
    next();
});

var staticRoot = path.join(path.dirname(__dirname), 'webstatic');
console.log(`Serving static files from ${staticRoot}`);
app.use('/web', express.static(staticRoot));



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


// -------- Dynamic Urls ---------------------
var api_user = express.Router();
api_user.get('/:userid', function(req, res){
    res.send(`<h1>User requested is : ${req.params.userid}</h1>`);
});
app.use('/api/user', api_user);
// Example: http://localhost:8080/api/user/tester


// -------- Multiple params sample ---------------------
var api_product_find = express.Router();
api_product_find.get('/:category/:pagesize([0-9]{1,3})/:pagenumber([0-9]{1,3})', function(req, res){
    res.send(`<h1>The Category requested is : ${req.params.category}</h1>
    <h2>page: ${req.params.pagenumber}, size: ${req.params.pagesize}</h2>`);
});
app.use('/api/products', api_product_find);
// Example: http://localhost:8080/api/products/mobiles/100/1


// Listen in the target port
app.listen(8080);