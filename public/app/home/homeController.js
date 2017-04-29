angular.module('conway.home', [])
.controller('HomeController', function($scope, $location, universeData, createUniverse, gameController) {
  // load inital data for start state of universe
  $scope.data = universeData;

  // DOM node to which will attach the univere using D3
  var node = '.startState';

  // draw inital random universe on dom and allow user to make changes
  // by clicking on rectangles which toggles the corresponding
  // state value and color
  createUniverse.drawGrid(node, $scope.data.startState);
  createUniverse.makeClickable(node, $scope.data.startState);
 
  // update the size of universe when row and column is changed
  // generates a new universe of correct size a random one if random set to true
  // clears DOM of old universe then draws new universe on DOM
  $scope.resize = function(random) {
    // make sure values are valid
    if($scope.data.rows >= 1 && $scope.data.rows <= 50 &&
      $scope.data.cols >= 1 && $scope.data.cols <= 100 ) {
      $scope.data.startState = createUniverse.genUniverse($scope.data.rows, $scope.data.cols, random);
      createUniverse.clearGrid(node);
      createUniverse.drawGrid(node, $scope.data.startState);
      createUniverse.makeClickable(node, $scope.data.startState);
    }
  };

  // start the iterations, evolving the universe
  // save universe start state to database
  // redirect to start page which iterates the universe
  $scope.start = function() {
    gameController.createGame($scope.data)
    .then(function(res) {
      $scope.data.gameId = res.data._id;
      $scope.data.currentState = res.data.currentState;
      $scope.data.cycles = 0;
    })
    .then(function() {
      $location.url(`/start/${$scope.data.gameId}`);
    });
  };

});

