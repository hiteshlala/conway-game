angular.module('conway.start', [])

.controller('StartController', function($scope, $location, $routeParams, createUniverse, universeData, gameController) {
  $scope.data = universeData;

  var node = '.universe';

  var getNextGenAndDraw = function() {
    $scope.data.cycles = $scope.data.cycles + 1;
    $scope.data.currentState = createUniverse.nextGeneration($scope.data.currentState);
    createUniverse.updateGrid(node, $scope.data.currentState);
    $scope.$apply();
    gameController.updateGame($scope.data);
  };

  var beginEvolving = function() {
    return setInterval(getNextGenAndDraw, $scope.data.timeIncrement);
  };

  var intervalId;
  var initialize = function() {
    if($scope.data.gameId) {
      createUniverse.clearGrid(node);
      createUniverse.drawGrid(node, $scope.data.currentState);
      intervalId = beginEvolving();
    }
    else if( $routeParams.id ) {
      gameController.getGame( $routeParams.id )
      .then(function(game) {
        $scope.data = game.data;
        $scope.data.gameId = game.data._id;
        createUniverse.drawGrid(node, $scope.data.currentState);
        intervalId = beginEvolving();
      });
    } 
    else {
      var gameId = window.localStorage.getItem('conway.gameId');
      window.localStorage.removeItem('conway.gameId');

      gameController.getGame(gameId)
      .then(function(game) {
        $scope.data = game.data;
        $scope.data.gameId = game.data._id;
        createUniverse.drawGrid(node, $scope.data.currentState);
        intervalId = beginEvolving();
      });
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
    $scope.data.currentState = [[]];
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
