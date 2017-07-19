'use strict';

angular.module("billAdmApp.bras", [])

.config(["$stateProvider", function($stateProvider) {
	
	$stateProvider
		.state({
			parent: "main",
			name: "bras",
			url: "/bras",
			templateUrl: "bras/bras.html",
			controller: "BrasCtrl",
			data: {
				permissions: {
					only: ["SUPER ADMIN", "ADMIN"]
				}
			}
		});

}])

.controller("BrasCtrl", ["$stateParams", function($stateParams) {
	
	console.log("BrasCtrl");

}])