define(['Console', 'order!libs/angular/angular-min'], function (Console) {
	Console.group("Entering Angular module.");
	Console.info("Angular: ", angular);

	if (typeof _ != 'undefined') {
		_.noConflict() && Console.debug("_.noConflict()");
	}

	if(typeof $ != 'undefined') {
		$.noConflict() && Console.debug("$.noConflict()");
	}
	Console.debug("Global names removed.");

	Console.groupEnd();
	return angular;
});