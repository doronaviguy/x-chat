var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	websockets = require('./websockets').init(server),
	path = require('path');


var port = process.env.PORT || 5000;
console.log("app listeneing on %d", port);
server.listen(port);

app.use(express.static('./public'));

// routing
app.get('/', function (req, res) {
	res.sendfile(getIndex());
});

app.get('/:room', function (req, res) {
	var room = req.params.room;
	console.log('room----');
	res.sendfile(getIndex());
});

function getIndex () {

	return process.env.envioremnt === 'production' ?
		path.join(__dirname,'public','dist','index.html') :  path.join(__dirname,'public','index.html');
}





