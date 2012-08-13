'use strict';

var globalRouteProvider;

// Declare app level module which depends on filters, and services
angular.module('angular-dynamic-routing', ['angular-dynamic-routing.services']).
  config(['$routeProvider', function($routeProvider) {
	globalRouteProvider = $routeProvider;  
	  
    $routeProvider.when('/link1', {templateUrl: 'partials/page1.html', controller: PageController});
    $routeProvider.when('/link2', {templateUrl: 'partials/page2.html', controller: PageController});
    $routeProvider.when('/link3', {templateUrl: 'partials/page3.html', controller: PageController});
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: HomeController});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);

