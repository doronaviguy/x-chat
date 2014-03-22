var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	websockets = require('./websockets').init(server),
	path = require('path');


var port = process.env.PORT || 5000;
console.log("app listeneing on %d", port);
server.listen(port);

// routing

app.get('/', function (req, res) {
	console.log('root ');
	res.sendfile(getIndex());
});

app.get('/:room', function (req, res) {
	var room = req.params.room;
	console.log('room----');
	res.sendfile(getIndex());
});

function getIndex () {
	return path.join(__dirname,'public','index.html');
}



app.configure('development', function() {
	console.log('development Enviorment');
	app.use(express.static(path.join(__dirname,'public')));
  	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure('production', function() {
	console.log('production Enviorment');
	app.use(express.static(path.join(__dirname,'dist')));
  	app.use(express.errorHandler());

});



