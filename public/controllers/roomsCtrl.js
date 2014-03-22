angular.module('app').controller('roomsCtrl', ['$scope','$rootScope','chatApi','session',
	function ($scope, $rootScope, chatApi, session) {

		$scope.rooms = null;
		chatApi.onUpdateRooms(function(data) {
			$scope.rooms = data.rooms;
		});
}]);