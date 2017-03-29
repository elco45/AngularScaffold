angular.module('myApp.Services').factory('HomeService',['$http',
	function($http){
		var baseUrl = "http://localhost:8000/";
		return {
			GetMeow: function(){
				return $http.get(baseUrl + "v1/getMeow");
			}
		}
}])