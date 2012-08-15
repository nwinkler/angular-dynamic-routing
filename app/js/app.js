'use strict';

(function (test) {
	// Declare app level module which depends on filters, and services
	var module = angular.module('angular-dynamic-routing', ['angular-dynamic-routing.services']);
	
	module.config(['$routeProvider', function($routeProvider) {
		test.routeProvider = $routeProvider;  
		  
	    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
	    $routeProvider.otherwise({redirectTo: '/home'});
	}]);
}(window.test = (window.test || {})));
