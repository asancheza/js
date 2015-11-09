var myApp = angular.module('myApp', ['ngRoute', 'peopleControllers']);
myApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   when('/list', {
      templateUrl: 'partials/list.html',
	  controller: 'ListController'
   }).
   when('/more/:itemId', {
      templateUrl: 'partials/more.html',
	  controller: 'InfoController'
   }).
   otherwise({
      redirectTo: '/list'
   });
}]);