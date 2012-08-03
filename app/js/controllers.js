'use strict';

/* Controllers */

function HomeController() {
	
}
HomeController.$inject = [];

function MenuController($scope) {
	$scope.menus = [
	    { name: 'Entry 1', link: '#/link1' },
	    { name: 'Entry 2', link: '#/link2' },
	    { name: 'Entry 3', link: '#/link3' }
	];
}
MenuController.$inject = ['$scope'];

function PageController() {
	
}
PageController.$inject = [];
