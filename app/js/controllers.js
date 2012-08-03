'use strict';

/* Controllers */

function HomeController() {
	
}
HomeController.$inject = [];

function MenuController($scope, $location, menuService) {
	$scope.menus = menuService.getMenuEntries(0);
	
	$scope.active = "Home";
	
	$scope.selectMenuEntry = function(name, link) {
		$scope.active = name;
		
		$location.path(link);
	};
}
MenuController.$inject = ['$scope', '$location', 'menuService'];

function PageController() {
	
}
PageController.$inject = [];
