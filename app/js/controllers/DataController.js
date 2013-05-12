define(['Console'], function (Console) {
  "use strict";
  Console.group("Entering DataController module.");

  var controller = ['$scope', 'DataService', function ($scope,DataService) {
    Console.group("DataController entered.");

    $scope.queue = DataService.query();
    $scope.queueHead = {
      id: 'ID'
      , status: 'Status'
      , name: 'Name'
    };

    $scope.orderByCol = 'id';
    $scope.orderByReversed = false;

    $scope.flipOrderBy = function(col) {
      Console.group("orderByCol", col);
      $scope.orderByReversed = (col == $scope.orderByCol) ? !$scope.orderByReversed : false;
      $scope.orderByCol = col;

      Console.debug("reversed?", $scope.orderByReversed);
      Console.groupEnd();
    }

    Console.groupEnd();
  }];

  Console.groupEnd();
  return controller;
});
