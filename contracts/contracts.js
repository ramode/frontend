'use strict';

angular.module("billAdmApp.contracts", ["md.data.table"]).config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		.state("contracts", {
			parent: "main",
			template: "<ui-view />",
			url: "/contracts",
			// controller: "SubscriberCtrl",
			abstract: true,
			
			data: {
				permissions: {
					only: ["SUPER ADMIN", "ADMIN", "KASSIR"],
					redirectTo: "login"
				}
			}
		})

		.state("contracts.list", {
			url: "/list",
			templateUrl: "contracts/list_contracts.html",
			controller: "ListContractsCtrl",
		})

		.state("contracts.new", {

			url: "/new",
			templateUrl: "contracts/new_contract.html",
			controller: "NewContractCtrl",

			// data: {
			// 	permissions: {
			// 		only: ["SUPER ADMIN", "ADMIN", "KASSIR"],
			// 		redirectTo: "login"
			// 	}
			// }
		})

})

.controller("ContractCtrl", [function() {
	
	console.log("ContractCtrl");

}])

.controller("ListContractsCtrl", function($scope, $http, UserService) {
	
	console.log("ListContractsCtrl");
	console.log(UserService);

	$scope.isLoading = true;
	$http.get("/api/v1/subscribers/list").then(
		function(res) {
			console.log(res);
			$scope.isLoading = false;
			console.log(res.data);
			$scope.subscribers = res.data;
		},
		function(err) {
			console.log(err);
			$scope.isLoading = false;
		}
	);

})


.controller("NewContractCtrl", ["$scope", "$http", function($scope, $http) {

	console.log("NewContractCtrl");

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