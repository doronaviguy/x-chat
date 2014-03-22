angular.module('app').factory('chatApi',['socket', '$q', function(socket, $q) {

    function onUpdateChat(callback) {
        socket.on('updatechat', callback);
    }

    function onUpdateUsers(callback) {
        socket.on('updateusers', callback);
    }
    function onUpdateRooms(callback){
        socket.on('updaterooms', callback);
    }

    function switchRoom(room) {
        socket.emit('switchRoom', room);
    }
    function sendChatMessage(data) {
        socket.emit('sendchat', data);
    }
    function addUser(newUser) {
        socket.emit('adduser', newUser);
    }

    return {
        onUpdateChat: onUpdateChat,
        onUpdateUsers: onUpdateUsers,
        switchRoom : switchRoom,
        sendChatMessage: sendChatMessage,
        addUser: addUser
    };

}]);
