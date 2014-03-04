//var express = require('express'),
//	app = express(),
//	http = require('http'),
//	server = http.createServer(app),
//	websockets = require('./websockets').init(server);
//
//var port = process.env.PORT || 80;
//
//console.log("app listeneing on %d", port);
//server.listen(port);
//
//app.use(express.static('./public'));
//
//// routing
//app.get('/', function (req, res) {
//	res.sendfile(__dirname + '/index.html');
//});
//
//app.get('/:room', function (req, res) {
//	var room = req.params.room;
//	console.log('room----');
//	res.sendfile(__dirname + '/index.html');
//});
//
//
//
//
//
//
//

var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});