// 'use strict';

// Declare app level module which depends on views, and components
angular.module("billAdmApp", [
	"ngMaterial",
	"ui.router",
	"permission",
	"permission.ui",
	"billAdmApp.test",
	"billAdmApp.login",
	"billAdmApp.subscribers",
	"billAdmApp.tariffs",
	"billAdmApp.bras",
	// 'myApp.view2',
	// 'myApp.version'
])

.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state("main", {
			abstract: true,
			views: {
				"header": {
					templateUrl: "templates/header.html",
				},
				"content": {
					template: "<div ui-view></div>",
				},
				"footer": {
					templateUrl: "templates/footer.html",
				}
			},

			data: {
				permissions: {
					only: ["SUPER ADMIN", "ADMIN", "KASSIR", "SUBSCRIBER"],
					redirectTo: "login"
				}
			}

		})

		.state("about", {
			parent: "main",
			url: "/about",
			templateUrl: "templates/about.html"
		});


	$urlRouterProvider.when("", "/about");
	$urlRouterProvider.otherwise("/about");


}])

.run(["PermRoleStore", "$q", "$http", function(PermRoleStore, $q, $http) {

	var CheckRole = function(roleName) {

			return function(roleName) {

	            var deferred = $q.defer();
	            
	            $http.post("/api/v1/check_role", {"role": roleName}).then(
					function(res) {

						// console.log(res);

						if ( res.status == 200 ) {
							deferred.resolve();
						} else if ( res.status == 204 ) {
							deferred.reject();
						}

					},
					function(err) {
						console.log(err);
					}

	            );

	            return deferred.promise;
			};

    };


	PermRoleStore.defineRole("SUBSCRIBER", CheckRole());
	PermRoleStore.defineRole("KASSIR", CheckRole());
	PermRoleStore.defineRole("ADMIN", CheckRole());
	PermRoleStore.defineRole("SUPER ADMIN", CheckRole());

}])
