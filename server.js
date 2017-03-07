/*

// import http module
var http = require('http');

// handle sending requests and returning responses
function requestHandler(req, res) {

// return a string
	res.end('Hello World~');
}

// create the server
var server = http.createServer(requestHandler);

// start server, listen on specified port
server.listen(8080, function() {
	console.log('yeah im listening on port 8080');
});

*/

// EXPRESS //

var express = require('express');
var app = express();
var port = 8080;

// start server
app.listen(port, function(){
	console.log('app started');
})

// route our app

app.get('/', function(req, res){
	res.send('hello!');
})

// this is a different comment than was here before