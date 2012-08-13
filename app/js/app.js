'use strict';

var globalRouteProvider;

// Declare app level module which depends on filters, and services
angular.module('angular-dynamic-routing', ['angular-dynamic-routing.services']).
  config(['$routeProvider', function($routeProvider) {
	globalRouteProvider = $routeProvider;  
	  
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: HomeController});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);

