define(['Console', 'order!//ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.js'], function (Console) {
	Console.group("Entering CDN jQuery module.");
	Console.info("jQuery: ", $);
	Console.groupEnd();
	return $;
});