define([
	// Standard Libs
	'Console'		// lib/console/console
	, 'Underscore'	// lib/underscore/underscore

	// Application Controller
	, 'controllers/AppController' // Main Application Controller - contains routing logic
], function (Console, _, app){
	"use strict";
	Console.group("Entering controllers module.");
	Console.info("AppController", app);

	var registeredControllers = {
		AppController: app
	};
	Console.info("Registered Controllers: ", registeredControllers);

	Console.groupEnd();
	return registeredControllers;
});