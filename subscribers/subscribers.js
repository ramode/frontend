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
			data: {
				permissions: {
					only: ["SUPER ADMIN", "ADMIN", "KASSIR"],
					redirectTo: "login"
				}
			}
		});

}])

.controller("SubscriberCtrl", ["$stateParams", function($stateParams) {
	
	console.log("SubscriberCtrl");

}])