angular.module('app').factory('socket', ['$rootScope', '$window', function ($rootScope, $window) {
    var socket = $window.io.connect();
    var socketImpl = {
        on: function (eventName, callback) {
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                    $rootScope.$apply(function () {
                      if (callback) {
                        callback.apply(socket, args);
                      }
                    });
                });
            }
        };
    socketImpl.on('error', function (ev, data) {
        console.log('ERRROR '+data);
    });
    return socketImpl;
}]);
