'use strict';

angular.module("billAdmApp.subscribers", []).config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		.state("subscribers", {
			parent: "main",
			template: "<ui-view />",
			url: "/subscribers",
			// controller: "SubscriberCtrl",
			abstract: true,
			
			data: {
				permissions: {
					only: ["SUPER ADMIN", "ADMIN", "KASSIR"],
					redirectTo: "login"
				}
			}
		})

		.state("subscribers.list", {
			url: "/list",
			templateUrl: "subscribers/list_subscribers.html",
			controller: "ListSubscribersCtrl",
		})

		.state("subscribers.new", {

			url: "/new",
			templateUrl: "subscribers/new_subscriber.html",
			controller: "NewSubscriberCtrl",

			// data: {
			// 	permissions: {
			// 		only: ["SUPER ADMIN", "ADMIN", "KASSIR"],
			// 		redirectTo: "login"
			// 	}
			// }
		})

}])

.controller("SubscriberCtrl", [function() {
	
	console.log("SubscriberCtrl");

}])

.controller("ListSubscribersCtrl", [function() {
	
	console.log("ListSubscribersCtrl");

}])


.controller("NewSubscriberCtrl", ["$scope", "$http", function($scope, $http) {

	console.log("NewSubscriberCtrl");

	$scope.CreateSubscriber = function() {

		console.log($scope.subscriber);

		$scope.isLoading = true;

		$http.post("/api/v1/subscribers/new", $scope.subscriber).then(
			function(res) {
				console.log(res);
				$scope.isLoading = false;
				if ( res.status == 200 ) {
					console.log("NEED REDIRECT HERE")
				};
			},
			function(err) {
				console.log(err);
				$scope.isLoading = false;
			});
		
	}

}]);