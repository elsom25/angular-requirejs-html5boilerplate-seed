define(['Console'], function (Console) {
	"use strict";
	Console.group("Entering HomeController module.");
	
	var controller = function () {
		Console.group("HomeController entered.");

		var scope = this;

		Console.groupEnd();
	};
	controller.$inject = [];

	Console.groupEnd();
	return controller;
});