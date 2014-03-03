angular.module('app').factory('session',['$q', function($q) {
    
    
    var username = localStorage.username || '';
    var userId = localStorage.userId || '';
    
    function setUser(user) {
        username = user.username || '';
        userId = user.id || '';
        localStorage.username = username;
        localStorage.userId = userId;
    }
    function getUser() {
        return {
            username: username,
            userId: userId
        };
    }
    
    return {
        setUser: setUser,   
        getUser: getUser
    };


}]);