var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	websockets = require('./websockets').init(server);

console.log("app listeneing on 8080");
var port = process.env.PORT || 5000;

server.listen(port);

app.use(express.static('./public'));

// routing
app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});

app.get('/:room', function (req, res) {
	var room = req.params.room;
	console.log('room----');
	res.sendfile(__dirname + '/index.html');
});







