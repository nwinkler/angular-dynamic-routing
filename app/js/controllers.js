'use strict';

/* Controllers */

function HomeController() {
	
}
HomeController.$inject = [];

function MenuController($scope, $location, menuService) {
	$scope.menus = menuService.getMenuEntries(0);
	
	$scope.active = 0;
	
	$scope.selectMenuEntry = function(selectedIndex) {
		$scope.active = selectedIndex;
		
		$location.path($scope.menus[selectedIndex].link);
	};
}
MenuController.$inject = ['$scope', '$location', 'menuService'];

function PageController() {
	
}
PageController.$inject = [];
