angular.module('myApp.Controllers')
	.controller('HomeController',['HomeService','$scope', 
		function(HomeService,$scope){
		$scope.home = "asd";

		$scope.hello = function(){
			HomeService.GetMeow().then(function(response){
				$scope.home = response.data;
			})
		}

}])