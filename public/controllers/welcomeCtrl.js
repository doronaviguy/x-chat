

angular.module('app').controller('welcomeCtrl', ['$scope','$rootScope','socket','session', function ($scope, $rootScope, socket, session) {
    $scope.room ="";
    $scope.name = session.getUser().username;
    $scope.badUsername = false;
    
    $scope.init = function() {
        var room = document.location.pathname || '';
        $scope.room = room;
        if(!$scope.name) {
            $scope.badUsername = true;
            return;
        }
        socket.emit('adduser', $scope.name);
        setTimeout(function() {
            socket.emit('switchRoom', $scope.room);
        }, 1);
        $scope.username = $scope.name;
        $rootScope.username = $scope.name;
        debugger;
        session.setUser( { username: $scope.name} );
        $scope.state.welcomeShwn = true;
        $rootScope.room = room;
        
        
    };


    socket.on('init', function (data) {
        alert('scoket init');
        $scope.name = data.name;
        
        $scope.users = data.users;
    });
}]);

