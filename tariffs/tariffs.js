'use strict';

angular.module("billAdmApp.tariffs", ["ui.router"])

.config(["$stateProvider", function($stateProvider) {
	
	$stateProvider
		.state({
			parent: "main",
			name: "tariffs",
			url: "/tariffs",
			templateUrl: "tariffs/tariffs.html",
			controller: "TariffsCtrl",
		});

}])

.controller("TariffsCtrl", ["$stateParams", function($stateParams) {
	
	console.log("TariffsCtrl");

}])