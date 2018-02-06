var app = angular.module('aniwardsApp', []);

app.controller('aniwardsController', function($scope, $http) {
    $http.get("http://geo1088.me/animeawards/awards.json").then(function(response) {
		$scope.awards = response.data.awards;
		$scope.$broadcast('dataloaded');
		//console.log($scope.awards);
	});
});