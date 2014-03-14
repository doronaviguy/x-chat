angular.module('app').controller('chatCtrl',['$scope', 'chatApi', 'session', function ($scope, chatApi, session) {

    $scope.state = {welcomeShwn: false};
    $scope.messages = [];
    $scope.chatTxtBox = "";
    $scope.username = "";
    $scope.users = [];

    $scope.sendChatMsg = function () {
        if($scope.chatTxtBox.length) {
            chatApi.sendChatMessage($scope.chatTxtBox);
            $scope.chatTxtBox = "";
        }
    };


    chatApi.onUpdateChat(function (ev, data) {
        console.log('updatechat ' + data );
        if(typeof data === 'string')
            return;
        $scope.messages.push({username: data.username, data: data.data, isMe: session.getUser().username === data.username});
    });

    chatApi.onUpdateUsers(function (ev, data) {
        console.log('updateusers ' + data);
    });


}]);
