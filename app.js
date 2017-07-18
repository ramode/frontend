// 'use strict';

// Declare app level module which depends on views, and components
angular.module("billAdmApp", [
	"ngMaterial",
	"ui.router",
	// 'myApp.view1',
	// 'myApp.view2',
	// 'myApp.version'
]).

config(["$stateProvider", function($stateProvider) {

	var testState = {
		name: "test",
		url: "/test",
		template: "<h3>hello world!</h3>",
	};

	var testState2 = {
		name: "test2",
		url: "/test2",
		template: "<h3>hello world! 2222</h3>",
	};

	$stateProvider.state(testState);
	$stateProvider.state(testState2);

}]);
