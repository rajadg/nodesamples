Middleware
---

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

* A middleware is executed before the actual get/set handlers are executed.
* The middleware functions are chained one after another; so calling the next middleware in the chain marks the end of current middleware execution.
* A middleware is also capable of modifying request and response objects.
* A middleware can also end the processing of a request if required.

More details in links: 
- https://expressjs.com/en/guide/using-middleware.html
- https://expressjs.com/en/guide/writing-middleware.html

### Structure of a Middleware function

![structure of middleware function goes here](./images/express-middleware-structure.PNG "Middleware structure")

### Built-in middlewares
Express has the following built-in middleware functions:

- `express.static` serves static assets such as HTML files, images, and so on.
- `express.json` parses incoming requests with JSON payloads. _(Express 4.16.0 onwards)_
- `express.urlencoded` parses incoming requests with URL-encoded payloads. _(Express 4.16.0 onwards)_

### Creating our own middleware
#### [1] Basic Middleware
A middle is a function that accepts 3 arguments (request, response, next).
- The **request** is request object, **resposne** is the response object, **next** is a function which is actually the next middleware in the chain.
- The implementation function of middleware must call the 'next' function at the end of execution.
- The middleware  must be passed as second argument to the **app.use** method.
```javascript
// Single Middleware function to log request protocol
app.use('/things', function (req, res, next) {
    console.log("A request for things received at " + Date.now());
    next();
});
```

#### [2] Multiple Middlewares
The second, third, etc parameters of the **app.use** method are all middlewares. We can pass any number of middlewares as arguments to the **app.use** method.
```javascript
// Assign multiple middlewares to the whole application
app.use('/user/:id', function (req, res, next) {
    // Inside First Middleware: Print request URL
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    // Inside Second Middleware: Print request type
    console.log('Request Type:', req.method);
    next();
});
```


#### [3] Middleware for a route
The middleware assigned to an application applies to the whole application. If a middleware is assigned to a route applies to that route only. Assigning a middleare to a route is very similar to assigning a middleware to application.
```javascript
// Create a router
var router = express.Router();
// Assign a middle ware to the router
router.use(function (req, res, next) {
    console.log('[Route only] Time:', Date.now());
    next();
});
// Implement HTTP GET Handler for the router
router.get('/', function (req, res) {
    res.send('inside route');
});
// Use the router in the application
app.use('/route', router);
```

#### [4] Adding middleware for all urls
Using the path '*' will add the middleware to all URLs. In addition to this we need to add this universal middleware as the first middleware of the app. 

```javascript
// Create an object of express
var app = express();
// Assign the universal middleware for path '*' as
// the first middle ware of the application
app.use('*', function(req, res, next){
    var timeStamp = new Date();
    console.log(`[${timeStamp.toJSON()}] ${req.method} ${req.originalUrl}`);
    next();
});

// All other middlewares, GET/POST/etc handlers, routers, etc.
```
