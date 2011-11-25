define([
	// Standard Libs
	'Console'		// lib/console/console
	, 'jQuery'		// lib/jquery/jquery
	, 'Underscore'	// lib/underscore/underscore
	, 'Angular'		// lib/angular/angular

	// Application Filters

], function (Console, $, _, angular){
	"use strict";
	Console.group("Entering Filters module.");

	var registeredFilters = {};
	Console.info("Registered filters: ", registeredFilters);

	var initialize = function () {
		_.extend(angular.widget, registeredFilters);
		Console.debug("Custom filters initialized.");
	}

	Console.groupEnd();
	return { 
		initialize: initialize
	};
});
