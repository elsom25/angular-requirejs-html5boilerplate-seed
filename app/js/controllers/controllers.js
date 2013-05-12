define([
  // Standard Libs
  'Console'      // lib/console/console
  , 'Underscore' // lib/underscore/underscore

  // routing
  , 'routes/routes'

  // Application Controller
  , 'controllers/AppController'
  , 'controllers/HomeController'
  , 'controllers/DataController'

], function (Console, _, routes, app, home,data) {
  "use strict";
  Console.group("Entering controllers module.");
  Console.info("AppController", app);

  var controllers = {
    home: home,
    data: data
  };


  var setUpRoutes = function(angModule) {
    // hook up routing
    Console.group( 'Initializing navigation and routing.' );
    angModule.config(function($routeProvider){
      _.each(routes, function(value, key) {
        Console.debug("Adding ", key, ":", value);
        $routeProvider.when(
          value.route
          , {
            template: value.template
            , controller: value.controller
            , title: value.title
          }
        );
      });
      $routeProvider.otherwise({ redirectTo: routes.home.route });
    });
    angModule.run(function($rootScope){
      $rootScope.$on('$routeChangeSuccess',function (next,last) {
        Console.debug("Navigating from ", last);
        Console.debug("Navigating to   ", next);
      });
    });
  }

  var initialize = function(angModule) {
    angModule.controller('AppController', app);
    _.each(controllers,function(controller,name){
      angModule.controller(name, controller);
    })
    setUpRoutes(angModule);
    Console.info("Registered Controllers: ", controllers);
  };


  Console.groupEnd();
  return {
    initialize: initialize
  };
});
