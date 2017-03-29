var app = angular.module('myApp', ['ui.router','myApp.Controllers', 'myApp.Services']);
angular.module('myApp.Controllers', []);
angular.module('myApp.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html'
        })
}])