define([
	// Standard Libs
	'Console'		// lib/console/console
	, 'Underscore'	// lib/underscore/underscore

	// Custom Services
	, 'services/DataService'
], function(Console, _, ds){
	"use strict";
	Console.group("Entering Service module.");
	Console.info("DataService", ds);

	var registeredServices = {
		DataService: ds
	};
	Console.info("Registered services: ", registeredServices);

	var initialize = function () {
		_.extend(angular.service, registeredServices);
		Console.debug("Custom services initialized.");
	}

	Console.groupEnd();
	return { 
		initialize: initialize
	};
});
