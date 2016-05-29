angular.module('conway.start', [])

.controller('StartController', function($scope, $location, createUniverse, universeData, gameController) {
  $scope.data = universeData;

  var node = '.universe';

  var getNextGenAndDraw = function() {
    $scope.data.cycles = $scope.data.cycles + 1;
    $scope.data.currentState = createUniverse.nextGeneration($scope.data.currentState);
    createUniverse.clearGrid(node);
    createUniverse.drawGrid(node, $scope.data.currentState);
    $scope.$apply();
  };

  var beginEvolving = function() {
    return setInterval(getNextGenAndDraw, $scope.data.timeIncrement);
  };

  var intervalId = beginEvolving();

  $scope.pause = function() {
    clearInterval(intervalId);
  };

  $scope.restart = function() {
    intervalId = beginEvolving();
  };

  $scope.createNew = function() {
    clearInterval(intervalId);
    $location.url('/');
  };

});
