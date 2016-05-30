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
    gameController.updateGame($scope.data);
  };

  var beginEvolving = function() {
    return setInterval(getNextGenAndDraw, $scope.data.timeIncrement);
  };

  var intervalId;
  var initialize = function() {
    if($scope.data.gameId) {
      console.log('have data', $scope.data.gameId);
      intervalId = beginEvolving();
    } else {

      console.log('get data', $scope.data.gameId);

    }
  };

  $scope.pause = function() {
    clearInterval(intervalId);
  };

  $scope.resume = function() {
    intervalId = beginEvolving();
  };

  $scope.createNew = function() {
    clearInterval(intervalId);
    $location.url('/');
  };

  $scope.restart = function() {
    clearInterval(intervalId);
    $scope.data.currentState = $scope.data.startState;
    $scope.data.cycles = 0;
    intervalId = beginEvolving();
  };

  initialize();

});
