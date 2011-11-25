if( !window.jQuery ) {
	define(['Console', 'order!libs/jquery/jquery-min'], function (Console) {
		Console.group("Entering jQuery module.");
		Console.info("jQuery: ", $);
		Console.groupEnd();
		return $;
	});
}