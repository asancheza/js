var peopleControllers = angular.module('peopleControllers', ['ngAnimate']);

peopleControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
         $http.get('js/data.json').success(function(data) {
            $scope.people = data;
			$scope.peopleOrder = 'name';
         });
}]);

peopleControllers.controller('InfoController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
         $http.get('js/data.json').success(function(data) {
            $scope.people = data;
			$scope.whichItem = $routeParams.itemId;
			
			if ($routeParams.itemId > 0) {
			   $scope.prevItem = Number($routeParams.itemId) - 1;
			} else {
			   $scope.prevItem = $scope.people.length - 1;
			}
			
			if ($routeParams.itemId < $scope.people.length - 1) {
			   $scope.nextItem = Number($routeParams.itemId) + 1;
			} else {
			   $scope.nextItem = 0;
			}
        });
}]);