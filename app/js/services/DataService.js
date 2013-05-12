define(['Console'], function (Console) {
  "use strict";
  Console.group("Entering DataService module.");

  var service = ['$resource', function ($resource) {

    return $resource('mock/data/:id.json', {}, {
      query: {method: 'GET', params: {id: 'list'}, isArray: true}
    });

  }];

  Console.groupEnd();
  return service;
});
