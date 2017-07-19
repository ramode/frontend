'use strict';

angular.module("billAdmApp.test", ["ui.router"])

.config(["$stateProvider", function($stateProvider) {
	
	var testState = {
		name: "test",
		url: "/test/",
		template: "<h3>TestCtrl!</h3>",
		controller: "TestCtrl",
	};

	$stateProvider.state(testState);

}])

.controller("TestCtrl", ["$stateParams", function($stateParams) {
	console.log("TestCtrl");
	console.log($stateParams);
}])

// ---------------------------------------------------------------

.config(["$stateProvider", function($stateProvider) {
	
	$stateProvider.state({

		// name: "test",
		// url: "/tests/{testId}",
		name: "test.item",
		url: "/{testId}",
		template: "<h3>TestSs Ctrl!</h3>",
		controller: "TestSsCtrl",

	});

}])

// .controller("TestSsCtrl", ["$transition$", function($transition$) {
.controller("TestSsCtrl", ["$stateParams", function($stateParams) {

	console.log("TestSsCtrl");

	
	// console.log($transition$.params().testId);
	console.log($stateParams);
	console.log($stateParams.testId);

	console.log("asdsad");

}])