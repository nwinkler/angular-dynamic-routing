'use strict';

/* Services */

angular.module('angular-dynamic-routing.services', [], function($provide) {
	$provide.factory('menuService', function() {
		var menus = [
			[
			 { name: 'Home', link: '/home', templateUrl: 'partials/home.html' },
			 { name: 'Entry 1', link: '/link1', templateUrl: 'partials/page1.html' },
			 { name: 'Entry 2', link: '/link2', templateUrl: 'partials/page2.html' },
			 { name: 'Entry 3', link: '/link3', templateUrl: 'partials/page3.html' }
			],
			[
			 { name: 'Home', link: '/home', templateUrl: 'partials/home.html' },
			 { name: 'Entry 4', link: '/link4', templateUrl: 'partials/page4.html' },
			 { name: 'Entry 5', link: '/link5', templateUrl: 'partials/page5.html' },
			 { name: 'Entry 6', link: '/link6', templateUrl: 'partials/page6.html' }
			 ]
		];
		
		var menuServiceInstance = {
			getMenuEntries: function(id) {
				return menus[id];
			}
		};
		
		return menuServiceInstance;
	});
});