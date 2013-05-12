define([
  // Standard Libs
  'Console'      // lib/console/console
  , 'jQuery'     // lib/jquery/jquery
  , 'Underscore' // lib/underscore/underscore
  , 'Angular'    // lib/angular/angular

  // Application Files
  , 'services/services'
  , 'directives/directives'
  , 'filters/filters'
  , 'controllers/controllers'
], function (Console, $, _, angular, services, directives, filters, controllers) {
  "use strict";

  var initialize = function () {
    Console.group("Starting application.");
    Console.info("Services: ", services);
    Console.info("Widgets: ", directives);
    Console.info("Filters: ", filters);
    Console.info("Controllers: ", controllers);

    Console.group("Setup Angular");

    var mainModule = angular.module('myApp',['ngResource']);
    services.initialize(mainModule);
    directives.initialize(mainModule);
    filters.initialize(mainModule);
    controllers.initialize(mainModule);

    angular.bootstrap(window.document,['myApp']);
    Console.info("Angular compiled and executed.");

    Console.groupEnd(); // [angular]
    Console.groupEnd(); // [bootstrap]
  };

  return {
    initialize: initialize
  };
});
