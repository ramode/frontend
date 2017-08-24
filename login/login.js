'use strict';

angular.module("billAdmApp.login", [])

.config(["$stateProvider", function($stateProvider) {
	
	$stateProvider
		.state("login", {
			url: "/login",
			views: {
				"loginform": {
					templateUrl: "login/login.html",
					controller: "LoginCtrl",
				},
			},
			
		});

}])

.factory("UserService", function($http, $q) {

	var obj = {};
	obj.isAuthed = false;
	obj.roles = [];

	obj.login = function (credentials) {
		
		var deferred = $q.defer();

		$http.post('/api/v1/login',
			credentials
		).then(
			function(res) {
				console.log(res);
				obj.isAuthed = true;
				obj.roles = res.data.roles;
				// return true;
				deferred.resolve();
			},
			function(err) {
				console.log(err);
				// return false;
				deferred.reject();
			}
		);

		return deferred.promise;

	}; 


	return obj;

})

.controller("LoginCtrl", function($scope, $state, UserService, $timeout) {
	
	console.log("LoginCtrl");

	$scope.SignIn = function() {
		
		UserService.login($scope.credentials).then(
			
			function(res) {
				console.log("ok");

				// Баг какой то... без $timeout не работает
				// https://github.com/angular-ui/ui-router/issues/1583
				$timeout(function() {
					$state.go("about");
				}, 0);
			}

		);
		
	};

})