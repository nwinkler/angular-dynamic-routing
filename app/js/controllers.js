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
		
		$scope.updateMenuEntries();
	};
	
	$scope.selectMenuEntry = function(selectedIndex) {
		$scope.active = selectedIndex;
		
		$location.path($scope.menus[selectedIndex].link);
	};
	
	$scope.updateMenuEntries = function() {
		var i,
			menu;
		
		$scope.menus = menuService.getMenuEntries($scope.currentMenuSet);
		
		for (i = 0; i < $scope.menus.length; i++) {
			menu = $scope.menus[i];
			
			globalRouteProvider.when(menu.link, {templateUrl: menu.templateUrl, controller: PageController});
		}
	};
	
	$scope.updateMenuEntries();
}
MenuController.$inject = ['$scope', '$location', 'menuService'];

function PageController() {
	
}
PageController.$inject = [];
