var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function ($scope, $http) {
         $http.get('js/data.json').success(function(data) {
            $scope.people = data;
			$scope.peopleOrder = 'name';
         });
}]);