
# Express JS Development #

Express JS is NodeJS based Web application framework; also open source. It can serve web pages, static content, run rest API in server side, and also perform a lot stuff that can be done by a Web Server.

Following are the contents of this document:
1. [Basics](#Basics) A simple hello world sample
2. [Static Contents](#Static%20Contents) How to serve static contents
3. [Nodemon](#Nodemon) Useful tool to speed up development
4. [Routing](#Routing) How to peform Routing

---

## Basics

#### 1.1. Installation
Simply run the following command in a nodejs application:
```bash
npm install express --save
```
#### 1.2. Hello World sample
A Basic hello world application with express is less than 10 lines. Just create an object for express, assign a get method and start listening in the target port. Example code:
`MyServer.js`
```javascript
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
```

#### 1.3. Run the application
Run the application like any nodejs app:
```bash
node MyServer.js
```

---

## Static Contents

We can serve static contents in an express application using 'serve-static' module. This is a middleware in express, which is also available with simple http server. (refer: https://www.npmjs.com/package/serve-static)

#### 2.1 Installation
Install the package using following command:

```bash
npm install serve-static --save
```

#### 2.2 Sample Code
Add the following code to express app to include static contents:
```javascript
// Create an object of express
var app = express();

// Import serve-static module to serve static contents
var serveStatic = require('serve-static');
var path = require('path');
// Get the path of the folder with static contents
var staticRoot = path.join(path.dirname(__dirname), 'webstatic');
// Link this path to the /web relative url
app.use('/web', serveStatic(staticRoot));

app.listen(8080);
```

Now if user tries to open the url `http://localhost:8080/web/index.html` in the browser, the index.html file in the local folder 'webstatic' will be displayed.
*Note: The urls `http://localhost:8080/web` and `http://localhost:8080/web/index.html` both display same content in browser*

---

## Nodemon

We can use `nodemon` to automatically recompile and restart the application whenever some source code is edited. The `nodemon` library can be installed globally and useful for not only express, but also running other nodejs applications.

Install with following command:
```bash
npm install -g nodemon
```

Run the express application like this:
```bash
nodemon MyServer.js
```

Now whenever the file `MyServer.js` is modified (and saved), then nodemon will automatically restart the application with latest code so this is immensly helpful with development.

---

## Routing

We can add multiple routes to an express application. Each route can do a specific function. For example we can add one route per REST API which is implemented in the express application. The routing is done using the router object created using funciton call `express.Router()`. This object can be assigned GET, POST, PUT, DELETE, etc handlers and then used in the express application.
Example code:
```javascript
var app = express();

// Add a route
var api_about = express.Router();
// Add a get handler which returns some string
api_about.get('/', function(req, res) {
    res.send('<h1>Basic express application</h1>');
});
// Add the router for relative url /api/about
app.use('/api/about', api_about);


app.listen(8080);
```
Here the url `http://localhost:8080/api/about` will return the about information above. The first paramter for **app.use** method is the relative url, the second parameter can be the router or a route based middleware like `serve-static` which can serve static content. In the above example, we have used a router.

---

