
# Express JS Development #

Express JS is NodeJS based Web application framework; also open source. It can serve web pages, static content, run rest API in server side, and also perform a lot stuff that can be done by a Web Server.

---
## Basics

### 1. Installation
Simply run the following command in a nodejs application:
```bash
npm install express --save
```
### 2. Hello World sample
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

### 3. Run the application
Run the application like any nodejs app:
```bash
node MyServer.js
```

---

