define(['Console'], function (Console) {
	"use strict";
	Console.group("Entering DataController module.");
	
	var controller = function (DataService) {
		Console.group("DataController entered.");

		var scope = this;

		scope.queue = DataService.query();
		scope.queueHead = {
			id: 'ID'
			, status: 'Status'
			, name: 'Name'
		};

		scope.orderByCol = 'id';
		scope.orderByReversed = false;

		this.flipOrderBy = function(col) {
			Console.group("orderByCol", col);
			scope.orderByReversed = (col == scope.orderByCol) ? !scope.orderByReversed : false;
			scope.orderByCol = col;		

			Console.debug("reversed?", scope.orderByReversed);
			Console.groupEnd();
		}

		Console.groupEnd();
	};
	controller.$inject = ['DataService'];

	Console.groupEnd();
	return controller;
});