'use strict';

/* Services */

angular.module('angular-dynamic-routing.services', [], function($provide) {
	$provide.factory('menuService', function() {
		var menus = [
			[
			 { name: 'Entry 1', link: '#/link1' },
			 { name: 'Entry 2', link: '#/link2' },
			 { name: 'Entry 3', link: '#/link3' }
			],
			[
			 { name: 'Entry 4', link: '#/link4' },
			 { name: 'Entry 5', link: '#/link5' },
			 { name: 'Entry 6', link: '#/link6' }
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