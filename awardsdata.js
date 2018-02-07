var app = angular.module('aniwardsApp', []);

app.controller('aniwardsController', function($scope, $http) {
	// $http.get("https://geo1088.github.io/animeawards/awards.json").then(function(response) {
	//	$scope.awards = response.data.awards;
	//	$scope.$broadcast('dataloaded');
	//	//console.log($scope.awards);
	// });
	$scope.awards = stuff.awards;
	$scope.$broadcast('dataloaded');
	
	$scope.scrollTo = function (aid){
		var aTag = $("#award-"+ aid);
		$('html,body').animate({scrollTop: aTag.offset().top}, 400);
		
		return false;
	};
});
