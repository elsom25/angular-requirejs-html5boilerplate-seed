define([
	// Standard Libs
	'Console'		// lib/console/console
	, 'jQuery'		// lib/jquery/jquery
	, 'Underscore'	// lib/underscore/underscore
	, 'Angular'		// lib/angular/angular

	// Application Widgets

], function(Console, $, _, angular){
	"use strict";
	Console.group("Entering Widgets module.");

	var registeredWidgets = {};
	Console.info("Registered widgets: ", registeredWidgets);

	var initialize = function () {
		_.extend(angular.widget, registeredWidgets);
		Console.debug("Custom widgets initialized.");
	}

	Console.groupEnd();
	return { 
		initialize: initialize
	};
});
