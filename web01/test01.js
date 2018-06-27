

var http = require("http");

var server_port = 8080;

http.createServer(function(request, response){
    response.writeHead(200, {"content-type": "text/plain"});
    response.end("hello world");
}).listen(server_port);

console.log("listening at port " + server_port);
console.log("url: http://127.0.0.1:" + server_port + "/");