'use strict';

/* Controllers */

function HomeController() {
	
}
HomeController.$inject = [];

function MenuController($scope, $location, menuService) {
	$scope.currentMenuSet = 0;
	$scope.active = 0;
	
	$scope.updateMenu = function () {
		if ($scope.currentMenuSet == 0) {
			$scope.currentMenuSet = 1;
		}
		else {
			$scope.currentMenuSet = 0;
		}
		
		$scope.menus = menuService.getMenuEntries($scope.currentMenuSet);
	};
	
	$scope.selectMenuEntry = function(selectedIndex) {
		$scope.active = selectedIndex;
		
		$location.path($scope.menus[selectedIndex].link);
	};
	
	$scope.menus = menuService.getMenuEntries($scope.currentMenuSet);
}
MenuController.$inject = ['$scope', '$location', 'menuService'];

function PageController() {
	
}
PageController.$inject = [];
