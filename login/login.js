'use strict';

angular.module("billAdmApp.login", [])

.config(["$stateProvider", function($stateProvider) {
	
	$stateProvider
		.state("login", {
			url: "/login",
			views: {
				"login": {
					templateUrl: "login/login.html",
					controller: "LoginCtrl",
				},
			},
			
		});

}])

.controller("LoginCtrl", ["$scope", "$http", "$state", function($scope, $http, $state) {
	
	console.log("LoginCtrl");

	// $scope.login = {};

	$scope.SignIn = function() {
		console.log($scope.login);
		$http.post('/api/v1/login',
			$scope.login
		).then(
			function(res) {
				console.log(res);
				$state.go("about");
			},
			function(err) {
				console.log(err);
			}
		);

	};

}])