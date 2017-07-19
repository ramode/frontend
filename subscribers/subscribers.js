'use strict';

angular.module("billAdmApp.subscribers", [])

.config(["$stateProvider", function($stateProvider) {
	
	$stateProvider
		.state({
			parent: "main",
			name: "subscribers",
			url: "/subscribers",
			templateUrl: "subscribers/subscribers.html",
			controller: "SubscriberCtrl",
		});

}])

.controller("SubscriberCtrl", ["$stateParams", function($stateParams) {
	
	console.log("SubscriberCtrl");

}])