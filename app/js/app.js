define([
	// Standard Libs
	'Console'		// lib/console/console
	, 'jQuery'		// lib/jquery/jquery
	, 'Underscore'	// lib/underscore/underscore
	, 'Angular'		// lib/angular/angular
	
	// Application Files
	, 'services/services'
	, 'widgets/widgets'
	, 'filters/filters'
	, 'controllers/controllers'	
], function (Console, $, _, angular, services, widgets, filters, controllers) {
	"use strict";
	
	var initialize = function () {
		Console.group("Starting application.");
		Console.info("Services: ", services);
		Console.info("Widgets: ", widgets);
		Console.info("Filters: ", filters);
		Console.info("Controllers: ", controllers);
		
		Console.group("Setup Angular");

		services.initialize();
		widgets.initialize();
		filters.initialize();

		var scope = angular.scope();
		_.extend(scope, controllers);		
		Console.debug("Controllers loaded.");

		angular.compile(window.document)(scope);
		Console.info("Angular compiled and executed.");

		Console.groupEnd(); // [angular]
		Console.groupEnd(); // [bootstrap]
	};

	return { 
		initialize: initialize
	};
});