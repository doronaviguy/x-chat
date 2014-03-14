

exports.init = function (server) {
  console.log("websockets init");
  var io = require('socket.io').listen(server, { log: false });
  console.log("websockets init OK");



  var usernames = {};
  var rooms = ['room1', 'room2', 'room3'];


  io.sockets.on('connection', function (socket) {

    socket.on('sendchat', function (data) {
      //io.sockets.emit('updatechat', socket.username, data);
      if (data)
        io.sockets.in(socket.room).emit('updatechat', {username:socket.username, data:data});
    });

    socket.on('adduser', function (username) {
      socket.username = username;
      if (!socket.room)
        socket.room = 'default';

      socket.join(socket.room);
      usernames[username] = username;
      var msg = {username:'SERVER', data: (username + ' have connected to room ' + socket.room)};
      socket.emit('updatechat', msg);
      socket.broadcast.to(socket.room).emit('updatechat', msg);
      io.sockets.emit('updateusers', usernames);

    });

    socket.on('switchRoom', function (newroom) {
      if (socket.room)
        socket.leave(socket.room);
      socket.join(newroom);
      socket.emit('updatechat', 'SERVER', 'you have connected to ' + newroom);
      socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.username + ' has left this room');
      socket.room = newroom;
      socket.broadcast.to(newroom).emit('updatechat', 'SERVER', socket.username + ' has joined this room');
      socket.emit('updaterooms', rooms, newroom);
    });


    socket.on('disconnect', function () {
      delete usernames[socket.username];

      io.sockets.emit('updateusers', usernames);
      socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
      socket.leave(socket.room);
    });
  });
};