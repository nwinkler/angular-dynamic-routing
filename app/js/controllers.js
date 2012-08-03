'use strict';

/* Controllers */

function HomeController() {
	
}
HomeController.$inject = [];

function MenuController($scope, menuService) {
	$scope.menus = menuService.getMenuEntries(0);
}
MenuController.$inject = ['$scope', 'menuService'];

function PageController() {
	
}
PageController.$inject = [];
