'use strict';

angular.module("billAdmApp.bras", ["ui.router"])

.config(["$stateProvider", function($stateProvider) {
	
	$stateProvider
		.state({
			parent: "main",
			name: "bras",
			url: "/bras",
			templateUrl: "bras/bras.html",
			controller: "BrasCtrl",
		});

}])

.controller("BrasCtrl", ["$stateParams", function($stateParams) {
	
	console.log("BrasCtrl");

}])