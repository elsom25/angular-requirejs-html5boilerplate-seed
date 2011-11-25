define([
	// Standard Libs
	'Console'		// lib/console/console
	, 'Underscore'	// lib/underscore/underscore

	// Custom controllers
	, 'controllers/HomeController'
	, 'controllers/DataController'
], function (Console, _, home, data) {
	"use strict";
	Console.group("Entering AppController module.");
	Console.info("HomeController", home);
	Console.info("DataController", data);

	var controller = function ($route) {
		Console.group("AppController entered");
		Console.info("Route: ", $route);

		var scope = this;	

		// default title if javascript is being slow
		scope.title = 'loading...';

		// application navigation
		scope.navigation = {
			home: { 
				title: 'Home'
				, route: '/home'
				, controller: home
				, template: 'templates/Home.xhtml'
			}
			, creation: { 
				title: 'Data List'
				, route: '/data'
				, controller: data
				, template: 'templates/Data.xhtml'
			}
		};

		// hook up routing
		Console.group( 'Initializing navigation and routing.' );
		_.each(scope.navigation, function(value, key) {
			Console.debug("Adding ", key, ":", value);
			$route.when(
				value.route
				, {
					template: value.template
					, controller: value.controller
					, title: value.title
				}
			);
		});
		$route.otherwise({ redirectTo: scope.navigation.home.route });
		$route.onChange(function () {
			Console.debug("Navigating to ", $route.current);
			scope.params = $route.current.params;
			scope.title = $route.current.title;
		});
		$route.parent(this);
		
		Console.groupEnd();// .routing
		Console.groupEnd();// .controller
	};
	controller.$inject = ['$route'];
	controller.$eager = true;

	Console.groupEnd();
	return controller;
});