/*jshint esversion: 6 */

// Import the express module
var express = require('express');
var bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');
var path = require('path');


// ------------ Static Content ----------
// Create an object of express
var app = express();
app.use(bodyParser.json());

// ------------ Basic HTTP GET handler ----------
// HTTP GET handler for root url (/) will return "Hello world!" message
app.get('/', function(req, res){
    res.send("Hello world!");
});

var localAPIs= express.Router();

var loginSessions = {};
localAPIs.post('/login', function(req, res){
    console.log(`request body: ${JSON.stringify(req.body)}`);
    const timestamp = Date.now();
    if ('user' in req.body & req.body.user != '' && req.body.pwd == 'pwd') {
        setTimeout(() => {
            const entry = {
                id: uuidv4(),
                userName: req.body.user.toString(),
                refresh_token: uuidv4(),
                created: timestamp,
                expires: timestamp + (24 * 3600 * 1000),
                issued_tokens: {}
            };
            loginSessions[entry.refresh_token] = entry;
        res.send(entry);
        }, 1000);
    } else {
        res.statusCode = 401;
        res.send('Not Authorized');
    }
});

localAPIs.post('/admin/sessions', function(req, res){
    console.log(`Time in MS ${ Date.now()}`);
    res.send({
        loginSessions: loginSessions,
        accessTokens: accessTokens
    });
});

let accessTokens = {};
localAPIs.post('/refresh', function(req, res){
    console.log(`request body: ${JSON.stringify(req.body)}`);
    console.log(`Time in MS ${ Date.now()}`);
    const timestamp = Date.now();
    if ('refresh_token' in req.body && req.body.refresh_token != null) {
        setTimeout(() => {
            if (req.body.refresh_token in loginSessions) {
                let duration = 900;
                if ('duration' in req.body && !isNaN(parseInt(req.body.duration))){
                    duration = parseInt(req.body.duration);
                }
                const session = loginSessions[req.body.refresh_token];
                const access_token =  uuidv4();
                const accessInfo = {
                    refresh_token: req.body.refresh_token,
                    name: session.userName,
                    access_token: access_token,
                    created: timestamp,
                    expires: timestamp + (duration * 1000),
                };
                accessTokens[access_token] = accessInfo;
                session.issued_tokens[access_token] = accessInfo;
                res.send(accessInfo);
            }
            else {
                res.statusCode = 404;
                res.send('refresh_token is invalid');
            }
        }, 1000);
    } else {
        res.statusCode = 400;
        res.send('refresh_token is mandatory');
    }
});

localAPIs.post('/details', function(req, res) {
    const timestamp = Date.now();
    console.log(`request body: ${JSON.stringify(req.body)}`);
    if ('access_token' in req.body && req.body.access_token != null) {
        setTimeout(() => {
            if (req.body.access_token in accessTokens) {
                const access_token = req.body.access_token;
                const accessInfo = accessTokens[access_token]
                const session = loginSessions[accessInfo.refresh_token];
                console.log(`accessInfo.expires: ${accessInfo.expires} and timestamp: ${timestamp}`);
                if (accessInfo.expires < timestamp){
                    res.status = 401;
                    res.send('access_token has already expired');
                } else {
                    res.send(session);
                }
            }
            else {
                res.statusCode = 404;
                res.send('access_token is invalid');
            }
        }, 1000);
    } else {
        res.statusCode = 400;
        res.send('access_token is mandatory');
    }
});

app.use('/api', localAPIs);

app.listen(8080);