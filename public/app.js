
var app = angular.module('app', []);


app.run([function () {

}]);







//var socket = io.connect('http://localhost:8080');
////var socket = io.connect('http://bchat.aws.af.cm/');
//var myUserName;
//// on connection to server, ask for user's name with an anonymous callback


//socket.on('connect', function () {
//  var room = 'defualt';
//  room = document.location.pathname.replace('/','') || room;

//  UI.setTitle('#'+room);
//  switchRoom(room);
//  $("#choose-name").show();
//  $("#overlay").show();


//  $("#btn-go").on('touchstart click', function () {

//    $("#choose-name").removeClass('pop-in').addClass('pop-out');
//    $("#overlay").removeClass('fade-in').addClass('fade-out');
//    var user = $("#username-text").val() || 'empty';
//    socket.emit('adduser', user);
//    myUserName = user;
//    localStorage.username = user;
//  });


//});

//function switchRoom(room) {
//  socket.emit('switchRoom', room);
//}


//// listener, whenever the server emits 'updatechat', this updates the chat body
//socket.on('updatechat', function (username, data) {
//  var d = new Date();
//  var scroller = $('#scroller');
//  var msg = $('<article class="message fade-in' + (username == myUserName ? ' me' : '') + '"><div class="avatar"><span class="sphere">' + username.substr(0, 2) + '</span></div><div class="block"><p>' + data + '</p></div></article>');
//  var date = $('<div class="date-break" data-date=""><span>at ' + d.getHours() + ':' + d.getMinutes() + '</span></div>');
//  $('#messages').append(date);
//  $('#messages').append(msg);
//  scroller.animate({ scrollTop: scroller[0].scrollHeight }, 350);
//  //$("#cover").css({ right: 0, top: 0, width: 30, 'background-color': 'red' });
//});

//// listener, whenever the server emits 'updateusers', this updates the username list
//socket.on('updateusers', function (data) {
//  $('#users').empty();
//  $.each(data, function (key, value) {
//    $('#users').append('<div class="pop-in">' + key + '</div>');
//  });
//});

//// on load of page
//$(function () {
//  // when the client clicks SEND
//  $('#chat-send').click(function () {
//    var message = $('#chat-input').val();
//    $('#chat-input').val('');
//    // tell server to execute 'sendchat' and send along one parameter
//    socket.emit('sendchat', message);
//  });

//  // when the client hits ENTER on their keyboard
//  $('#chat-input').keypress(function (e) {
//    if (e.which == 13) {
//      $(this).blur();
//      $('#chat-send').focus().click();
//    }
//  });
//});
