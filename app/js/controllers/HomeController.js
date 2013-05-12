define(['Console'], function (Console) {
  "use strict";
  Console.group("Entering HomeController module.");

  var controller = function ($scope) {
    Console.group("HomeController entered.");
    Console.groupEnd();
  };
  controller.$inject = [];

  Console.groupEnd();
  return controller;
});
