// 'use strict';

// Declare app level module which depends on views, and components
angular.module("billAdmApp", [
	"ngMaterial",
	"ui.router",
	"billAdmApp.test",
	"billAdmApp.subscribers",
	"billAdmApp.tariffs",
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
			}

		})

		.state("about", {
			parent: "main",
			url: "/about",
			templateUrl: "templates/about.html"
		});


	$urlRouterProvider.when("", "/about");
	$urlRouterProvider.otherwise("/about");


}]);
