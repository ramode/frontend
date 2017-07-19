'use strict';

angular.module("billAdmApp.login", [])

.config(["$stateProvider", function($stateProvider) {
	
	$stateProvider
		.state("login", {
			url: "/login",
			views: {
				"login": {
					templateUrl: "login/login.html",
				},
			},
			
		});

}])

.controller("LoginCtrl", ["$stateParams", function($stateParams) {
	
	console.log("LoginCtrl");

}])