



angular.module('app').controller('chatCtrl',['$scope', 'socket', 'session', function ($scope, socket, session) {

  $scope.state = {welcomeShwn: false};
  $scope.messages = [];
  $scope.chatTxtBox = "";
  $scope.username = "";
  $scope.users = [];


  $scope.$on('socket:error', function (ev, data) {
    console.log('ERRROR '+data);
  });

  $scope.sendChatMsg = function () {
    if($scope.chatTxtBox.length > 0) {
        socket.emit('sendchat', $scope.chatTxtBox);
        $scope.chatTxtBox = "";
    }
  };

  $scope.$on('socket:sendchat', function (ev, data) {
    console.log('sendchat ' + data);
  });

  $scope.$on('socket:updatechat', function (ev, data) {
    console.log('updatechat ' + data );
    if(typeof data === 'string')
        return;
    $scope.messages.push({username: data.username, data: data.data, isMe: session.getUser().username === data.username});
  });

  $scope.$on('socket:updateusers', function (ev, data) {
    console.log('updateusers ' + data);
  });


}]);


