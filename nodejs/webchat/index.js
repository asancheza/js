/*
	Webchat backend with node
*/

// Use express framework
var express = require("express");
var app = express();
var port = 3100;

// View tempalates
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);

// Render template
app.get("/", function(req, res) {
	res.render("page");
});

// Use the public folder to the frontend
app.use(express.static(__dirname + '/public'));

// Listen in port 3100
var io = require('socket.io').listen(app.listen(port));

// When it receives a connection it sends a default message and when you send a message, it send back.
io.sockets.on('connection', function(socket) {
 		socket.emit('message', { message: 'welcome to our chat' });
 		socket.on('send', function(data) {
 		io.sockets.emit('message', data);
	});
});

// Log for the console listen port
console.log("Now listening on port"+port);