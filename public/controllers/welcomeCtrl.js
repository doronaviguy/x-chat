

angular.module('app').controller('welcomeCtrl', ['$scope','$rootScope','chatApi','session', function ($scope, $rootScope, chatApi, session) {
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
        chatApi.addUser($scope.name);

        setTimeout(function() {
            chatApi.switchRoom($scope.room);
        }, 1);
        $scope.username = $scope.name;
        $rootScope.username = $scope.name;
        session.setUser( { username: $scope.name} );
        $scope.state.welcomeShwn = true;
        $rootScope.room = room;

    };

}]);
