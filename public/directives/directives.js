

angular.module('app').directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
})
.directive('focus', function($timeout, $parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.$watch(attrs.focus, function(newValue, oldValue) {
                if (newValue) { 
                    element[0].focus(); 
                }
            });
      }
    };
})
.filter('cut', function () {
    return function (value, wordwise, max, tail) {
        if (!value) {
            return '';
        }
        return value.substr(0,8);
    };
});
