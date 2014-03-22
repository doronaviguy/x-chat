angular.module('app').controller('usersCtrl', ['$scope','$rootScope','chatApi','session',
	function ($scope, $rootScope, chatApi, session) {

		$scope.users = null;

		chatApi.onUpdateUsers(function (ev, data) {
			$scope.users = data.users;
		});

}]);